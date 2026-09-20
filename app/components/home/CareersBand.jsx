import Image from "next/image";
import Link from "next/link";
import Reveal from "../shell/Reveal";
import { fill } from "../../../lib/images";

/** A calm careers band: one clear photo, one short message, one link. */
export default function CareersBand() {
  return (
    <section className="sd-surface sd-section">
      <div className="sd-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image {...fill("engineering", "center 40%")} sizes="(min-width: 1024px) 48vw, 92vw" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="sd-label">Careers</p>
          <h2 className="sd-h2 mt-4">Build the technology behind business growth</h2>
          <span className="mt-6 block h-[2px] w-11 bg-[#00a3b0]" aria-hidden="true" />
          <p className="sd-lead mt-6">
            Join a team of engineers, designers and problem-solvers who help businesses grow every day.
          </p>
          <div className="mt-8">
            <Link href="/careers" className="sd-link">
              View careers
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
