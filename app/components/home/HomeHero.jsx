import Link from "next/link";
import HeroVisual from "./HeroVisual";
import { CTA } from "../../../lib/nav";
import { AGENT_SUITE } from "../../../lib/catalog/agents";
import { CHANNELS } from "../../../lib/proof";

/** Two-column hero: message and actions on the left, product composition on the right. */
export default function HomeHero() {
  return (
    <div className="sd-container grid items-center gap-12 pb-16 pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-20">
      <div className="text-center lg:text-left">
        <div className="sd-enter">
          <Link href="/agents" className="sd-pill">
            <span className="sd-pill-tag">New</span>
            Meet {AGENT_SUITE.name}, AI agents for your team
            <span aria-hidden="true" className="text-sd-faint">
              &rarr;
            </span>
          </Link>
        </div>
        <div className="sd-enter" style={{ "--d": "80ms" }}>
          <h1 className="sd-h1 mt-7">
            Products that grow your business, <span className="sd-gradient-text">powered by AI</span>
          </h1>
        </div>
        <div className="sd-enter" style={{ "--d": "160ms" }}>
          <p className="sd-lead mx-auto mt-6 max-w-[560px] lg:mx-0">
            ScaleDesk builds the platforms and AI agents that help businesses capture leads, talk to customers and sell
            more, with expert engineers whenever you need more.
          </p>
        </div>
        <div className="sd-enter mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start" style={{ "--d": "240ms" }}>
          <Link href="/products" className="sd-btn sd-btn-primary">
            Explore our platforms
          </Link>
          <Link href={CTA.primary.href} className="sd-btn sd-btn-outline sd-btn-plain">
            {CTA.primary.label}
          </Link>
        </div>
        <div className="sd-enter mt-9 flex flex-wrap items-center justify-center gap-2 lg:justify-start" style={{ "--d": "320ms" }}>
          <span className="mr-1 text-[14px] text-sd-muted">Works across</span>
          {CHANNELS.map((c) => (
            <span key={c} className="sd-chip">
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="sd-enter" style={{ "--d": "200ms" }}>
        <HeroVisual />
      </div>
    </div>
  );
}
