import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/seo/JsonLd";
import Reveal from "../../components/shell/Reveal";
import SmartLink from "../../components/shell/SmartLink";
import PageHero from "../../components/pages/PageHero";
import HomeCta from "../../components/home/HomeCta";
import PostCard, { formatDate } from "../../components/blog/PostCard";
import { getCategory } from "../../../lib/blog/categories";
import { getPost, getPostSlugs, getRelated, renderMarkdown } from "../../../lib/blog/posts";
import { IMG, fill } from "../../../lib/images";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { pageGraph } from "../../../lib/seo/schema";
import { SITE, absoluteUrl } from "../../../lib/seo/config";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog | ScaleDesk Technology" };
  const cat = getCategory(post.category);
  return buildPageMetadata({
    title: post.title,
    seoTitle: post.title,
    metaDescription: post.description,
    path: `/blog/${post.slug}`,
    primaryKeyword: cat.name,
    secondaryKeywords: post.tags,
    ogImage: IMG[cat.image]?.src,
    ogType: "article",
    publishedTime: post.date,
    modifiedTime: post.updated,
    section: cat.name,
    authors: [{ name: SITE.name, url: absoluteUrl("/about") }],
  });
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const cat = getCategory(post.category);
  const path = `/blog/${post.slug}`;
  const html = renderMarkdown(post.markdown);
  const related = getRelated(post, 3);
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: cat.name, href: `/blog/category/${cat.slug}` },
    { name: post.title, href: path },
  ];

  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: { title: post.title, description: post.description, path, datePublished: post.date, dateModified: post.updated },
    article: {
      title: post.title,
      description: post.description,
      path,
      datePublished: post.date,
      dateModified: post.updated,
      image: absoluteUrl(IMG[cat.image]?.src ?? SITE.defaultOgImage),
      authorName: SITE.name,
      section: cat.name,
      keywords: post.tags,
      wordCount: post.words,
    },
    faqs: post.faqs,
  });

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero crumbs={crumbs} label={cat.name} title={post.title} lead={post.description} narrow>
          <p className="text-[15px] text-[#666]">
            By ScaleDesk Technology &middot; {formatDate(post.date)}
            {post.updated !== post.date ? ` (updated ${formatDate(post.updated)})` : ""} &middot; {post.readTime}
          </p>
        </PageHero>

        <section className="bg-white sd-section">
          <div className="sd-container grid gap-10 lg:grid-cols-[250px_1fr] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="sd-label">On this page</p>
                <ul className="mt-4 space-y-2.5 border-l border-[#dfe8ec] pl-4">
                  {post.toc.map((t) => (
                    <li key={t.id}>
                      <a href={`#${t.id}`} className="text-[15px] leading-snug text-[#333] transition-colors hover:text-[#0a5fbe]">
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <Link href={`/blog/category/${cat.slug}`} className="sd-link mt-8">
                  More on {cat.name.toLowerCase()}
                </Link>
              </div>
            </aside>

            <article className="max-w-[780px]">
              <Reveal>
                <div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-3xl">
                  <Image {...fill(cat.image, "center 35%")} sizes="(min-width: 1024px) 780px, 94vw" />
                </div>
              </Reveal>
              <div className="sd-prose" dangerouslySetInnerHTML={{ __html: html }} />

              <div className="mt-14 rounded-3xl border border-[#dfe8ec] bg-[#f0f8f9] p-8">
                <h2 className="sd-h3">{cat.cta.title}</h2>
                <p className="mt-3 text-[17px] leading-relaxed text-[#333]">{cat.cta.text}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link href={cat.cta.href} className="sd-btn sd-btn-primary">
                    {cat.cta.label}
                  </Link>
                  {cat.cta.appUrl && (
                    <SmartLink href={cat.cta.appUrl} external className="sd-link">
                      {cat.cta.appLabel}
                    </SmartLink>
                  )}
                </div>
              </div>
            </article>
          </div>
        </section>

        {related.length > 0 && (
          <section className="sd-surface sd-section">
            <div className="sd-container">
              <Reveal className="mb-10">
                <p className="sd-label">Keep reading</p>
              </Reveal>
              <div className="grid gap-6 md:grid-cols-3">
                {related.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        <HomeCta />
      </main>
    </>
  );
}
