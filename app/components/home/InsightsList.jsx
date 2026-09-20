import Link from "next/link";
import Reveal from "../shell/Reveal";
import { INSIGHTS } from "../../data/insights";

/** Featured insights as a clean text list (no photos): title, topic, reading time. */
export default function InsightsList() {
  const ai = INSIGHTS.filter((i) => /AI|Automation/i.test(i.category));
  const items = [...ai, ...INSIGHTS.filter((i) => !ai.includes(i))].slice(0, 3);

  return (
    <section className="bg-white sd-section">
      <div className="sd-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="sd-label">Insights</p>
          <h2 className="sd-h2 mt-4">Ideas for growing smarter</h2>
          <p className="sd-lead mt-5">
            Practical thinking on AI, automation and building technology that helps you sell more.
          </p>
          <div className="mt-7">
            <Link href="/insights" className="sd-link">
              Read all insights
            </Link>
          </div>
        </Reveal>
        <ul className="border-t border-[#e6e8ee]">
          {items.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 70} className="border-b border-[#e6e8ee]">
              <Link href={`/insights/${a.slug}`} className="group flex items-start justify-between gap-6 py-6">
                <span>
                  <span className="block text-[13px] font-medium uppercase tracking-[0.06em] text-[#007f8b]">
                    {a.category}
                  </span>
                  <span className="mt-2 block text-[clamp(19px,1.7vw,23px)] leading-snug text-[#111] transition-colors group-hover:text-[#0a5fbe]">
                    {a.title}
                  </span>
                  <span className="mt-2 block text-[14px] text-[#666]">{a.readTime}</span>
                </span>
                <span className="mt-6 text-[24px] text-[#a3aab5] transition-transform group-hover:translate-x-1 group-hover:text-[#0a5fbe]">
                  &rsaquo;
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
