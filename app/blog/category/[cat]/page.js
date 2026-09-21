import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/seo/JsonLd";
import Reveal from "../../../components/shell/Reveal";
import SmartLink from "../../../components/shell/SmartLink";
import PageHero from "../../../components/pages/PageHero";
import HomeCta from "../../../components/home/HomeCta";
import { CategoryChips, PostGrid } from "../../../components/blog/BlogListing";
import { CATEGORIES, getCategory } from "../../../../lib/blog/categories";
import { getPostsByCategory } from "../../../../lib/blog/posts";
import { buildPageMetadata } from "../../../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../../../lib/seo/schema";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ cat: c.slug }));
}

export async function generateMetadata({ params }) {
  const { cat } = await params;
  const c = getCategory(cat);
  if (!c) return { title: "Blog | ScaleDesk Technology" };
  return buildPageMetadata({
    title: `${c.name}: Guides and Articles`,
    seoTitle: `${c.name}: Guides & Articles | ScaleDesk Blog`,
    metaDescription: c.description,
    path: `/blog/category/${c.slug}`,
    primaryKeyword: c.name,
    secondaryKeywords: ["ScaleDesk blog", "guides", "how to"],
  });
}

export default async function CategoryPage({ params }) {
  const { cat } = await params;
  const c = getCategory(cat);
  if (!c) notFound();

  const posts = getPostsByCategory(c.slug);
  const path = `/blog/category/${c.slug}`;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: c.name, href: path },
  ];
  const graph = pageGraph({
    breadcrumbs: crumbs.map((x) => ({ name: x.name, path: x.href })),
    page: { title: `${c.name}: Guides and Articles`, description: c.description, path },
  });
  graph["@graph"].push(collectionPageSchema({ title: c.name, description: c.description, path }));

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero crumbs={crumbs} label="Blog topic" title={c.name} lead={c.description} />

        <section className="bg-white sd-section">
          <div className="sd-container">
            <Reveal>
              <CategoryChips active={c.slug} />
            </Reveal>
            <Reveal className="mx-auto mt-12 max-w-[820px] space-y-5 text-[19px] leading-relaxed text-[#333]">
              {c.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </Reveal>
            <div className="mt-14">
              <PostGrid posts={posts} />
            </div>
          </div>
        </section>

        <section className="sd-surface sd-section-tight">
          <div className="sd-container">
            <Reveal className="mx-auto max-w-[820px] rounded-3xl border border-[#dfe8ec] bg-white p-8 text-center">
              <h2 className="sd-h3">{c.cta.title}</h2>
              <p className="mt-3 text-[17px] leading-relaxed text-[#444]">{c.cta.text}</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <Link href={c.cta.href} className="sd-btn sd-btn-primary">
                  {c.cta.label}
                </Link>
                {c.cta.appUrl && (
                  <SmartLink href={c.cta.appUrl} external className="sd-link">
                    {c.cta.appLabel}
                  </SmartLink>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        <HomeCta />
      </main>
    </>
  );
}
