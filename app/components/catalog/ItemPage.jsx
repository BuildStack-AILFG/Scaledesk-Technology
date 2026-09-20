import Image from "next/image";
import Link from "next/link";
import JsonLd from "../seo/JsonLd";
import Reveal from "../shell/Reveal";
import SmartLink from "../shell/SmartLink";
import Mark from "../shell/Marks";
import HomeCta from "../home/HomeCta";
import SubNav from "./SubNav";
import FeatureTabs from "./FeatureTabs";
import FaqList from "./FaqList";
import { fill } from "../../../lib/images";
import { pageGraph } from "../../../lib/seo/schema";
import { AGENT_GUARDRAILS } from "../../../lib/catalog/agents";

/**
 * One template for every platform and AI-agent page, modelled on how Zoho
 * builds a product page: centred hero + one clear photo, sticky sub-nav,
 * tabbed features, capability grid, steps, FAQ, closing call to action.
 *
 * `item` comes from lib/catalog (platforms.js or agents.js).
 */
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

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <section className="sd-wave">
          <div className="sd-container pt-6 text-[14px] text-[#666]">
            <Link href="/" className="hover:text-[#0a5fbe]">Home</Link>
            <span className="mx-2">/</span>
            <Link href={parent.href} className="hover:text-[#0a5fbe]">{parent.label}</Link>
            <span className="mx-2">/</span>
            <span className="text-[#111]">{item.name}</span>
          </div>

          <div className="mx-auto max-w-[1000px] px-6 pb-10 pt-8 text-center lg:pt-10">
            <Reveal>
              <div className="flex items-center justify-center gap-3">
                <Mark name={item.mark} size={40} color={item.accent} />
                <p className="sd-label">{kindLabel}</p>
              </div>
              <h1 className="sd-h1 mt-5">{item.heroTitle}</h1>
              <span className="sd-dash" aria-hidden="true" />
            </Reveal>
            <Reveal delay={100}>
              <p className="sd-lead mx-auto mt-8 max-w-[780px]">{item.heroLead}</p>
            </Reveal>
            <Reveal delay={200} className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
              <Link href="/contact" className="sd-btn sd-btn-primary">
                Talk to our experts
              </Link>
              {item.appUrl && (
                <SmartLink href={item.appUrl} external className="sd-link">
                  Open {item.name}
                </SmartLink>
              )}
            </Reveal>
          </div>

          <div className="sd-container pb-12 lg:pb-16">
            <Reveal delay={150}>
              <div className="relative aspect-[16/8] overflow-hidden rounded-3xl shadow-[0_18px_40px_-24px_rgba(6,33,79,0.35)]">
                <Image {...fill(item.photo, "center 32%")} preload sizes="(min-width: 1300px) 1252px, 94vw" />
              </div>
            </Reveal>
          </div>
        </section>

        <SubNav items={subnav} ctaLabel="Talk to our experts" ctaHref="/contact" />

        <section id="features" className="bg-white sd-section scroll-mt-32">
          <div className="sd-container">
            <Reveal className="mb-10 max-w-[720px]">
              <p className="sd-label">What it does</p>
              <h2 className="sd-h2 mt-4">Built to help you sell more</h2>
            </Reveal>
            <Reveal delay={80}>
              <FeatureTabs features={item.features} accent={item.accent} />
            </Reveal>
          </div>
        </section>

        <section id="capabilities" className="sd-surface sd-section scroll-mt-32">
          <div className="sd-container">
            <Reveal className="mx-auto max-w-[760px] text-center">
              <h2 className="sd-h2">Everything you need, in one place</h2>
              <span className="sd-dash" aria-hidden="true" />
            </Reveal>
            <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {item.capabilities.map((c, i) => (
                <Reveal key={c.name} delay={(i % 3) * 80} className="border-t-2 pt-5" style={{ borderColor: item.accent }}>
                  <h3 className="text-[22px] font-normal text-[#111]">{c.name}</h3>
                  <p className="mt-2 text-[16px] leading-snug text-[#555]">{c.blurb}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="bg-white sd-section scroll-mt-32">
          <div className="sd-container">
            <Reveal className="mx-auto max-w-[760px] text-center">
              <h2 className="sd-h2">How it works</h2>
              <span className="sd-dash" aria-hidden="true" />
            </Reveal>
            <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {item.steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 80}>
                  <p className="text-[44px] font-light leading-none" style={{ color: item.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="sd-h3 mt-4">{s.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#333]">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {isAgent && (
          <section id="control" className="sd-navy-band sd-section scroll-mt-32">
            <div className="sd-container">
              <Reveal className="max-w-[720px]">
                <p className="sd-label !text-[#7fd6de]">You stay in control</p>
                <h2 className="sd-h2 mt-4 !text-white">Agents that work within your rules</h2>
              </Reveal>
              <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                {AGENT_GUARDRAILS.map((g, i) => (
                  <Reveal key={g.title} delay={i * 80} className="border-t border-white/25 pt-5">
                    <h3 className="text-[20px] font-normal !text-white">{g.title}</h3>
                    <p className="mt-2 text-[15.5px] leading-snug text-white/80">{g.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="sd-surface sd-section-tight">
          <div className="sd-container grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <Reveal>
              <p className="sd-label">Works well with</p>
              <ul className="mt-5 grid gap-x-8 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.href} className="border-b border-[#e6e8ee]">
                    <Link href={r.href} className="group flex items-center gap-4 py-4">
                      <Mark name={r.mark} size={34} color={r.accent} />
                      <span className="text-[19px] text-[#111] transition-colors group-hover:text-[#0a5fbe]">{r.displayName}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            {industries.length > 0 && (
              <Reveal delay={100}>
                <p className="sd-label">Popular in</p>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {industries.map((ind) => (
                    <li key={ind.href}>
                      <Link
                        href={ind.href}
                        className="inline-block rounded-full border border-[#d5dbe0] bg-white px-5 py-2 text-[16px] text-[#333] transition-colors hover:border-[#0a5fbe] hover:text-[#0a5fbe]"
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

        <FaqList faqs={item.faqs} />
        <HomeCta title={`Ready to try ${item.name}?`} lead="Tell us about your business and we will show you how it can help." />
      </main>
    </>
  );
}
