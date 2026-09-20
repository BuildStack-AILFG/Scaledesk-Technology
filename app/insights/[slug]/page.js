import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/seo/JsonLd";
import Reveal from "../../components/shell/Reveal";
import PageHero from "../../components/pages/PageHero";
import HomeCta from "../../components/home/HomeCta";
import { INSIGHTS, getInsight, getInsightSlugs } from "../../data/insights";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { pageGraph, articleSchema } from "../../../lib/seo/schema";

export function generateStaticParams() {
  return getInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return { title: "Insight | ScaleDesk Technology" };

  return buildPageMetadata({
    title: article.title,
    seoTitle: article.title,
    metaDescription: article.excerpt,
    path: `/insights/${slug}`,
    primaryKeyword: article.category,
    secondaryKeywords: [article.type, "ScaleDesk Technology", "AI and automation"],
    ogImage: article.image,
    ogType: "article",
    authors: [{ name: article.author, url: "https://scaledesktechnology.com/about" }],
    section: article.category,
  });
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  const path = `/insights/${slug}`;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Insights", href: "/insights" },
    { name: article.title, href: path },
  ];
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: { title: article.title, description: article.excerpt, path },
    article: {
      title: article.title,
      description: article.excerpt,
      path,
      datePublished: article.date,
      image: article.image,
      authorName: article.author,
      section: article.category,
    },
  });
  const more = INSIGHTS.filter((a) => a.slug !== slug);

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero crumbs={crumbs} label={article.category} title={article.title} lead={article.excerpt} narrow>
          <p className="text-[15px] text-[#666]">
            {article.date} &middot; {article.readTime} &middot; {article.author}
          </p>
        </PageHero>

        <section className="bg-white sd-section">
          <div className="sd-container max-w-[820px]">
            <Reveal>
              <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl">
                <Image src={article.image} alt={article.title} fill sizes="(min-width: 900px) 820px, 94vw" className="object-cover" />
              </div>
            </Reveal>
            <article>
              {article.body.map((p, i) => (
                <p key={i} className="mt-6 text-[19px] leading-[1.75] text-[#333] first:mt-0">
                  {p}
                </p>
              ))}
            </article>
          </div>
        </section>

        {more.length > 0 && (
          <section className="sd-surface sd-section-tight">
            <div className="sd-container">
              <p className="sd-label">More insights</p>
              <ul className="mt-5 grid gap-x-10 md:grid-cols-2">
                {more.map((a) => (
                  <li key={a.slug} className="border-b border-[#dfe8ec]">
                    <Link href={`/insights/${a.slug}`} className="block py-4 text-[19px] text-[#111] transition-colors hover:text-[#0a5fbe]">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <HomeCta />
      </main>
    </>
  );
}
