import Link from "next/link";
import Reveal from "../shell/Reveal";
import { CTA } from "../../../lib/nav";

/** Closing call to action (Zoho's "Ready to do your best work?" band). */
export default function HomeCta({
  title = "Ready to uplift your business?",
  lead = "Tell us where you want to grow. Our experts will show you how our platforms, agents and engineers can get you there.",
}) {
  return (
    <section className="sd-wave">
      <div className="sd-container flex flex-col items-center py-16 text-center lg:py-20">
        <Reveal>
          <h2 className="sd-h2 max-w-[760px]">{title}</h2>
          <span className="sd-dash" aria-hidden="true" />
          <p className="sd-lead mx-auto mt-7 max-w-[640px]">{lead}</p>
        </Reveal>
        <Reveal delay={120} className="mt-9">
          <Link href={CTA.primary.href} className="sd-btn sd-btn-primary">
            {CTA.primary.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
