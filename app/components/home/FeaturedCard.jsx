import SmartLink from "../shell/SmartLink";
import Reveal from "../shell/Reveal";
import Mark from "../shell/Marks";

/**
 * Zoho's "Featured apps" card: a bordered white panel with a gradient promo
 * tile on one side and a clean mark / name / one-liner grid on the other.
 */
export default function FeaturedCard({ promo, label, link, items, promoSide = "left", columns = 3 }) {
  const promoTile = (
    <div className="sd-gradient-card flex flex-col items-center justify-center px-8 py-12 text-center">
      <h2 className="text-[clamp(28px,2.8vw,40px)] font-light leading-tight text-white">{promo.title}</h2>
      <p className="mt-4 max-w-[340px] text-[17px] font-light leading-snug text-white/90">{promo.blurb}</p>
      <SmartLink
        href={promo.href}
        external={promo.external}
        className="sd-btn sd-btn-ghost-light mt-7 !rounded-full !px-7 !py-3.5 !text-[14px]"
      >
        {promo.cta}
      </SmartLink>
    </div>
  );

  const grid = (
    <div className="flex flex-col px-2 py-2 sm:px-6 sm:py-3">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e6e8ee] pb-4">
        <p className="sd-label">{label}</p>
        <SmartLink href={link.href} className="sd-link">
          {link.label}
        </SmartLink>
      </div>
      <div
        className={`mt-6 grid flex-1 content-start gap-x-6 gap-y-7 sm:grid-cols-2 ${
          columns === 3 ? "lg:grid-cols-3" : ""
        }`}
      >
        {items.map((it) => (
          <SmartLink key={it.name} href={it.href} external={it.external} className="sd-tile">
            <span className="flex items-center gap-3.5">
              <Mark name={it.mark} size={40} color={it.accent} />
              <span className="sd-tile-name text-[clamp(20px,1.6vw,24px)] font-light leading-tight text-[#111] transition-colors">
                {it.name}
              </span>
            </span>
            <span className="mt-2.5 block text-[15px] leading-snug text-[#333]">{it.blurb}</span>
          </SmartLink>
        ))}
      </div>
    </div>
  );

  return (
    <Reveal className="mx-auto max-w-[1300px] px-6">
      <div
        className={`sd-card grid gap-4 p-4 lg:gap-8 ${
          promoSide === "left" ? "lg:grid-cols-[minmax(320px,440px)_1fr]" : "lg:grid-cols-[1fr_minmax(320px,440px)]"
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
