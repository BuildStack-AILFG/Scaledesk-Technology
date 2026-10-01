import Reveal from "../shell/Reveal";
import { TESTIMONIALS } from "../../../lib/proof";

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

/** Approved customer quotes. Renders nothing until TESTIMONIALS has entries. */
export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="bg-white sd-section">
      <div className="sd-container">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <p className="sd-label">Customer stories</p>
          <h2 className="sd-h2 mt-4">What our customers say</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="figure" key={t.name + t.company} delay={(i % 3) * 80} className="sd-card flex flex-col p-8">
              <span aria-hidden="true" className="font-display text-[56px] font-bold leading-[0.6] text-sd-teal">
                &ldquo;
              </span>
              <blockquote className="mt-4 flex-1 text-[17px] leading-relaxed text-sd-ink">{t.quote}</blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-sd-line pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sd-tint text-[14px] font-semibold text-sd-teal-dark">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-sd-ink">{t.name}</span>
                  <span className="block text-[14px] text-sd-muted">
                    {[t.role, t.company].filter(Boolean).join(", ")}
                  </span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
