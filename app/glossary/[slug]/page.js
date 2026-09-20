import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/seo/JsonLd";
import Reveal from "../../components/shell/Reveal";
import PageHero from "../../components/pages/PageHero";
import HomeCta from "../../components/home/HomeCta";
import { getGlossaryTerm, getGlossarySlugs } from "../../../lib/seo/glossary";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { pageGraph } from "../../../lib/seo/schema";
import { PLATFORMS } from "../../../lib/catalog/platforms";

export function generateStaticParams() {
  return getGlossarySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) return { title: "Glossary | ScaleDesk Technology" };
  return buildPageMetadata({
    title: term.seoTitle,
    seoTitle: term.seoTitle,
    metaDescription: term.metaDescription,
    path: `/glossary/${slug}`,
    primaryKeyword: term.term,
  });
}

export default async function GlossaryTermPage({ params }) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) notFound();

  const path = `/glossary/${slug}`;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Glossary", href: "/glossary" },
    { name: term.term, href: path },
  ];
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: { title: term.seoTitle, description: term.metaDescription, path },
  });

  const relatedTerms = (term.relatedTerms ?? []).map((s) => getGlossaryTerm(s)).filter(Boolean);
  const relatedServices = (term.relatedServices ?? []).map((href) => {
    const slug = href.split("/").pop();
    const platform = PLATFORMS.find((p) => p.slug === slug);
    return {
      href,
      label: platform ? `${platform.name} ${platform.kind}` : slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" "),
    };
  });

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero crumbs={crumbs} label="Glossary" title={`What is ${term.term}?`} lead={term.definition} narrow />

        {(relatedTerms.length > 0 || relatedServices.length > 0) && (
          <section className="bg-white sd-section">
            <div className="sd-container grid gap-10 md:grid-cols-2">
              {relatedTerms.length > 0 && (
                <Reveal>
                  <p className="sd-label">Related terms</p>
                  <ul className="mt-5 flex flex-wrap gap-3">
                    {relatedTerms.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={`/glossary/${t.slug}`}
                          className="inline-block rounded-full border border-[#d5dbe0] bg-white px-5 py-2 text-[16px] text-[#333] transition-colors hover:border-[#0a5fbe] hover:text-[#0a5fbe]"
                        >
                          {t.term}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
              {relatedServices.length > 0 && (
                <Reveal delay={80}>
                  <p className="sd-label">How we can help</p>
                  <ul className="mt-5 space-y-3">
                    {relatedServices.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="sd-link">
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>
          </section>
        )}

        <HomeCta />
      </main>
    </>
  );
}
