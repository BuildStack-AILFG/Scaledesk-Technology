import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/seo/JsonLd";
import Reveal from "../../components/shell/Reveal";
import PageHero from "../../components/pages/PageHero";
import HomeCta from "../../components/home/HomeCta";
import { Arrow, IconTile, accent } from "../../components/ui/CardParts";
import { getGlossaryTerm, getGlossarySlugs } from "../../../lib/seo/glossary";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { pageGraph } from "../../../lib/seo/schema";
import { PLATFORMS } from "../../../lib/catalog/platforms";

const TERM_ACCENTS = ["#00A3B0", "#7C4DFF", "#E58A00", "#1F9D55", "#C13584", "#0A5FBE"];

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
        <PageHero
          crumbs={crumbs}
          label="Glossary"
          title={`What is ${term.term}?`}
          lead={`A plain-English explanation of ${term.term}, and how growing businesses put it to work.`}
          narrow
        />

        <section className="sd-surface sd-section">
          <div className="sd-container grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <Reveal className="sd-fcard sd-fcard-tint p-8 sm:p-10" style={accent("#0A5FBE")}>
              <IconTile text={term.term.charAt(0)} size={52} />
              <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-sd-teal-dark">Definition</p>
              <h2 className="mt-2 font-display text-[clamp(24px,2.4vw,32px)] font-bold leading-tight tracking-tight text-sd-ink">
                {term.term}
              </h2>
              <p className="mt-4 text-[17.5px] leading-relaxed text-sd-body">{term.definition}</p>
            </Reveal>

            {relatedServices.length > 0 && (
              <Reveal delay={100} className="sd-fcard sd-fcard-dark flex flex-col p-8 sm:p-10">
                <span className="sd-fcard-grid" aria-hidden="true" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7fe3ea]">How we can help</p>
                <p className="mt-2 font-display text-[22px] font-bold leading-snug tracking-tight text-white">
                  Put {term.term} to work in your business
                </p>
                <ul className="mt-6 flex-1 space-y-2">
                  {relatedServices.map((x) => (
                    <li key={x.href}>
                      <Link
                        href={x.href}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-[15.5px] font-medium text-white transition-colors hover:bg-white/[0.1]"
                      >
                        {x.label}
                        <span aria-hidden="true" className="text-[#7fe3ea] transition-transform group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="sd-btn sd-btn-light mt-8 self-start">
                  Talk to our experts
                </Link>
              </Reveal>
            )}
          </div>

          {relatedTerms.length > 0 && (
            <div className="sd-container mt-16">
              <Reveal>
                <p className="sd-label">Related terms</p>
              </Reveal>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedTerms.map((t, i) => (
                  <Reveal as="li" key={t.slug} delay={(i % 3) * 60}>
                    <Link
                      href={`/glossary/${t.slug}`}
                      className="sd-fcard group flex h-full items-center gap-4 p-5"
                      style={accent(TERM_ACCENTS[i % TERM_ACCENTS.length])}
                    >
                      <IconTile text={t.term.charAt(0)} size={44} />
                      <span className="flex-1 font-display text-[16.5px] font-semibold tracking-tight text-sd-ink">{t.term}</span>
                      <Arrow />
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </div>
          )}
        </section>

        <HomeCta />
      </main>
    </>
  );
}
