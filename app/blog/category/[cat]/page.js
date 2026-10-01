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
            <Reveal className="mx-auto mt-12 max-w-[780px] space-y-5 text-[18px] leading-relaxed text-sd-body">
              {c.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </Reveal>
            <div className="mt-14">
              <PostGrid posts={posts} />
            </div>
          </div>
        </section>

        <section className="bg-white pb-6">
          <div className="sd-container">
            <Reveal className="sd-gradient-card mx-auto max-w-[960px] p-8 text-center sm:p-12">
              <h2 className="font-display text-[clamp(22px,2.2vw,30px)] font-bold leading-tight tracking-tight">{c.cta.title}</h2>
              <p className="mx-auto mt-3 max-w-[600px] text-[16px] leading-relaxed text-white/80">{c.cta.text}</p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link href={c.cta.href} className="sd-btn sd-btn-light">
                  {c.cta.label}
                </Link>
                {c.cta.appUrl && (
                  <SmartLink href={c.cta.appUrl} external className="sd-btn sd-btn-ghost-light sd-btn-plain">
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
