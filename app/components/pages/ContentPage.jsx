import Link from "next/link";
import { Check } from "lucide-react";
import JsonLd from "../seo/JsonLd";
import Reveal from "../shell/Reveal";
import PageHero from "./PageHero";
import FramedPhoto from "./FramedPhoto";
import FaqList from "../catalog/FaqList";
import HomeCta from "../home/HomeCta";
import { Arrow, accent } from "../ui/CardParts";
import { IMG } from "../../../lib/images";
import { pageGraph } from "../../../lib/seo/schema";

/**
 * One template for every content page built from the SEO data shape
 * (services, industries): split hero with a visual, numbered bento of
 * section cards, a navy "what we cover" panel, related pages, FAQ and a
 * closing call to action. Emits BreadcrumbList, WebPage, Service (for
 * services) and FAQPage structured data.
 *
 * page:    { title, seoTitle, metaDescription, path, category, h1, intro, sections[{title,content}], h2s[], faqs[] }
 * crumbs:  [{ name, href }]  (last item is the current page)
 * related: [{ label, href }]
 */
const SECTION_ACCENTS = ["#0A5FBE", "#00A3B0", "#7C4DFF", "#E58A00", "#1F9D55", "#C13584"];

/** Hero visual: the industry photo when there is one, otherwise an "at a glance" card. */
function HeroAside({ page, topics }) {
  const slug = page.path?.split("/").pop();
  const photo = page.path?.startsWith("/industries/") && IMG[`ind-${slug}`] ? `ind-${slug}` : null;
  if (photo) return <FramedPhoto name={photo} position="center 35%" glow="#00A3B0" />;
  if (topics.length === 0) return null;

  return (
    <div className="sd-fcard sd-fcard-dark p-7 sm:p-9">
      <span className="sd-fcard-grid" aria-hidden="true" />
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7fe3ea]">At a glance</p>
      <p className="mt-3 font-display text-[22px] font-bold leading-snug tracking-tight text-white">What we deliver</p>
      <ul className="mt-6 space-y-3.5">
        {topics.slice(0, 5).map((t) => (
          <li key={t} className="flex items-start gap-3 text-[15.5px] leading-snug text-white/85">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7fe3ea]/15 text-[#7fe3ea]" aria-hidden="true">
              <Check size={12} strokeWidth={3} />
            </span>
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 text-[14px] text-white/70">
        <span className="flex h-2 w-2 rounded-full bg-[#5eead4]" aria-hidden="true" />
        Free consultation · reply within one business day
      </div>
    </div>
  );
}

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
  const aside = <HeroAside page={page} topics={topics} />;

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero crumbs={crumbs} label={label} title={page.h1 || page.title} lead={lead ?? page.intro} aside={aside}>
          <Link href="/contact" className="sd-btn sd-btn-primary">
            Talk to our experts
          </Link>
        </PageHero>

        {sections.length > 0 && (
          <section className="sd-surface sd-section">
            <div className="sd-container">
              <Reveal className="mb-12 max-w-[720px]">
                <p className="sd-label">How we help</p>
                <h2 className="sd-h2 mt-4">What working with us looks like</h2>
              </Reveal>
              <ol className="grid gap-5 md:grid-cols-2">
                {sections.map((s, i) => {
                  const color = SECTION_ACCENTS[i % SECTION_ACCENTS.length];
                  // First card spans the full width as the lead; an odd remainder widens the last one.
                  const wide = i === 0 || (i === sections.length - 1 && (sections.length - 1) % 2 === 1);
                  return (
                    <Reveal
                      as="li"
                      key={s.title}
                      delay={(i % 2) * 70}
                      className={`sd-fcard is-hoverable ${i === 0 ? "sd-fcard-tint" : ""} p-7 sm:p-9 ${wide ? "md:col-span-2" : ""}`}
                      style={accent(color)}
                    >
                      <div className={wide ? "md:grid md:grid-cols-[auto_0.8fr_1.2fr] md:items-start md:gap-10" : ""}>
                        <span className="sd-numeral block" aria-hidden="true">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className={`sd-h3 ${wide ? "mt-5 md:mt-1" : "mt-5"}`}>{s.title}</h3>
                        <p className={`text-[16px] leading-relaxed text-sd-body ${wide ? "mt-3 md:mt-1" : "mt-3"}`}>{s.content}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </section>
        )}

        {topics.length > 0 && (
          <section className="bg-white px-3 py-4 sm:px-5">
            <div className="sd-navy-band on-dark">
              <div className="sd-container grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
                <Reveal>
                  <p className="sd-label">What we cover</p>
                  <h2 className="sd-h2 mt-4">Everything in scope</h2>
                  <p className="sd-lead mt-5">One team, end to end, so nothing falls between the cracks.</p>
                </Reveal>
                <Reveal delay={100}>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {topics.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-[15.5px] font-medium leading-snug text-white backdrop-blur-sm"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7fe3ea] text-[#061f4a]" aria-hidden="true">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="bg-white sd-section-tight">
            <div className="sd-container">
              <Reveal>
                <p className="sd-label">Related</p>
                <h2 className="mt-4 font-display text-[clamp(22px,2vw,28px)] font-bold tracking-tight text-sd-ink">You might also need</h2>
              </Reveal>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r, i) => (
                  <Reveal as="li" key={r.href} delay={(i % 3) * 60}>
                    <Link
                      href={r.href}
                      className="sd-fcard group flex h-full items-center justify-between gap-4 p-5"
                      style={accent(SECTION_ACCENTS[(i + 1) % SECTION_ACCENTS.length])}
                    >
                      <span className="font-display text-[16.5px] font-semibold tracking-tight text-sd-ink">{r.label}</span>
                      <Arrow />
                    </Link>
                  </Reveal>
                ))}
              </ul>
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
