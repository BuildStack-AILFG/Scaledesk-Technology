"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import Mark from "../shell/Marks";

/**
 * Interactive agent roster: big numbered agent names on the left; hovering,
 * focusing or clicking one shows that agent's promise and what it handles on
 * the right, tinted in the agent's colour. Below lg the panel is hidden and
 * each row carries its own one-liner instead.
 *
 * agents: [{ slug, name, accent, mark, tagline, href, points[] }]
 */
export default function AgentRoster({ agents }) {
  const [active, setActive] = useState(0);
  const a = agents[active];

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      <div role="tablist" aria-label="ForGrow AI agents" aria-orientation="vertical" className="border-t border-white/10">
        {agents.map((ag, i) => {
          const on = i === active;
          return (
            <button
              key={ag.slug}
              type="button"
              role="tab"
              id={`agent-tab-${ag.slug}`}
              aria-selected={on}
              aria-controls="agent-panel"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className="group grid w-full grid-cols-[40px_1fr_auto] items-center gap-x-4 border-b border-white/10 py-4 text-left outline-none focus-visible:bg-white/[0.04] lg:py-5"
            >
              <span className={`text-[13px] font-medium tabular-nums transition-colors ${on ? "text-white" : "text-white/35"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span
                  className={`block font-display text-[clamp(22px,2.3vw,32px)] font-medium leading-[1.15] tracking-[-0.02em] transition-colors duration-300 ${
                    on ? "text-white" : "text-white/45 group-hover:text-white/75"
                  }`}
                >
                  {ag.name}
                </span>
                {/* Mobile: the one-liner sits under the name */}
                <span className="mt-1.5 block text-[15px] text-white/60 lg:hidden">{ag.tagline}</span>
              </span>
              <span
                aria-hidden="true"
                className="h-3 w-3 rounded-full transition-all duration-300"
                style={{ background: ag.accent, opacity: on ? 1 : 0, transform: on ? "scale(1)" : "scale(0.4)" }}
              />
            </button>
          );
        })}
      </div>

      {/* Detail panel (desktop) */}
      <div
        id="agent-panel"
        role="tabpanel"
        aria-labelledby={`agent-tab-${a.slug}`}
        className="relative hidden overflow-hidden rounded-[28px] border border-white/10 p-10 lg:flex lg:flex-col lg:self-stretch"
        style={{ background: `radial-gradient(120% 90% at 100% 0%, ${a.accent}55 0%, transparent 60%), rgba(255,255,255,0.03)` }}
      >
        <div key={a.slug} className="sd-enter flex flex-1 flex-col">
          <span
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            aria-hidden="true"
          >
            <Mark name={a.mark} size={38} color={a.accent} />
          </span>
          <p className="mt-8 font-display text-[clamp(20px,1.8vw,26px)] font-medium leading-[1.3] tracking-[-0.01em] text-white">{a.tagline}</p>
          <p className="mt-8 text-[12px] font-medium uppercase tracking-[0.14em] text-white/50">What it handles</p>
          <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {a.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2.5 text-[15px] leading-snug text-white/85">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ background: a.accent }}
                  aria-hidden="true"
                >
                  <Check size={12} strokeWidth={3} />
                </span>
                {pt}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <Link href={a.href} className="sd-btn sd-btn-light">
              Explore the {a.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
