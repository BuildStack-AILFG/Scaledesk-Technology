import Link from "next/link";
import Logo from "./Logo";
import SmartLink from "./SmartLink";
import { SocialIcon } from "./Icons";

function Col({ title, children }) {
  return (
    <div>
      <p className="mb-4 text-[14px] font-medium uppercase tracking-[0.06em] text-[#111]">{title}</p>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FLink({ href, external, children }) {
  return (
    <li>
      <SmartLink href={href} external={external} className="text-[15px] text-[#333] transition-colors hover:text-[#0a5fbe]">
        {children}
      </SmartLink>
    </li>
  );
}

export default function CorporateFooter({ nav }) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="border-t border-[#dfe8ec] bg-[#f0f8f9] py-14">
        <div className="sd-container grid gap-10 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          <div className="max-w-xs">
            <Link href="/" aria-label="ScaleDesk Technology home">
              <Logo size="md" />
            </Link>
            <p className="mt-5 text-[17px] leading-snug text-[#111]">Products that grow your business.</p>
            <p className="mt-2 text-[15px] leading-relaxed text-[#555]">
              We build platforms and AI agents that help businesses grow their sales, with expert services when you need more.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {nav.social.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5dbe0] bg-white text-[#333] transition-colors hover:border-[#0a5fbe] hover:text-[#0a5fbe]"
                >
                  <SocialIcon id={s.id} size={16} />
                </a>
              ))}
            </div>
          </div>

          <Col title="Services">
            {nav.featuredServices.map((s) => (
              <FLink key={s.href} href={s.href}>
                {s.label}
              </FLink>
            ))}
            <FLink href="/services">All services</FLink>
          </Col>

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
      </div>

      <div className="bg-[#06214f] text-[14px] text-white/75">
        <div className="sd-container flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} ScaleDesk Technology. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
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
