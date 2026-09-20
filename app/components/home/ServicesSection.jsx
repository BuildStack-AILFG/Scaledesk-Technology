import Image from "next/image";
import Link from "next/link";
import Reveal from "../shell/Reveal";
import Mark from "../shell/Marks";
import { fill } from "../../../lib/images";
import { SERVICE_CATEGORIES } from "../../../lib/nav";

/** Technology-partner services: one clear photo beside a clean, scannable list of what we do. */
export default function ServicesSection() {
  return (
    <section className="bg-white sd-section">
      <div className="sd-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="sd-label">Expert services</p>
          <h2 className="sd-h2 mt-4">Need more? Our experts build with you</h2>
          <span className="mt-6 block h-[2px] w-11 bg-[#00a3b0]" aria-hidden="true" />
          <p className="sd-lead mt-6">
            Alongside our own products, our team plans, builds and runs custom technology for your business, from the first
            idea to everyday operations.
          </p>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl">
            <Image {...fill("story-crm", "center 35%")} sizes="(min-width: 1024px) 40vw, 92vw" />
          </div>
          <div className="mt-7">
            <Link href="/services" className="sd-link">
              Explore all services
            </Link>
          </div>
        </Reveal>

        <ul className="border-t border-[#e6e8ee]">
          {SERVICE_CATEGORIES.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 60} className="border-b border-[#e6e8ee]">
              <Link href={s.href} className="group flex items-start gap-5 py-6 transition-colors">
                <Mark name={s.mark} size={44} color={s.accent} className="mt-0.5 shrink-0" />
                <span className="min-w-0 flex-1">
                  <span className="block text-[clamp(20px,1.8vw,24px)] font-normal text-[#111] transition-colors group-hover:text-[#0a5fbe]">
                    {s.name}
                  </span>
                  <span className="mt-1.5 block text-[16px] leading-snug text-[#555]">{s.blurb}</span>
                </span>
                <span className="mt-2 text-[24px] text-[#a3aab5] transition-transform group-hover:translate-x-1 group-hover:text-[#0a5fbe]">
                  &rsaquo;
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
