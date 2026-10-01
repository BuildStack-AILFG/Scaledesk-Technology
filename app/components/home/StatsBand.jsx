import Reveal from "../shell/Reveal";
import { STATS } from "../../../lib/proof";

/** Headline numbers on a navy band. Renders nothing until STATS has real figures. */
export default function StatsBand() {
  if (STATS.length === 0) return null;

  return (
    <section className="bg-white px-3 pt-16 sm:px-5 lg:pt-20">
      <div className="sd-navy-band on-dark">
        <dl
          className={`sd-container grid gap-y-10 py-14 text-center sm:grid-cols-2 lg:py-16 ${
            STATS.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="px-4 lg:border-l lg:border-white/10 lg:first:border-l-0">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(40px,4.4vw,56px)] font-bold leading-none tracking-tight text-white">
                  {s.value}
                </span>
                <span className="mt-3 block text-[15px] text-white/70" aria-hidden="true">
                  {s.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
