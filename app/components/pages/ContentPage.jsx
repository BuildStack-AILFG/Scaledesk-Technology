import Link from "next/link";
import JsonLd from "../seo/JsonLd";
import Reveal from "../shell/Reveal";
import PageHero from "./PageHero";
import FaqList from "../catalog/FaqList";
import HomeCta from "../home/HomeCta";
import { pageGraph } from "../../../lib/seo/schema";

/**
 * One light template for every content page built from the SEO data shape
 * (services, industries, glossary): hero, intro, section rows, "what we cover",
 * related links, FAQ and a closing call to action. Emits BreadcrumbList,
 * WebPage, Service (for services) and FAQPage structured data.
 *
 * page:    { title, seoTitle, metaDescription, path, category, h1, intro, sections[{title,content}], h2s[], faqs[] }
 * crumbs:  [{ name, href }]  (last item is the current page)
 * related: [{ label, href }]
 */
export default function ContentPage({ page, crumbs, label, related = [], lead, ctaTitle, ctaLead }) {
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: {
      title: page.seoTitle || page.title,
      description: page.metaDescription || page.description,
      path: page.path,
    },
    service:
      page.category === "service"
        ? { name: page.title, description: page.metaDescription, path: page.path }
        : null,
    faqs: page.faqs,
  });

  const sections = page.sections ?? [];
  const topics = page.h2s ?? [];

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero crumbs={crumbs} label={label} title={page.h1 || page.title} lead={lead ?? page.intro}>
          <Link href="/contact" className="sd-btn sd-btn-primary">
            Talk to our experts
          </Link>
        </PageHero>

        {sections.length > 0 && (
          <section className="bg-white sd-section">
            <div className="sd-container">
              {sections.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={(i % 2) * 60}
                  className="grid gap-4 border-t border-[#dfe8ec] py-9 first:border-t-0 first:pt-0 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14"
                >
                  <h2 className="sd-h3">{s.title}</h2>
                  <p className="text-[18px] leading-relaxed text-[#333]">{s.content}</p>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {topics.length > 0 && (
          <section className="sd-surface sd-section-tight">
            <div className="sd-container">
              <Reveal>
                <p className="sd-label">What we cover</p>
                <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                  {topics.map((t) => (
                    <li key={t} className="flex items-start gap-3 border-b border-[#dfe8ec] py-3 text-[18px] text-[#111]">
                      <span className="mt-[11px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#00a3b0]" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="bg-white sd-section-tight">
            <div className="sd-container">
              <Reveal>
                <p className="sd-label">Related</p>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {related.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="inline-block rounded-full border border-[#d5dbe0] bg-white px-5 py-2 text-[16px] text-[#333] transition-colors hover:border-[#0a5fbe] hover:text-[#0a5fbe]"
                      >
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        )}

        {page.faqs?.length > 0 && <FaqList faqs={page.faqs} />}
        <HomeCta title={ctaTitle} lead={ctaLead} />
      </main>
    </>
  );
}
