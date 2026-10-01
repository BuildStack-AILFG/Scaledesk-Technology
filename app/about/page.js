import Link from "next/link";
import FramedPhoto from "../components/pages/FramedPhoto";
import { Building2, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import JsonLd from "../components/seo/JsonLd";
import Reveal from "../components/shell/Reveal";
import { Arrow, IconTile, accent } from "../components/ui/CardParts";
import PageHero from "../components/pages/PageHero";
import StatsBand from "../components/home/StatsBand";
import HomeCta from "../components/home/HomeCta";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph } from "../../lib/seo/schema";
import { AGENT_SUITE } from "../../lib/catalog/agents";
import { PLATFORMS_NAV } from "../../lib/nav";
import { COMPANY } from "../../lib/proof";

const DESCRIPTION =
  "ScaleDesk Technology is a product company with a services arm. Our mission is to uplift every business with AI and automation, through our own platforms, ForGrow AI agents and expert engineering.";

export const metadata = buildPageMetadata({
  title: "About ScaleDesk — Products That Help Businesses Grow",
  seoTitle: "About ScaleDesk Technology | Products That Help Businesses Grow",
  metaDescription: DESCRIPTION,
  path: "/about",
  primaryKeyword: "About ScaleDesk Technology",
  secondaryKeywords: ["ScaleDesk mission", "AI and automation company", "LeadForGrow", "ForGrow AI"],
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const VALUE_ACCENTS = ["#0A5FBE", "#00A3B0", "#7C4DFF", "#E58A00"];

const VALUES = [
  { n: "01", title: "Business first", body: "We judge our work by what it does for your business, not by how many features it has." },
  { n: "02", title: "Simple by design", body: "Powerful software should be easy to pick up, so your team uses it from day one." },
  { n: "03", title: "Honest by default", body: "We only promise what we can deliver, and we say so plainly when something is not the right fit." },
  { n: "04", title: "Built to last", body: "We build for the long run, so what you set up today keeps working as you grow." },
];

/** Registered-company facts. Only filled-in fields from lib/proof.js are shown. */
function CompanyCard() {
  const rows = [
    { icon: Building2, k: "Legal name", v: COMPANY.legalName },
    COMPANY.cin && { icon: Building2, k: "CIN", v: COMPANY.cin },
    COMPANY.gstin && { icon: Building2, k: "GSTIN", v: COMPANY.gstin },
    COMPANY.address && { icon: MapPin, k: "Registered office", v: COMPANY.address },
    COMPANY.email && { icon: Mail, k: "Email", v: COMPANY.email, href: `mailto:${COMPANY.email}` },
    COMPANY.phone && { icon: Phone, k: "Phone", v: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s+/g, "")}` },
  ].filter(Boolean);

  return (
    <dl className="sd-card divide-y divide-sd-line">
      {rows.map(({ icon: Icon, k, v, href }) => (
        <div key={k} className="flex items-start gap-4 px-6 py-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sd-tint text-sd-teal-dark" aria-hidden="true">
            <Icon size={17} />
          </span>
          <div className="min-w-0">
            <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-sd-muted">{k}</dt>
            <dd className="mt-1 break-words text-[16px] font-medium text-sd-ink">
              {href ? (
                <a href={href} className="transition-colors hover:text-sd-blue">
                  {v}
                </a>
              ) : (
                v
              )}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

export default function AboutPage() {
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: { title: "About ScaleDesk Technology", description: DESCRIPTION, path: "/about" },
  });

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero
          crumbs={crumbs}
          label="About ScaleDesk"
          title="We build products that help businesses grow"
          lead="ScaleDesk is a product company with a services arm. Our mission is to uplift every business with AI and automation."
          aside={
            <FramedPhoto name="mission" position="center 40%" />
          }
        >
          <Link href="/contact" className="sd-btn sd-btn-primary">
            Talk to our team
          </Link>
          <Link href="/careers" className="sd-btn sd-btn-outline sd-btn-plain">
            Join us
          </Link>
        </PageHero>

        <section className="bg-white sd-section">
          <div className="sd-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <p className="sd-label">Our mission</p>
              <h2 className="sd-h2 mt-4">Every business deserves the tools to grow</h2>
            </Reveal>
            <Reveal delay={100} className="space-y-5 text-[18px] leading-relaxed text-sd-body">
              <p>
                We started ScaleDesk to put AI and automation in the hands of the businesses that need them most, so
                they can answer customers faster, follow up on every lead and turn more conversations into sales.
              </p>
              <p>
                We do that by building our own platforms and AI agents, and by working alongside our customers as their
                technology partner whenever they need something built around the way they work.
              </p>
            </Reveal>
          </div>
        </section>

        <StatsBand />

        <section className="sd-surface sd-section">
          <div className="sd-container">
            <Reveal className="mx-auto max-w-[720px] text-center">
              <p className="sd-label">What we build</p>
              <h2 className="sd-h2 mt-4">Platforms, agents and expert services</h2>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PLATFORMS_NAV.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link href={p.href} className="sd-fcard group flex h-full flex-col p-7" style={accent(p.accent)}>
                    <IconTile logo={p.logo} mark={p.mark} color={p.accent} />
                    <h3 className="sd-h3 mt-6">{p.displayName}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-sd-muted">{p.descriptor}</p>
                    <span className="mt-6 flex items-center justify-between">
                      <span className="text-[14.5px] font-semibold text-sd-blue">Explore</span>
                      <Arrow />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-5 grid gap-5 md:grid-cols-2">
              <Link href="/agents" className="sd-fcard sd-fcard-dark group flex flex-col p-8 sm:p-9">
                <span className="sd-fcard-grid" aria-hidden="true" />
                <IconTile icon={Sparkles} />
                <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7fe3ea]">AI agents</p>
                <h3 className="mt-2 font-display text-[26px] font-bold tracking-tight">{AGENT_SUITE.name}</h3>
                <p className="mt-2 flex-1 text-[15.5px] leading-relaxed text-white/75">
                  AI agents for sales, support, voice, finance, hiring and marketing.
                </p>
                <span className="mt-7 flex items-center justify-between">
                  <span className="text-[15px] font-semibold text-white">Meet the agents</span>
                  <Arrow />
                </span>
              </Link>
              <Link href="/services" className="sd-fcard sd-fcard-tint group flex flex-col p-8 sm:p-9" style={accent("#7C4DFF")}>
                <IconTile mark="code" color="#7C4DFF" />
                <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7C4DFF]">Expert services</p>
                <h3 className="mt-2 font-display text-[26px] font-bold tracking-tight text-sd-ink">Custom technology, built with you</h3>
                <p className="mt-2 flex-1 text-[15.5px] leading-relaxed text-sd-muted">
                  Our engineers plan, build and run what you need around the way you work.
                </p>
                <span className="mt-7 flex items-center justify-between">
                  <span className="text-[15px] font-semibold text-sd-ink">Explore services</span>
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="bg-white sd-section">
          <div className="sd-container">
            <Reveal className="mx-auto max-w-[720px] text-center">
              <p className="sd-label">Our values</p>
              <h2 className="sd-h2 mt-4">What we stand for</h2>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v, i) => (
                <Reveal
                  key={v.title}
                  delay={i * 80}
                  className="sd-fcard sd-fcard-tint is-hoverable h-full p-7"
                  style={accent(VALUE_ACCENTS[i % VALUE_ACCENTS.length])}
                >
                  <span className="sd-numeral block" aria-hidden="true">
                    {v.n}
                  </span>
                  <h3 className="sd-h3 mt-6">{v.title}</h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-sd-muted">{v.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="sd-surface sd-section">
          <div className="sd-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <p className="sd-label">Company information</p>
              <h2 className="sd-h2 mt-4">A registered Indian private limited company</h2>
              <p className="sd-lead mt-5">
                {COMPANY.legalName} is incorporated in India. Reach us any time for partnerships, procurement or vendor
                onboarding.
              </p>
              <Link href="/contact" className="sd-link mt-6">
                Contact us
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <CompanyCard />
            </Reveal>
          </div>
        </section>

        <HomeCta />
      </main>
    </>
  );
}
