import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProductLogo from "../shell/ProductLogo";
import { CTA, PLATFORMS_NAV } from "../../../lib/nav";
import { AGENT_SUITE } from "../../../lib/catalog/agents";

/**
 * Homepage hero, drawn from the ScaleDesk logo (rising bars + arrow): the
 * products form a growth chart. Five bars rise left to right, one per product,
 * each in that product's own brand colour and carrying its logo, with a dashed
 * trend line and arrow over their tops.
 * Bars grow in with CSS only (`.sd-bar-grow`), so nothing waits on hydration.
 */
const FORGROW_AI = {
  name: AGENT_SUITE.name,
  kind: "AI agents",
  tagline: "Agents for calls, follow-ups, invoices and support.",
  href: "/agents",
  mark: "automate",
  accent: "#00A3B0",
};
// Left to right, shortest to tallest. `axis` is the label under each bar.
const bySlug = (slug) => PLATFORMS_NAV.find((p) => p.slug === slug);
const BARS = [
  { ...FORGROW_AI, axis: "Automation" },
  { ...bySlug("peopleforgrow"), axis: "People" },
  { ...bySlug("talkforgrow"), axis: "Conversations" },
  { ...bySlug("gramforgrow"), axis: "Instagram" },
  { ...bySlug("leadforgrow-crm"), axis: "Leads" },
].filter((b) => b.href);
const HEIGHTS = [50, 61, 72, 85, 98]; // % of the chart height

/** Brand colour at the top, a deeper shade of it at the baseline. */
const fill = (c) => `linear-gradient(180deg, color-mix(in srgb, ${c} 94%, #fff) 0%, color-mix(in srgb, ${c} 72%, #000) 100%)`;

export default function HomeHero() {
  return (
    <div className="sd-container flex flex-col pb-10 pt-8 lg:min-h-[calc(100svh-68px)] lg:justify-center lg:pb-10 lg:pt-8">
      {/* Message */}
      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16">
        <h1 className="sd-enter font-display text-[clamp(38px,min(5.4vw,9.5svh),84px)] font-extrabold leading-[0.98] tracking-[-0.05em] text-sd-ink">
          Built to help your business <span className="text-sd-teal">scale.</span>
        </h1>
        <div className="sd-enter lg:pb-2" style={{ "--d": "120ms" }}>
          <p className="max-w-[460px] text-[16.5px] leading-relaxed text-sd-body">
            ScaleDesk makes the software growing businesses run on: leads, conversations, social, people and AI agents,
            with engineers on hand when you need something custom.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href={CTA.primary.href} className="sd-btn sd-btn-primary">
              {CTA.primary.label}
            </Link>
            <Link href="/products" className="sd-link">
              All products
            </Link>
          </div>
        </div>
      </div>

      {/* Growth chart of products */}
      <nav aria-label="Our products" className="relative mt-12 lg:mt-[clamp(32px,7svh,72px)]">
        <div className="relative grid h-[clamp(240px,36svh,420px)] grid-cols-5 items-end gap-2 border-b-[3px] border-sd-ink sm:gap-3 lg:gap-4">
          {/* Dashed trend line + arrow over the bar tops */}
          <svg
            aria-hidden="true"
            className="sd-trend pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polyline
              points={HEIGHTS.map((h, i) => `${10 + i * 20},${100 - h - 7}`).join(" ")}
              fill="none"
              stroke="#00a3b0"
              strokeWidth="2.5"
              strokeDasharray="7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <span
            aria-hidden="true"
            className="sd-trend absolute left-[90%] top-[-3%] z-10 flex -translate-x-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-sd-teal text-white shadow-[0_10px_24px_-8px_rgba(0,163,176,0.7)] sm:h-12 sm:w-12"
          >
            <ArrowUpRight size={22} strokeWidth={2.6} />
          </span>

          {BARS.map((b, i) => (
            <Link
              key={b.href}
              href={b.href}
              className="sd-bar-grow group relative flex h-full flex-col rounded-t-[14px] p-2.5 text-white outline-none transition-[filter,translate] duration-300 hover:z-20 hover:-translate-y-1.5 hover:brightness-110 focus-visible:z-20 focus-visible:ring-2 focus-visible:ring-sd-ink focus-visible:ring-offset-2 sm:rounded-t-[18px] sm:p-4 lg:p-5"
              style={{ height: `${HEIGHTS[i]}%`, background: fill(b.accent), "--d": `${120 + i * 90}ms` }}
            >
              <span className="flex min-h-0 flex-col items-start gap-2.5">
                {/* Logo on a white tile so every brand colour reads cleanly */}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white shadow-[0_4px_12px_-4px_rgba(0,0,0,0.35)] sm:h-10 sm:w-10 lg:h-11 lg:w-11">
                  <ProductLogo product={b} size={26} />
                </span>
                <span className="min-w-0 max-w-full">
                  <span className="block font-display text-[13px] font-bold leading-none tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] [writing-mode:vertical-rl] sm:text-[15px] lg:truncate lg:text-[clamp(15px,1.4vw,19px)] lg:[writing-mode:horizontal-tb]">
                    {b.name}
                  </span>
                  <span className="mt-1.5 hidden text-[11.5px] font-semibold uppercase tracking-[0.1em] text-white/75 lg:block">{b.kind}</span>
                </span>
              </span>
              {/* Description tooltip above the bar (short bars have no room inside) */}
              <span
                role="tooltip"
                className={`pointer-events-none absolute bottom-[calc(100%+14px)] z-20 hidden w-[240px] translate-y-1 rounded-xl bg-white px-4 py-3 text-left text-[14px] font-medium leading-snug text-sd-ink opacity-0 shadow-[0_14px_34px_-12px_rgba(11,27,51,0.35)] ring-1 ring-sd-line transition-[opacity,translate] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 lg:block ${
                  i === 0 ? "left-0" : i === BARS.length - 1 ? "right-0" : "left-1/2 -translate-x-1/2"
                }`}
              >
                <span className="mb-1 block text-[11.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: b.accent }}>
                  {b.name}
                </span>
                {b.tagline}
                <span
                  aria-hidden="true"
                  className={`absolute top-full h-0 w-0 border-8 border-transparent border-t-white ${
                    i === 0 ? "left-8" : i === BARS.length - 1 ? "right-8" : "left-1/2 -translate-x-1/2"
                  }`}
                />
              </span>
            </Link>
          ))}
        </div>

        {/* Axis labels */}
        <ol className="mt-3 grid grid-cols-5 gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-sd-muted sm:gap-3 sm:text-[13px] lg:gap-4">
          {BARS.map((b) => b.axis).map((l, i) => (
            <li key={l} className="truncate">
              <span className="tabular-nums text-sd-faint">0{i + 1}</span> <span className="hidden sm:inline">{l}</span>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
