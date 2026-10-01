import Link from "next/link";
import { ArrowUpRight, BarChart3, Bell, Check, Layers, Lock, Plug, Sparkles, Users, Zap } from "lucide-react";
import JsonLd from "../seo/JsonLd";
import Reveal from "../shell/Reveal";
import SmartLink from "../shell/SmartLink";
import ProductLogo from "../shell/ProductLogo";
import HomeCta from "../home/HomeCta";
import Breadcrumbs from "../pages/Breadcrumbs";
import FramedPhoto from "../pages/FramedPhoto";
import SubNav from "./SubNav";
import FeatureTabs from "./FeatureTabs";
import FaqList from "./FaqList";
import GuardrailsBand from "./GuardrailsBand";
import { Arrow, IconTile, accent } from "../ui/CardParts";
import { pageGraph } from "../../../lib/seo/schema";

/**
 * One template for every platform and AI-agent page: split hero with one
 * framed photo, sticky sub-nav, tabbed features, capability cards, steps,
 * guardrails (agents), related products, FAQ, closing call to action.
 *
 * `item` comes from lib/catalog (platforms.js or agents.js).
 */
/** Rotating icons for capability cards (the data has names, not icons). */
const CAP_ICONS = [Zap, Layers, BarChart3, Users, Plug, Bell, Lock, Sparkles, Check];

export default function ItemPage({ item, type, parent, kindLabel, related, industries, seo }) {
  const isAgent = type === "agent";
  const subnav = [
    { id: "features", label: "What it does" },
    { id: "capabilities", label: "Capabilities" },
    { id: "how", label: "How it works" },
    ...(isAgent ? [{ id: "control", label: "You stay in control" }] : []),
    { id: "faq", label: "FAQ" },
  ];

  const graph = pageGraph({
    page: { title: seo.title, description: seo.description, path: seo.path },
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: parent.label, path: parent.href },
      { name: item.name, path: seo.path },
    ],
    software: {
      name: `${item.name}${isAgent ? " (ForGrow AI)" : " " + item.kind}`,
      description: seo.description,
      path: seo.path,
    },
    faqs: item.faqs,
  });

  const crumbs = [
    { name: "Home", href: "/" },
    { name: parent.label, href: parent.href },
    { name: item.name, href: seo.path },
  ];

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <section className="sd-wave sd-hero-bleed">
          <Breadcrumbs crumbs={crumbs} className="sd-container pt-7" />
          <div className="sd-container grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pb-20 lg:pt-12">
            <div>
              <div className="sd-enter flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sd-line bg-white shadow-[0_4px_12px_-6px_rgba(11,27,51,0.2)]">
                  <ProductLogo product={item} size={30} />
                </span>
                <p className="sd-label">{kindLabel}</p>
              </div>
              <div className="sd-enter" style={{ "--d": "80ms" }}>
                <h1 className="sd-h1 mt-6">{item.heroTitle}</h1>
              </div>
              <div className="sd-enter" style={{ "--d": "160ms" }}>
                <p className="sd-lead mt-6 max-w-[600px]">{item.heroLead}</p>
              </div>
              <div className="sd-enter mt-9 flex flex-wrap items-center gap-3" style={{ "--d": "240ms" }}>
                <Link href="/contact" className="sd-btn sd-btn-primary">
                  Talk to our experts
                </Link>
                {item.appUrl && (
                  <SmartLink href={item.appUrl} external className="sd-btn sd-btn-outline sd-btn-plain">
                    Open {item.name}
                    <ArrowUpRight size={16} className="text-sd-faint" aria-hidden="true" />
                  </SmartLink>
                )}
              </div>
            </div>

            <div className="sd-enter" style={{ "--d": "200ms" }}>
              <FramedPhoto name={item.photo} position="center 32%" glow={item.accent} sizes="(min-width: 1024px) 48vw, 94vw" />
            </div>
          </div>
        </section>

        <SubNav items={subnav} ctaLabel="Talk to our experts" ctaHref="/contact" />

        <section id="features" className="sd-surface sd-section scroll-mt-32">
          <div className="sd-container">
            <Reveal className="mb-12 max-w-[720px]">
              <p className="sd-label">What it does</p>
              <h2 className="sd-h2 mt-4">Built to help you sell more</h2>
            </Reveal>
            <Reveal delay={80}>
              <FeatureTabs features={item.features} accent={item.accent} />
            </Reveal>
          </div>
        </section>

        <section id="capabilities" className="bg-white sd-section scroll-mt-32">
          <div className="sd-container">
            <Reveal className="mx-auto max-w-[720px] text-center">
              <p className="sd-label">Capabilities</p>
              <h2 className="sd-h2 mt-4">Everything you need, in one place</h2>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {item.capabilities.map((c, i) => (
                <Reveal
                  key={c.name}
                  delay={(i % 3) * 80}
                  className={`sd-fcard is-hoverable h-full p-7 ${i % 4 === 0 ? "sd-fcard-tint" : ""}`}
                  style={accent(item.accent)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <IconTile icon={CAP_ICONS[i % CAP_ICONS.length]} size={48} />
                    <span className="font-display text-[13px] font-bold tabular-nums text-sd-faint" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="sd-h3 mt-6">{c.name}</h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-sd-muted">{c.blurb}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="sd-surface sd-section scroll-mt-32">
          <div className="sd-container">
            <Reveal className="mx-auto max-w-[720px] text-center">
              <p className="sd-label">How it works</p>
              <h2 className="sd-h2 mt-4">Up and running, step by step</h2>
            </Reveal>
            <ol className="relative mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {item.steps.length === 4 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[28px] right-[calc(25%-28px)] top-[27px] hidden h-px bg-sd-line-strong lg:block"
                />
              )}
              {item.steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 80} className="relative">
                  <span
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-sd-line bg-white font-display text-[17px] font-bold shadow-[0_6px_16px_-8px_rgba(11,27,51,0.25)]"
                    style={{ color: item.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="sd-h3 mt-6">{s.title}</h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-sd-muted">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {isAgent && <GuardrailsBand id="control" />}

        <section className="bg-white sd-section-tight">
          <div className="sd-container grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <Reveal>
              <p className="sd-label">Works well with</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="sd-fcard group flex h-full items-center gap-4 p-4" style={accent(r.accent)}>
                      <IconTile logo={r.logo} mark={r.mark} color={r.accent} size={46} />
                      <span className="flex-1 font-display text-[16.5px] font-semibold tracking-tight text-sd-ink">{r.displayName}</span>
                      <Arrow />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            {industries.length > 0 && (
              <Reveal delay={100}>
                <p className="sd-label">Popular in</p>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {industries.map((ind) => (
                    <li key={ind.href}>
                      <Link
                        href={ind.href}
                        className="inline-flex rounded-full border border-sd-line bg-white px-4 py-2 text-[15px] font-medium text-sd-body transition-colors hover:border-sd-navy hover:text-sd-navy"
                      >
                        {ind.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
        </section>

        <div className="sd-container">
          <div className="border-t border-sd-line" />
        </div>
        <FaqList faqs={item.faqs} />
        <HomeCta title={`Ready to try ${item.name}?`} lead="Tell us about your business and we will show you how it can help." />
      </main>
    </>
  );
}
