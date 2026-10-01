import Link from "next/link";
import Reveal from "../shell/Reveal";
import Mark from "../shell/Marks";
import { PLATFORMS_NAV } from "../../../lib/nav";

/** Our own platforms on a navy band: four glass cards, each with a name, kind and one line. */
export default function PlatformsBand() {
  return (
    <section className="bg-white px-3 py-4 sm:px-5">
      <div className="sd-navy-band on-dark">
        <div className="sd-container py-16 lg:py-24">
          <Reveal className="max-w-[760px]">
            <p className="sd-label">Our platforms</p>
            <h2 className="sd-h2 mt-4">One growth suite for leads, conversations, social and people</h2>
            <p className="sd-lead mt-5">
              Platforms we built ourselves and use to help our customers grow. Start with one, add the rest as you go.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORMS_NAV.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  href={p.href}
                  className="group flex h-full flex-col rounded-[20px] border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/25 hover:bg-white/[0.08]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                    <Mark name={p.mark} size={30} color={p.accent} />
                  </span>
                  <span className="mt-5 font-display text-[20px] font-semibold tracking-tight text-white">{p.name}</span>
                  <span className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#7fe3ea]">{p.kind}</span>
                  <span className="mt-4 block flex-1 text-[15px] leading-relaxed text-white/75">{p.descriptor}</span>
                  <span className="sd-link mt-6 !text-[15px]">Explore</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
