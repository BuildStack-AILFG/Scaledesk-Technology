import Link from "next/link";
import Reveal from "../shell/Reveal";

/**
 * Centred page hero on the teal wave backdrop (the Zoho pattern used across
 * the site): breadcrumb, small label, light headline, accent dash, lead, actions.
 */
export default function PageHero({ crumbs = [], label, title, lead, children, narrow = false }) {
  return (
    <section className="sd-wave">
      {crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="sd-container pt-6 text-[14px] text-[#666]">
          {crumbs.map((c, i) => (
            <span key={c.href ?? c.name}>
              {i > 0 && <span className="mx-2">/</span>}
              {i < crumbs.length - 1 ? (
                <Link href={c.href} className="hover:text-[#0a5fbe]">
                  {c.name}
                </Link>
              ) : (
                <span className="text-[#111]">{c.name}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <div className={`mx-auto px-6 pb-12 pt-10 text-center lg:pb-16 lg:pt-14 ${narrow ? "max-w-[820px]" : "max-w-[1000px]"}`}>
        <Reveal>
          {label && <p className="sd-label">{label}</p>}
          <h1 className={`sd-h1 ${label ? "mt-4" : ""}`}>{title}</h1>
          <span className="sd-dash" aria-hidden="true" />
        </Reveal>
        {lead && (
          <Reveal delay={100}>
            <p className="sd-lead mx-auto mt-8 max-w-[800px]">{lead}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={200} className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
