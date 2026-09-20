import Link from "next/link";
import Reveal from "../shell/Reveal";

/**
 * Hub grid (services, industries, glossary): optional group headings, each
 * with clean link tiles: name, one-line description, chevron.
 * groups: [{ title?, items: [{ name, blurb, href }] }]
 */
export default function HubList({ groups }) {
  return (
    <section className="bg-white sd-section">
      <div className="sd-container space-y-14">
        {groups.map((g, gi) => (
          <div key={g.title ?? gi}>
            {g.title && (
              <Reveal>
                <h2 className="sd-h3 mb-6 border-b border-[#dfe8ec] pb-4">{g.title}</h2>
              </Reveal>
            )}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((it, i) => (
                <Reveal key={it.href} delay={(i % 3) * 70}>
                  <Link
                    href={it.href}
                    className="group flex h-full flex-col rounded-3xl border border-[#dfe8ec] bg-white p-6 transition-shadow hover:shadow-[0_14px_34px_-18px_rgba(6,33,79,0.35)]"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="text-[22px] font-normal leading-snug text-[#111] transition-colors group-hover:text-[#0a5fbe]">
                        {it.name}
                      </span>
                      <span className="text-[24px] leading-none text-[#a3aab5] transition-transform group-hover:translate-x-1 group-hover:text-[#0a5fbe]">
                        &rsaquo;
                      </span>
                    </span>
                    {it.blurb && <span className="mt-3 block text-[16px] leading-snug text-[#555]">{it.blurb}</span>}
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
