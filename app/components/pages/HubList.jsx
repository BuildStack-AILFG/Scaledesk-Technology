import Link from "next/link";
import Reveal from "../shell/Reveal";

/**
 * Hub grid (services, industries, glossary): optional group headings, each
 * with link cards: name, one-line description, arrow.
 * groups: [{ title?, items: [{ name, blurb, href }] }]
 */
export default function HubList({ groups }) {
  return (
    <section className="sd-surface sd-section">
      <div className="sd-container space-y-16">
        {groups.map((g, gi) => (
          <div key={g.title ?? gi}>
            {g.title && (
              <Reveal className="mb-7 flex items-baseline justify-between gap-4 border-b border-sd-line pb-4">
                <h2 className="font-display text-[clamp(22px,2vw,28px)] font-bold tracking-tight text-sd-ink">{g.title}</h2>
                <span className="shrink-0 text-[14px] font-medium text-sd-muted">
                  {g.items.length} {g.items.length === 1 ? "item" : "items"}
                </span>
              </Reveal>
            )}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((it, i) => (
                <Reveal key={it.href} delay={(i % 3) * 70}>
                  <Link href={it.href} className="sd-card-link group flex h-full flex-col p-7">
                    <span className="font-display text-[19px] font-semibold leading-snug tracking-tight text-sd-ink transition-colors group-hover:text-sd-blue">
                      {it.name}
                    </span>
                    {it.blurb && <span className="mt-3 block flex-1 text-[15px] leading-relaxed text-sd-muted">{it.blurb}</span>}
                    <span className="sd-link mt-6 !text-[15px]">Learn more</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
