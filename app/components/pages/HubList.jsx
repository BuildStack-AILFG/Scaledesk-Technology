import Image from "next/image";
import Link from "next/link";
import Reveal from "../shell/Reveal";
import { Arrow, IconTile, accent } from "../ui/CardParts";
import { IMG, fill, tone } from "../../../lib/images";

/**
 * Hub listings (services, industries, glossary). Three layouts so hub pages
 * don't all look alike:
 *
 *   variant="panels"  each group is one large card with an icon header and link rows (services)
 *   variant="photos"  photo cards with a navy fade and label (industries; item.image = lib/images key)
 *   variant="cards"   accent cards with a monogram or icon tile (glossary, default)
 *
 * groups: [{ title?, mark?, accent?, items: [{ name, blurb, href, image?, mark?, accent? }] }]
 */
export default function HubList({ groups, variant = "cards" }) {
  if (variant === "panels") return <Panels groups={groups} />;
  if (variant === "photos") return <Photos items={groups.flatMap((g) => g.items)} />;
  return <Cards groups={groups} />;
}

function Panels({ groups }) {
  return (
    <section className="sd-surface sd-section">
      <div className="sd-container grid gap-6 lg:grid-cols-2">
        {groups.map((g, gi) => (
          <Reveal
            key={g.title}
            delay={(gi % 2) * 80}
            className={`sd-fcard is-hoverable flex flex-col p-7 sm:p-8 ${gi === 0 ? "lg:col-span-2" : ""}`}
            style={accent(g.accent)}
          >
            <div className="flex items-center gap-4">
              <IconTile mark={g.mark} color={g.accent} />
              <div className="min-w-0">
                <h2 className="font-display text-[22px] font-bold tracking-tight text-sd-ink">{g.title}</h2>
                <p className="text-[14px] font-medium text-sd-muted">
                  {g.items.length} {g.items.length === 1 ? "service" : "services"}
                </p>
              </div>
            </div>
            <ul className={`mt-7 grid gap-x-8 border-t border-sd-line ${gi === 0 ? "sm:grid-cols-2" : ""}`}>
              {g.items.map((it) => (
                <li key={it.href} className="border-b border-sd-line">
                  <Link href={it.href} className="group flex items-start gap-4 py-4">
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[16.5px] font-semibold tracking-tight text-sd-ink transition-colors group-hover:text-sd-blue">
                        {it.name}
                      </span>
                      {it.blurb && <span className="mt-1 block text-[14.5px] leading-relaxed text-sd-muted">{it.blurb}</span>}
                    </span>
                    <Arrow className="mt-0.5 !h-8 !w-8 !text-[14px]" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Photos({ items }) {
  return (
    <section className="bg-white sd-section">
      <div className="sd-container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => {
          const hasImg = it.image && IMG[it.image];
          // Bento rhythm on a 3-column grid: widen the first (and if needed the
          // last) tile so every row is full.
          const spans = (3 - (items.length % 3)) % 3;
          const wide = (spans >= 1 && i === 0) || (spans === 2 && i === items.length - 1);
          return (
            <Reveal key={it.href} delay={(i % 3) * 70} className={wide ? "lg:col-span-2" : ""}>
              <Link
                href={it.href}
                className="group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-[22px] bg-sd-navy shadow-[0_10px_30px_-18px_rgba(11,27,51,0.45)]"
              >
                {hasImg && (
                  <div className={`absolute inset-0 ${tone(it.image)}`}>
                    <Image
                      {...fill(it.image, "center 35%")}
                      sizes="(min-width: 1024px) 40vw, (min-width: 640px) 46vw, 92vw"
                      className="transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(6,31,74,0.05)_20%,rgba(6,31,74,0.92)_100%)]" />
                <div className="relative z-[3] p-6 sm:p-7">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-white ring-1 ring-white/25 backdrop-blur">
                    Industry
                  </span>
                  <span className="mt-3 flex items-end justify-between gap-4">
                    <span>
                      <span className="block font-display text-[24px] font-bold tracking-tight text-white">{it.name}</span>
                      {it.blurb && (
                        <span className="mt-1.5 line-clamp-2 block max-w-[440px] text-[14.5px] leading-relaxed text-white/75">
                          {it.blurb}
                        </span>
                      )}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition-all group-hover:bg-white group-hover:text-sd-navy"
                    >
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

const MONO_ACCENTS = ["#0A5FBE", "#00A3B0", "#7C4DFF", "#E58A00", "#1F9D55", "#C13584"];

function Cards({ groups }) {
  return (
    <section className="sd-surface sd-section">
      <div className="sd-container space-y-16">
        {groups.map((g, gi) => (
          <div key={g.title ?? gi}>
            {g.title && (
              <Reveal className="mb-7 flex items-baseline justify-between gap-4 border-b border-sd-line pb-4">
                <h2 className="font-display text-[clamp(22px,2vw,28px)] font-bold tracking-tight text-sd-ink">{g.title}</h2>
                <span className="shrink-0 text-[14px] font-medium text-sd-muted">{g.items.length} items</span>
              </Reveal>
            )}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((it, i) => {
                const color = it.accent ?? MONO_ACCENTS[i % MONO_ACCENTS.length];
                return (
                  <Reveal key={it.href} delay={(i % 3) * 70}>
                    <Link href={it.href} className="sd-fcard group flex h-full flex-col p-7" style={accent(color)}>
                      <IconTile mark={it.mark} color={color} text={it.mark ? undefined : it.name.charAt(0)} size={48} />
                      <span className="mt-6 block font-display text-[19px] font-semibold leading-snug tracking-tight text-sd-ink">
                        {it.name}
                      </span>
                      {it.blurb && <span className="mt-2.5 block flex-1 text-[15px] leading-relaxed text-sd-muted">{it.blurb}</span>}
                      <span className="mt-6 flex items-center justify-between">
                        <span className="text-[14.5px] font-semibold text-sd-blue">Learn more</span>
                        <Arrow />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
