import Image from "next/image";
import Link from "next/link";
import Reveal from "../shell/Reveal";
import { fill, IMG } from "../../../lib/images";

const FEATURED = ["healthcare", "ecommerce", "manufacturing", "logistics"];

/** Four photo tiles for the industries we serve most, then a link to the rest. */
export default function IndustryTiles({ items }) {
  const tiles = FEATURED.map((slug) => items.find((i) => i.slug === slug)).filter((i) => i && IMG[`ind-${i.slug}`]);

  return (
    <section className="bg-white sd-section">
      <div className="sd-container">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[640px]">
            <p className="sd-label">Industries</p>
            <h2 className="sd-h2 mt-4">Built for the way your industry works</h2>
          </div>
          <Link href="/industries" className="sd-btn sd-btn-outline shrink-0">
            All industries
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.href} delay={i * 80}>
              <Link
                href={t.href}
                className="group relative block aspect-[3/4] overflow-hidden rounded-[20px] shadow-[0_10px_30px_-18px_rgba(11,27,51,0.45)]"
              >
                <Image
                  {...fill(`ind-${t.slug}`)}
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 92vw"
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,31,74,0)_40%,rgba(6,31,74,0.88)_100%)]" />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
                  <span className="font-display text-[21px] font-semibold tracking-tight text-white">{t.label}</span>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition-all group-hover:bg-white group-hover:text-sd-navy"
                  >
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
