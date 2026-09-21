/**
 * Blog content loader (server only). Articles are Markdown files in
 * /content/blog with a small front-matter block:
 *
 *   ---
 *   title: ...
 *   description: ...            (140-158 characters, used for SEO)
 *   category: whatsapp-automation
 *   date: 2026-09-21
 *   updated: 2026-09-21         (optional)
 *   tags: one, two, three
 *   ---
 *
 * Adding an article = adding a file. Slug = file name. Everything else
 * (pages, category hubs, RSS, sitemap, related links, FAQ schema) is derived.
 *
 * A "## Frequently asked questions" section with "### Question" headings is
 * parsed into FAQPage structured data (and stays visible on the page).
 */
import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { CATEGORIES } from "./categories";

const DIR = path.join(process.cwd(), "content", "blog");
export const PAGE_SIZE = 12;

const slugify = (t) =>
  t.toLowerCase().replace(/<[^>]*>/g, "").replace(/&[a-z]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

marked.use({
  gfm: true,
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      return `<h${depth} id="${slugify(text)}">${text}</h${depth}>\n`;
    },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const external = /^https?:\/\//i.test(href) && !/scaledesktechnology\.com/i.test(href);
      const t = title ? ` title="${title}"` : "";
      return external
        ? `<a href="${href}"${t} target="_blank" rel="noopener">${text}</a>`
        : `<a href="${href}"${t}>${text}</a>`;
    },
  },
});

function parseFile(file) {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8").replace(/\r\n/g, "\n");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(`Blog file ${file} is missing front matter`);
  const meta = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  const markdown = m[2].trim();
  const slug = file.replace(/\.md$/, "");
  const category = CATEGORIES.find((c) => c.slug === meta.category);
  if (!category) throw new Error(`Blog file ${file}: unknown category "${meta.category}"`);
  for (const k of ["title", "description", "date"]) if (!meta[k]) throw new Error(`Blog file ${file}: missing ${k}`);

  if (/^# /m.test(markdown)) throw new Error(`Blog file ${file}: do not use an H1 (# ) in the body; the page title is the H1`);
  if (meta.description.length > 160) throw new Error(`Blog file ${file}: description is ${meta.description.length} chars (max 160)`);
  const words = markdown.replace(/[#>*_`|\-]/g, " ").split(/\s+/).filter(Boolean).length;

  // FAQ section -> [{question, answer}]
  const faqs = [];
  const faqAt = markdown.search(/^## Frequently asked questions\s*$/m);
  if (faqAt >= 0) {
    const after = markdown.slice(faqAt).split("\n").slice(1).join("\n");
    const end = after.search(/^## /m);
    const block = end >= 0 ? after.slice(0, end) : after;
    for (const part of block.split(/^### /m).slice(1)) {
      const [q, ...rest] = part.split("\n");
      const a = rest
        .join(" ")
        .replace(/\s+/g, " ")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/[*_`]/g, "")
        .trim();
      if (q && a) faqs.push({ question: q.trim(), answer: a });
    }
  }

  // Table of contents from H2s (excluding the FAQ block)
  const toc = marked
    .lexer(markdown)
    .filter((t) => t.type === "heading" && t.depth === 2)
    .map((t) => ({ id: slugify(t.text), text: t.text.replace(/[*_`]/g, "") }));

  return {
    slug,
    title: meta.title,
    description: meta.description,
    category: category.slug,
    date: meta.date,
    updated: meta.updated || meta.date,
    tags: (meta.tags || "").split(",").map((t) => t.trim()).filter(Boolean),
    words,
    readTime: `${Math.max(3, Math.round(words / 220))} min read`,
    markdown,
    faqs,
    toc,
  };
}

let cache;
export function getAllPosts() {
  if (!cache) {
    const files = fs.existsSync(DIR) ? fs.readdirSync(DIR).filter((f) => f.endsWith(".md")) : [];
    cache = files.map(parseFile).sort((a, b) => (a.date === b.date ? a.title.localeCompare(b.title) : b.date.localeCompare(a.date)));
  }
  return cache;
}

export const getPost = (slug) => getAllPosts().find((p) => p.slug === slug) ?? null;
export const getPostSlugs = () => getAllPosts().map((p) => p.slug);
export const getPostsByCategory = (cat) => getAllPosts().filter((p) => p.category === cat);
export const renderMarkdown = (md) => marked.parse(md);

/** Same-category posts first, ranked by shared tags. */
export function getRelated(post, n = 3) {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      p,
      score: (p.category === post.category ? 10 : 0) + p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.p);
}

export function paginate(list, page = 1, size = PAGE_SIZE) {
  const pages = Math.max(1, Math.ceil(list.length / size));
  const current = Math.min(Math.max(1, page), pages);
  return { items: list.slice((current - 1) * size, current * size), page: current, pages, total: list.length };
}
