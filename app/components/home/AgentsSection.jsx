import Link from "next/link";
import Reveal from "../shell/Reveal";
import Mark from "../shell/Marks";
import { AGENT_SUITE } from "../../../lib/catalog/agents";
import { AGENTS_NAV } from "../../../lib/nav";

/** ForGrow AI: the agent line-up as a card grid on a soft surface. */
export default function AgentsSection() {
  return (
    <section className="sd-surface sd-section">
      <div className="sd-container">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[640px]">
            <p className="sd-label">{AGENT_SUITE.name}</p>
            <h2 className="sd-h2 mt-4">AI agents that work alongside your team</h2>
            <p className="sd-lead mt-5">{AGENT_SUITE.blurb}</p>
          </div>
          <Link href="/agents" className="sd-btn sd-btn-outline shrink-0">
            Explore all agents
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AGENTS_NAV.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 80}>
              <Link href={a.href} className="sd-card-link group flex h-full flex-col p-7">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: `${a.accent}14` }}
                >
                  <Mark name={a.mark} size={34} color={a.accent} />
                </span>
                <h3 className="sd-h3 mt-6 transition-colors group-hover:text-sd-blue">{a.displayName}</h3>
                <p className="mt-2 flex-1 text-[15.5px] leading-relaxed text-sd-muted">{a.descriptor}</p>
                <span className="sd-link mt-6 !text-[15px]">Learn more</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
