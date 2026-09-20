import Link from "next/link";
import Reveal from "../shell/Reveal";
import Mark from "../shell/Marks";
import { AGENT_SUITE } from "../../../lib/catalog/agents";
import { AGENTS_NAV } from "../../../lib/nav";

/** ForGrow AI: the agent line-up as a clean tile grid on a soft teal band, no photos. */
export default function AgentsSection() {
  return (
    <section className="sd-surface sd-section">
      <div className="sd-container">
        <Reveal className="mx-auto max-w-[780px] text-center">
          <p className="sd-label">{AGENT_SUITE.name}</p>
          <h2 className="sd-h2 mt-4">AI agents that work alongside your team</h2>
          <span className="sd-dash" aria-hidden="true" />
          <p className="sd-lead mt-7">{AGENT_SUITE.blurb}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AGENTS_NAV.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 80}>
              <Link
                href={a.href}
                className="group flex h-full flex-col rounded-3xl border border-[#dfe8ec] bg-white p-7 transition-shadow hover:shadow-[0_14px_34px_-18px_rgba(6,33,79,0.35)]"
              >
                <Mark name={a.mark} size={44} color={a.accent} />
                <h3 className="mt-5 text-[24px] font-normal text-[#111] transition-colors group-hover:text-[#0a5fbe]">
                  {a.displayName}
                </h3>
                <p className="mt-2 flex-1 text-[16px] leading-snug text-[#555]">{a.descriptor}</p>
                <span className="sd-link mt-6">Learn more</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/agents" className="sd-link">
            Explore all AI agents
          </Link>
        </div>
      </div>
    </section>
  );
}
