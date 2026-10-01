import SmartLink from "../shell/SmartLink";
import Reveal from "../shell/Reveal";
import Mark from "../shell/Marks";

/**
 * Featured panel: a gradient promo tile on one side and a clean
 * mark / name / one-liner grid of products on the other.
 */
export default function FeaturedCard({ promo, label, link, items, promoSide = "left", columns = 3 }) {
  const promoTile = (
    <div className="sd-gradient-card flex flex-col justify-between p-8 sm:p-10">
      <div>
        <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/90 ring-1 ring-white/20">
          Featured
        </span>
        <h2 className="mt-6 font-display text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.15] tracking-tight text-white">
          {promo.title}
        </h2>
        <p className="mt-4 max-w-[360px] text-[16px] leading-relaxed text-white/80">{promo.blurb}</p>
      </div>
      <div className="mt-10">
        <SmartLink href={promo.href} external={promo.external} className="sd-btn sd-btn-light">
          {promo.cta}
        </SmartLink>
      </div>
    </div>
  );

  const grid = (
    <div className="flex flex-col p-4 sm:p-6 lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sd-line pb-5">
        <p className="sd-label">{label}</p>
        <SmartLink href={link.href} className="sd-link !text-[15px]">
          {link.label}
        </SmartLink>
      </div>
      <div
        className={`mt-6 grid flex-1 content-start gap-x-6 gap-y-4 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}
      >
        {items.map((it) => (
          <SmartLink key={it.name} href={it.href} external={it.external} className="sd-tile group">
            <span className="flex items-center gap-3.5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sd-line bg-white shadow-[0_1px_2px_rgba(11,27,51,0.05)]">
                <Mark name={it.mark} size={30} color={it.accent} />
              </span>
              <span className="sd-tile-name font-display text-[18px] font-semibold leading-tight tracking-tight text-sd-ink transition-colors">
                {it.name}
              </span>
            </span>
            <span className="mt-3 block text-[15px] leading-relaxed text-sd-muted">{it.blurb}</span>
          </SmartLink>
        ))}
      </div>
    </div>
  );

  return (
    <Reveal className="sd-container">
      <div
        className={`sd-card grid gap-2 p-2 shadow-[0_10px_24px_-6px_rgba(11,27,51,0.06),0_30px_60px_-24px_rgba(11,27,51,0.18)] lg:gap-4 ${
          promoSide === "left" ? "lg:grid-cols-[minmax(300px,400px)_1fr]" : "lg:grid-cols-[1fr_minmax(300px,400px)]"
        }`}
      >
        {promoSide === "left" ? (
          <>
            {promoTile}
            {grid}
          </>
        ) : (
          <>
            {grid}
            {promoTile}
          </>
        )}
      </div>
    </Reveal>
  );
}
