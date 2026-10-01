import Link from "next/link";
import Reveal from "../shell/Reveal";
import AgentRoster from "./AgentRoster";
import { AGENTS, AGENT_SUITE } from "../../../lib/catalog/agents";

/**
 * ForGrow AI on a full-width navy band: an interactive roster of the agents
 * (see AgentRoster). Only the fields the roster needs are sent to the client.
 */
export default function AgentsSection() {
  const agents = AGENTS.map((a) => ({
    slug: a.slug,
    name: a.name,
    accent: a.accent,
    mark: a.mark,
    tagline: a.tagline,
    href: `/agents/${a.slug}`,
    // Up to six concrete jobs, taken from the agent's feature list.
    points: a.features.flatMap((f) => f.points).slice(0, 6),
  }));

  return (
    <section className="relative isolate overflow-hidden bg-[#061a3d] py-20 text-white lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_0%_0%,rgba(10,95,190,0.35),transparent_70%),radial-gradient(50%_50%_at_100%_100%,rgba(0,163,176,0.18),transparent_70%)]"
      />
      <div className="sd-container">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-[640px]">
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#7fe3ea]">{AGENT_SUITE.name}</p>
            <h2 className="mt-4 font-display text-[clamp(30px,3.4vw,46px)] font-semibold leading-[1.1] tracking-[-0.03em]" style={{ color: "#fff" }}>
              {AGENTS.length} AI agents. One extra team.
            </h2>
          </div>
          <div className="max-w-[420px]">
            <p className="text-[16.5px] leading-relaxed text-white/65">
              Each agent takes one job off your plate, works inside your rules, and hands over to a person when it matters.
            </p>
            <Link href="/agents" className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-white hover:underline">
              See all agents <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Reveal>

        <AgentRoster agents={agents} />
      </div>
    </section>
  );
}
