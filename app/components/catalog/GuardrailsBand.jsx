import { ShieldCheck } from "lucide-react";
import Reveal from "../shell/Reveal";
import { AGENT_GUARDRAILS } from "../../../lib/catalog/agents";

/** "You stay in control": AI-agent guardrails on a navy band (agents hub + every agent page). */
export default function GuardrailsBand({ id }) {
  return (
    <section id={id} className="scroll-mt-32 bg-white px-3 py-4 sm:px-5">
      <div className="sd-navy-band on-dark">
        <div className="sd-container py-16 lg:py-24">
          <Reveal className="max-w-[720px]">
            <p className="sd-label">You stay in control</p>
            <h2 className="sd-h2 mt-4">Agents that work within your rules</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AGENT_GUARDRAILS.map((g, i) => (
              <Reveal
                key={g.title}
                delay={i * 80}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#7fe3ea]">
                  <ShieldCheck size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-[18px] font-semibold tracking-tight">{g.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed">{g.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
