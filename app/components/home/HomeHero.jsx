import Link from "next/link";
import Reveal from "../shell/Reveal";
import { CTA } from "../../../lib/nav";

/** Zoho-style hero: centred light-weight headline, short accent dash, two-line lead, one solid button. */
export default function HomeHero() {
  return (
    <div className="mx-auto max-w-[1100px] px-6 pb-12 pt-12 text-center lg:pb-14 lg:pt-16">
      <Reveal>
        <h1 className="sd-h1">
          Products that grow your business,
          <br className="hidden sm:block" /> powered by AI and automation
        </h1>
        <span className="sd-dash" aria-hidden="true" />
      </Reveal>
      <Reveal delay={100}>
        <p className="sd-lead mx-auto mt-8 max-w-[880px]">
          ScaleDesk builds the platforms and AI agents that help businesses of every size capture leads, talk to
          customers and <span className="sd-dotted">sell more</span>, with expert services whenever you need more.
        </p>
      </Reveal>
      <Reveal delay={200} className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
        <Link href="/products" className="sd-btn sd-btn-primary">
          Explore our platforms
        </Link>
        <Link href={CTA.primary.href} className="sd-link">
          Talk to our experts
        </Link>
      </Reveal>
    </div>
  );
}
