import Link from "next/link";
import JsonLd from "../components/seo/JsonLd";
import Reveal from "../components/shell/Reveal";
import Mark from "../components/shell/Marks";
import PageHero from "../components/pages/PageHero";
import HomeCta from "../components/home/HomeCta";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph } from "../../lib/seo/schema";
import { SITE } from "../../lib/seo/config";
import { AGENT_SUITE } from "../../lib/catalog/agents";
import { PLATFORMS_NAV } from "../../lib/nav";

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

const VALUES = [
  { title: "Business first", body: "We judge our work by what it does for your business, not by how many features it has." },
  { title: "Simple by design", body: "Powerful software should be easy to pick up, so your team uses it from day one." },
  { title: "Honest by default", body: "We only promise what we can deliver, and we say so plainly when something is not the right fit." },
  { title: "Built to last", body: "We build for the long run, so what you set up today keeps working as you grow." },
];

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
        />

        <section className="bg-white sd-section">
          <div className="sd-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <p className="sd-label">Our mission</p>
              <h2 className="sd-h2 mt-4">Every business deserves the tools to grow</h2>
            </Reveal>
            <Reveal delay={100} className="space-y-5 text-[19px] leading-relaxed text-[#333]">
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

        <section className="sd-surface sd-section">
          <div className="sd-container">
            <Reveal className="mx-auto max-w-[760px] text-center">
              <h2 className="sd-h2">What we build</h2>
              <span className="sd-dash" aria-hidden="true" />
            </Reveal>
            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {PLATFORMS_NAV.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Mark name={p.mark} size={44} color={p.accent} />
                  <h3 className="mt-4 text-[22px] font-normal text-[#111]">{p.displayName}</h3>
                  <p className="mt-2 text-[16px] leading-snug text-[#555]">{p.descriptor}</p>
                  <Link href={p.href} className="sd-link mt-4">
                    Explore
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-12 rounded-3xl border border-[#dfe8ec] bg-white p-8 text-center">
              <p className="text-[19px] leading-relaxed text-[#333]">
                Alongside our platforms, <strong className="font-medium text-[#111]">{AGENT_SUITE.name}</strong> brings AI
                agents to sales, support, voice, finance, hiring and marketing, and our{" "}
                <Link href="/services" className="text-[#0a5fbe] underline">
                  expert services
                </Link>{" "}
                team builds custom technology when you need more.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white sd-section">
          <div className="sd-container">
            <Reveal className="mx-auto max-w-[760px] text-center">
              <h2 className="sd-h2">What we stand for</h2>
              <span className="sd-dash" aria-hidden="true" />
            </Reveal>
            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 80} className="border-t-2 border-[#00a3b0] pt-5">
                  <h3 className="sd-h3">{v.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#333]">{v.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="leadership" className="sd-surface sd-section-tight scroll-mt-32">
          <div className="sd-container">
            <Reveal className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="sd-label">Leadership</p>
                <h2 className="sd-h2 mt-4">{SITE.founder.name}</h2>
                <p className="mt-2 text-[18px] text-[#555]">{SITE.founder.title}</p>
              </div>
              <div>
                <p className="text-[19px] leading-relaxed text-[#333]">
                  {SITE.founder.name} co-founded ScaleDesk Technology and leads product and engineering, including the
                  ForGrow platform family and {AGENT_SUITE.name}.
                </p>
                <a href={SITE.founder.linkedIn} target="_blank" rel="noopener noreferrer" className="sd-link mt-5">
                  Connect on LinkedIn
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <HomeCta />
      </main>
    </>
  );
}
