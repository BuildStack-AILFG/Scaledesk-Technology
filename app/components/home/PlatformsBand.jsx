import Link from "next/link";
import Reveal from "../shell/Reveal";
import Mark from "../shell/Marks";
import { PLATFORMS_NAV } from "../../../lib/nav";

/** Our own platforms on a deep navy band: four calm columns, each with a proper name and one line. */
export default function PlatformsBand() {
  return (
    <section className="sd-navy-band sd-section">
      <div className="sd-container">
        <Reveal className="max-w-[760px]">
          <p className="sd-label !text-[#7fd6de]">Our platforms</p>
          <h2 className="sd-h2 mt-4 !text-white">One growth suite for leads, conversations, social and people</h2>
          <p className="sd-lead mt-5 !text-white/80">
            Platforms we built ourselves and use to help our customers grow. Start with one, add the rest as you go.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORMS_NAV.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className="border-t border-white/25 pt-6">
              <Mark name={p.mark} size={46} color="#8fe3ea" />
              <h3 className="mt-5 text-[24px] font-normal !text-white">{p.name}</h3>
              <p className="mt-0.5 text-[14px] font-medium uppercase tracking-[0.06em] text-[#7fd6de]">{p.kind}</p>
              <p className="mt-4 text-[16px] leading-snug text-white/80">{p.descriptor}</p>
              <Link href={p.href} className="sd-link on-dark mt-6">
                Explore
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
