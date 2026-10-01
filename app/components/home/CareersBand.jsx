import Image from "next/image";
import Link from "next/link";
import Reveal from "../shell/Reveal";
import { fill, tone } from "../../../lib/images";

/** A calm careers band: one clear photo, one short message, one link. */
export default function CareersBand() {
  return (
    <section className="bg-white sd-section">
      <div className="sd-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className={`relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-[0_24px_48px_-20px_rgba(11,27,51,0.35)] ${tone("engineering")}`}>
            <Image {...fill("engineering", "center 40%")} sizes="(min-width: 1024px) 48vw, 92vw" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="sd-label">Careers</p>
          <h2 className="sd-h2 mt-4">Build the technology behind business growth</h2>
          <p className="sd-lead mt-5">
            Join a team of engineers, designers and problem-solvers who help businesses grow every day.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/careers" className="sd-btn sd-btn-primary">
              View careers
            </Link>
            <Link href="/careers/opportunities" className="sd-btn sd-btn-outline sd-btn-plain">
              Open roles
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
