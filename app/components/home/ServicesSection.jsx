import Image from "next/image";
import Link from "next/link";
import Reveal from "../shell/Reveal";
import Mark from "../shell/Marks";
import { fill, tone } from "../../../lib/images";
import { SERVICE_CATEGORIES } from "../../../lib/nav";

/** Technology-partner services: one clear photo beside a clean, scannable list of what we do. */
export default function ServicesSection() {
  return (
    <section className="sd-surface sd-section">
      <div className="sd-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="sd-label">Expert services</p>
          <h2 className="sd-h2 mt-4">Need more? Our engineers build with you</h2>
          <p className="sd-lead mt-5">
            Alongside our own products, our team plans, builds and runs custom technology for your business, from the first
            idea to everyday operations.
          </p>
          <div className={`relative mt-9 aspect-[4/3] overflow-hidden rounded-[20px] shadow-[0_24px_48px_-20px_rgba(11,27,51,0.35)] ${tone("story-crm")}`}>
            <Image {...fill("story-crm", "center 35%")} sizes="(min-width: 1024px) 40vw, 92vw" />
          </div>
          <div className="mt-8">
            <Link href="/services" className="sd-btn sd-btn-primary">
              Explore all services
            </Link>
          </div>
        </Reveal>

        <ul className="flex flex-col gap-3">
          {SERVICE_CATEGORIES.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 50}>
              <Link href={s.href} className="sd-card-link group flex items-start gap-5 p-5 sm:p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sd-surface">
                  <Mark name={s.mark} size={30} color={s.accent} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[18px] font-semibold tracking-tight text-sd-ink transition-colors group-hover:text-sd-blue">
                    {s.name}
                  </span>
                  <span className="mt-1 block text-[15px] leading-relaxed text-sd-muted">{s.blurb}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="mt-3 text-[18px] text-sd-faint transition-all group-hover:translate-x-1 group-hover:text-sd-blue"
                >
                  &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
