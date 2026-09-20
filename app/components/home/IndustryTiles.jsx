import Image from "next/image";
import Link from "next/link";
import Reveal from "../shell/Reveal";
import { fill, IMG } from "../../../lib/images";

const FEATURED = ["healthcare", "ecommerce", "manufacturing", "logistics"];

/** Four photo tiles for the industries we serve most, then a link to the rest. */
export default function IndustryTiles({ items }) {
  const tiles = FEATURED.map((slug) => items.find((i) => i.slug === slug)).filter((i) => i && IMG[`ind-${i.slug}`]);

  return (
    <section className="sd-surface sd-section">
      <div className="sd-container">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[640px]">
            <p className="sd-label">Industries</p>
            <h2 className="sd-h2 mt-4">Built for the way your industry works</h2>
          </div>
          <Link href="/industries" className="sd-link">
            All industries
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.href} delay={i * 80}>
              <Link href={t.href} className="group relative block aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  {...fill(`ind-${t.slug}`)}
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 92vw"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,33,79,0)_45%,rgba(6,33,79,0.85)_100%)]" />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-[22px] font-normal text-white">
                  {t.label}
                  <span className="text-[26px] transition-transform group-hover:translate-x-1">&rsaquo;</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
