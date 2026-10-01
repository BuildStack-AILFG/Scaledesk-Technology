import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import SmartLink from "./SmartLink";
import { SocialIcon } from "./Icons";
import { COMPANY } from "../../../lib/proof";

function Col({ title, children }) {
  return (
    <div>
      <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-sd-ink">{title}</p>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FLink({ href, external, children }) {
  return (
    <li>
      <SmartLink href={href} external={external} className="text-[15px] text-sd-muted transition-colors hover:text-sd-navy">
        {children}
      </SmartLink>
    </li>
  );
}

/** Registered-company facts. Only fields that are filled in lib/proof.js render. */
function CompanyFacts() {
  const reg = [
    COMPANY.cin && { k: "CIN", v: COMPANY.cin },
    COMPANY.gstin && { k: "GSTIN", v: COMPANY.gstin },
  ].filter(Boolean);

  return (
    <div className="grid gap-6 border-t border-sd-line pt-8 text-[14px] md:grid-cols-[1.2fr_1fr]">
      <div>
        <p className="font-semibold text-sd-ink">{COMPANY.legalName}</p>
        {reg.length > 0 && (
          <dl className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sd-muted">
            {reg.map((r) => (
              <div key={r.k} className="flex gap-1.5">
                <dt className="font-medium text-sd-body">{r.k}:</dt>
                <dd className="tabular-nums">{r.v}</dd>
              </div>
            ))}
          </dl>
        )}
        {COMPANY.address && (
          <p className="mt-3 flex max-w-[460px] items-start gap-2 leading-relaxed text-sd-muted">
            <MapPin size={15} className="mt-[3px] shrink-0 text-sd-teal" aria-hidden="true" />
            <span>
              <span className="sr-only">Registered office: </span>
              {COMPANY.address}
            </span>
          </p>
        )}
      </div>
      <ul className="flex flex-col gap-2 text-sd-muted md:items-end">
        {COMPANY.email && (
          <li>
            <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-sd-navy">
              <Mail size={15} className="text-sd-teal" aria-hidden="true" />
              {COMPANY.email}
            </a>
          </li>
        )}
        {COMPANY.phone && (
          <li>
            <a
              href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-sd-navy"
            >
              <Phone size={15} className="text-sd-teal" aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default function CorporateFooter({ nav }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sd-line bg-sd-surface">
      <div className="sd-container pb-10 pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(5,1fr)]">
          <div className="max-w-xs">
            <Link href="/" aria-label="ScaleDesk Technology home" className="inline-block">
              <Logo size="md" />
            </Link>
            <p className="mt-5 font-display text-[18px] font-semibold tracking-tight text-sd-ink">
              Products that grow your business.
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-sd-muted">
              Platforms and AI agents that help businesses grow their sales, with expert services when you need more.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {nav.social.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-sd-line bg-white text-sd-body transition-colors hover:border-sd-navy hover:text-sd-navy"
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
            <FLink href="/products">All platforms</FLink>
          </Col>

          <Col title="AI agents">
            {nav.agents.map((a) => (
              <FLink key={a.slug} href={a.href}>
                {a.displayName}
              </FLink>
            ))}
            <FLink href="/agents">All AI agents</FLink>
          </Col>

          <Col title="Services">
            {nav.featuredServices.map((s) => (
              <FLink key={s.href} href={s.href}>
                {s.label}
              </FLink>
            ))}
            <FLink href="/services">All services</FLink>
          </Col>

          <Col title="Industries">
            {nav.industries.slice(0, 6).map((i) => (
              <FLink key={i.href} href={i.href}>
                {i.label}
              </FLink>
            ))}
            <FLink href="/industries">All industries</FLink>
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

        <div className="mt-14">
          <CompanyFacts />
        </div>
      </div>

      <div className="border-t border-sd-line bg-white text-[14px] text-sd-muted">
        <div className="sd-container flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {COMPANY.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {nav.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-sd-navy">
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
