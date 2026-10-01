import Link from "next/link";
import Reveal from "../shell/Reveal";
import { CTA } from "../../../lib/nav";

/** Closing call to action on a navy band. Used at the foot of most pages. */
export default function HomeCta({
  title = "Ready to grow your business?",
  lead = "Tell us where you want to grow. Our experts will show you how our platforms, agents and engineers can get you there.",
}) {
  return (
    <section className="px-3 pb-16 pt-4 sm:px-5 lg:pb-20">
      <div className="sd-navy-band on-dark">
        <div className="sd-container flex flex-col items-center py-16 text-center lg:py-24">
          <Reveal>
            <h2 className="sd-h2 mx-auto max-w-[760px]">{title}</h2>
            <p className="sd-lead mx-auto mt-5 max-w-[620px]">{lead}</p>
          </Reveal>
          <Reveal delay={120} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href={CTA.primary.href} className="sd-btn sd-btn-light">
              {CTA.primary.label}
            </Link>
            <Link href="/products" className="sd-btn sd-btn-ghost-light sd-btn-plain">
              Explore platforms
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
