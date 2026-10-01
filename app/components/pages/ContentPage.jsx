import Link from "next/link";
import { Check } from "lucide-react";
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
              <ol className="flex flex-col">
                {sections.map((s, i) => (
                  <Reveal
                    as="li"
                    key={s.title}
                    delay={(i % 2) * 60}
                    className="grid gap-4 border-t border-sd-line py-10 first:border-t-0 first:pt-0 last:pb-0 lg:grid-cols-[64px_0.75fr_1.25fr] lg:gap-10"
                  >
                    <span className="font-display text-[15px] font-bold text-sd-teal-dark" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="sd-h3">{s.title}</h2>
                    <p className="text-[17px] leading-relaxed text-sd-body">{s.content}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>
        )}

        {topics.length > 0 && (
          <section className="sd-surface sd-section-tight">
            <div className="sd-container">
              <Reveal>
                <p className="sd-label">What we cover</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {topics.map((t) => (
                    <li key={t} className="flex items-start gap-3 rounded-xl border border-sd-line bg-white px-4 py-3.5 text-[15.5px] font-medium text-sd-ink">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sd-tint text-sd-teal-dark" aria-hidden="true">
                        <Check size={12} strokeWidth={3} />
                      </span>
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
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {related.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="inline-flex items-center gap-2 rounded-full border border-sd-line bg-white px-4 py-2 text-[15px] font-medium text-sd-body transition-colors hover:border-sd-navy hover:text-sd-navy"
                      >
                        {r.label}
                        <span aria-hidden="true" className="text-sd-faint">
                          &rarr;
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        )}

        {page.faqs?.length > 0 && (
          <>
            <div className="sd-container">
              <div className="border-t border-sd-line" />
            </div>
            <FaqList faqs={page.faqs} />
          </>
        )}
        <HomeCta title={ctaTitle} lead={ctaLead} />
      </main>
    </>
  );
}
