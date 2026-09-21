import Link from "next/link";
import JsonLd from "../seo/JsonLd";
import Reveal from "../shell/Reveal";
import PageHero from "../pages/PageHero";
import HomeCta from "../home/HomeCta";
import { CategoryChips, Pagination, PostGrid } from "./BlogListing";
import { CATEGORIES } from "../../../lib/blog/categories";
import { pageGraph, collectionPageSchema } from "../../../lib/seo/schema";

export const BLOG_DESCRIPTION =
  "Practical guides on WhatsApp automation, Instagram automation, CRM, AI agents and the technology behind business growth, from ScaleDesk Technology.";

/** Blog home (page 1) and its numbered pages. `data` comes from paginate(). */
export default function BlogHub({ data }) {
  const path = data.page === 1 ? "/blog" : `/blog/page/${data.page}`;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    ...(data.page > 1 ? [{ name: `Page ${data.page}`, href: path }] : []),
  ];
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: { title: "ScaleDesk Blog", description: BLOG_DESCRIPTION, path },
  });
  graph["@graph"].push(collectionPageSchema({ title: "ScaleDesk Blog", description: BLOG_DESCRIPTION, path }));

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero
          crumbs={crumbs}
          label="ScaleDesk blog"
          title="Guides for growing with WhatsApp, Instagram, CRM and AI"
          lead={BLOG_DESCRIPTION}
        />

        <section className="bg-white sd-section">
          <div className="sd-container">
            <Reveal>
              <CategoryChips />
            </Reveal>
            <div className="mt-12">
              <PostGrid posts={data.items} />
              <Pagination page={data.page} pages={data.pages} />
            </div>
          </div>
        </section>

        {data.page === 1 && (
          <section className="sd-surface sd-section">
            <div className="sd-container">
              <Reveal className="mx-auto max-w-[760px] text-center">
                <h2 className="sd-h2">Browse by topic</h2>
                <span className="sd-dash" aria-hidden="true" />
              </Reveal>
              <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {CATEGORIES.map((c, i) => (
                  <Reveal key={c.slug} delay={(i % 3) * 80} className="border-t-2 pt-5" style={{ borderColor: c.accent }}>
                    <h3 className="text-[22px] font-normal text-[#111]">{c.name}</h3>
                    <p className="mt-2 text-[16px] leading-snug text-[#555]">{c.description}</p>
                    <Link href={`/blog/category/${c.slug}`} className="sd-link mt-4">
                      Read the guides
                    </Link>
                  </Reveal>
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
