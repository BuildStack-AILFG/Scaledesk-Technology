import Breadcrumbs from "./Breadcrumbs";

/**
 * Page hero on the grid backdrop: breadcrumb, eyebrow label, headline, lead, actions.
 *
 *  - Default: centred.
 *  - Pass `aside` (any node: photo, card, visual) for a two-column, left-aligned hero.
 *
 * Above-the-fold, so it uses the CSS-only `.sd-enter` entrance (no hydration wait).
 */
export default function PageHero({ crumbs = [], label, title, lead, children, narrow = false, aside = null }) {
  const split = Boolean(aside);

  return (
    <section className="sd-wave sd-hero-bleed">
      <Breadcrumbs crumbs={crumbs} className="sd-container pt-7" />
      <div
        className={
          split
            ? "sd-container grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pb-20 lg:pt-14"
            : `mx-auto px-6 pb-16 pt-10 text-center lg:pb-20 lg:pt-14 ${narrow ? "max-w-[820px]" : "max-w-[980px]"}`
        }
      >
        <div>
          <div className="sd-enter">
            {label && <p className="sd-label">{label}</p>}
            <h1 className={`sd-h1 ${label ? "mt-5" : ""}`}>{title}</h1>
          </div>
          {lead && (
            <div className="sd-enter" style={{ "--d": "100ms" }}>
              <p className={`sd-lead mt-6 max-w-[760px] ${split ? "" : "mx-auto"}`}>{lead}</p>
            </div>
          )}
          {children && (
            <div
              className={`sd-enter mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 ${split ? "" : "justify-center"}`}
              style={{ "--d": "200ms" }}
            >
              {children}
            </div>
          )}
        </div>
        {split && (
          <div className="sd-enter" style={{ "--d": "180ms" }}>
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}
