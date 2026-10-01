import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import SmartLink from "./SmartLink";
import { SocialIcon } from "./Icons";
import { COMPANY } from "../../../lib/proof";

function Col({ title, children }) {
  return (
    <div>
      <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7fe3ea]">{title}</p>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FLink({ href, external, children, strong = false }) {
  return (
    <li>
      <SmartLink
        href={href}
        external={external}
        className={`group inline-flex items-center gap-1.5 text-[15px] transition-colors hover:text-white ${
          strong ? "font-semibold text-white" : "text-white/65"
        }`}
      >
        {children}
        {strong && (
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        )}
      </SmartLink>
    </li>
  );
}

/** Registered-company facts. Only fields that are filled in lib/proof.js render. */
function CompanyFacts() {
  const reg = [COMPANY.cin && { k: "CIN", v: COMPANY.cin }, COMPANY.gstin && { k: "GSTIN", v: COMPANY.gstin }].filter(Boolean);
  const contact = [
    COMPANY.email && { icon: Mail, v: COMPANY.email, href: `mailto:${COMPANY.email}` },
    COMPANY.phone && { icon: Phone, v: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s+/g, "")}` },
    COMPANY.address && { icon: MapPin, v: COMPANY.address, sr: "Registered office: " },
  ].filter(Boolean);

  return (
    <div className="grid gap-6 rounded-[20px] border border-white/10 bg-white/[0.04] p-6 text-[14px] md:grid-cols-[1fr_1.4fr] md:p-7">
      <div>
        <p className="font-display text-[16px] font-semibold text-white">{COMPANY.legalName}</p>
        {reg.length > 0 ? (
          <dl className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-white/60">
            {reg.map((r) => (
              <div key={r.k} className="flex gap-1.5">
                <dt className="font-medium text-white/80">{r.k}:</dt>
                <dd className="tabular-nums">{r.v}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="mt-2 text-white/60">Registered private limited company, India</p>
        )}
      </div>
      <ul className="flex flex-col gap-2.5 text-white/70 md:items-end md:text-right">
        {contact.map(({ icon: Icon, v, href, sr }) => (
          <li key={v} className="flex max-w-[480px] items-start gap-2.5 md:flex-row-reverse">
            <Icon size={15} className="mt-[3px] shrink-0 text-[#7fe3ea]" aria-hidden="true" />
            {href ? (
              <a href={href} className="transition-colors hover:text-white">
                {v}
              </a>
            ) : (
              <span className="leading-relaxed">
                {sr && <span className="sr-only">{sr}</span>}
                {v}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CorporateFooter({ nav }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#051a3d] text-white">
      {/* Backdrop: soft brand glows + faint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_100%_0%,rgba(0,163,176,0.22),transparent_70%),radial-gradient(45%_55%_at_0%_100%,rgba(10,95,190,0.3),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(70%_60%_at_50%_0%,#000,transparent_80%)]"
      />

      <div className="sd-container">
        {/* Link columns */}
        <div className="grid gap-12 pb-14 pt-16 lg:grid-cols-[1.4fr_repeat(5,1fr)] lg:gap-8 lg:pt-20">
          <div className="max-w-xs">
            <Link href="/" aria-label="ScaleDesk Technology home" className="inline-flex rounded-2xl bg-white px-3 py-2">
              <Logo size="sm" />
            </Link>
            <p className="mt-6 text-[15px] leading-relaxed text-white/65">
              Platforms and AI agents that help businesses grow their sales, with expert engineers whenever you need more.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {nav.social.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-white hover:bg-white hover:text-[#061f4a]"
                >
                  <SocialIcon id={s.id} size={15} />
                </a>
              ))}
            </div>
          </div>

          <Col title="Platforms">
            {nav.platforms.map((p) => (
              <FLink key={p.slug} href={p.href}>
                {p.displayName}
              </FLink>
            ))}
            <FLink href="/products" strong>
              All platforms
            </FLink>
          </Col>

          <Col title="AI agents">
            {nav.agents.map((a) => (
              <FLink key={a.slug} href={a.href}>
                {a.displayName}
              </FLink>
            ))}
            <FLink href="/agents" strong>
              All agents
            </FLink>
          </Col>

          <Col title="Services">
            {nav.featuredServices.map((s) => (
              <FLink key={s.href} href={s.href}>
                {s.label}
              </FLink>
            ))}
            <FLink href="/services" strong>
              All services
            </FLink>
          </Col>

          <Col title="Industries">
            {nav.industries.slice(0, 6).map((i) => (
              <FLink key={i.href} href={i.href}>
                {i.label}
              </FLink>
            ))}
            <FLink href="/industries" strong>
              All industries
            </FLink>
          </Col>

          <Col title="Company">
            {nav.company.map((c) => (
              <FLink key={c.href} href={c.href}>
                {c.label}
              </FLink>
            ))}
            {nav.resources.map((r) => (
              <FLink key={r.href} href={r.href}>
                {r.label}
              </FLink>
            ))}
          </Col>
        </div>

        <CompanyFacts />

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 py-7 text-[14px] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {COMPANY.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
