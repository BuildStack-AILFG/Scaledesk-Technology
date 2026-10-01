import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/seo/JsonLd";
import Reveal from "../../components/shell/Reveal";
import SmartLink from "../../components/shell/SmartLink";
import PageHero from "../../components/pages/PageHero";
import HomeCta from "../../components/home/HomeCta";
import PostCard, { formatDate } from "../../components/blog/PostCard";
import { ReadingProgress, TableOfContents } from "../../components/blog/ArticleChrome";
import { getCategory } from "../../../lib/blog/categories";
import { getPost, getPostSlugs, getRelated, renderMarkdown } from "../../../lib/blog/posts";
import { IMG, fill, tone } from "../../../lib/images";
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
        <ReadingProgress targetId="article-body" />
        <PageHero crumbs={crumbs} label={cat.name} title={post.title} lead={post.description} narrow>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[14.5px] text-sd-muted">
            <span className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sd-navy font-display text-[12px] font-bold text-white">
                SD
              </span>
              <span className="font-medium text-sd-ink">ScaleDesk Technology</span>
            </span>
            <span aria-hidden="true" className="text-sd-faint">
              &middot;
            </span>
            <span>
              {formatDate(post.date)}
              {post.updated !== post.date ? ` (updated ${formatDate(post.updated)})` : ""}
            </span>
            <span aria-hidden="true" className="text-sd-faint">
              &middot;
            </span>
            <span>{post.readTime}</span>
          </div>
        </PageHero>

        <section className="bg-white pb-20 lg:pb-28">
          <div className="sd-container">
            <Reveal className="mx-auto -mt-2 max-w-[1080px]">
              <div className={`relative aspect-[16/7] overflow-hidden rounded-[24px] shadow-[0_30px_60px_-30px_rgba(11,27,51,0.4)] ${tone(cat.image)}`}>
                <Image {...fill(cat.image, "center 35%")} sizes="(min-width: 1100px) 1080px, 94vw" />
              </div>
            </Reveal>
          </div>
          <div className="sd-container mt-14 grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                {post.toc.length > 0 && <TableOfContents items={post.toc} />}
                <Link href={`/blog/category/${cat.slug}`} className="sd-link mt-8 !text-[15px]">
                  More on {cat.name.toLowerCase()}
                </Link>
              </div>
            </aside>

            <article id="article-body" className="max-w-[740px]">
              <div className="sd-prose" dangerouslySetInnerHTML={{ __html: html }} />

              <div className="sd-gradient-card mt-16 p-8 sm:p-10">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7fe3ea]">{cat.name}</p>
                <h2 className="mt-3 font-display text-[clamp(22px,2vw,28px)] font-bold leading-tight tracking-tight">{cat.cta.title}</h2>
                <p className="mt-3 max-w-[560px] text-[16px] leading-relaxed text-white/80">{cat.cta.text}</p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link href={cat.cta.href} className="sd-btn sd-btn-light">
                    {cat.cta.label}
                  </Link>
                  {cat.cta.appUrl && (
                    <SmartLink href={cat.cta.appUrl} external className="sd-btn sd-btn-ghost-light sd-btn-plain">
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
              <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="sd-label">Keep reading</p>
                  <h2 className="sd-h2 mt-4">More guides on {cat.name.toLowerCase()}</h2>
                </div>
                <Link href="/blog" className="sd-btn sd-btn-outline shrink-0">
                  All articles
                </Link>
              </Reveal>
              <div className="grid gap-5 md:grid-cols-3">
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
