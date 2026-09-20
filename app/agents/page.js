import JsonLd from "../components/seo/JsonLd";
import Reveal from "../components/shell/Reveal";
import FeaturedCard from "../components/home/FeaturedCard";
import HomeCta from "../components/home/HomeCta";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";
import { AGENT_GUARDRAILS, AGENT_SUITE } from "../../lib/catalog/agents";
import { AGENTS_NAV } from "../../lib/nav";

const PAGE_DESCRIPTION =
  "ForGrow AI by ScaleDesk: AI agents for voice, finance, sales, support, hiring and marketing that work alongside your team.";

export const metadata = buildPageMetadata({
  title: "AI Agents for Business — ForGrow AI",
  seoTitle: "ForGrow AI: AI Agents for Sales, Voice & Finance | ScaleDesk",
  metaDescription: PAGE_DESCRIPTION,
  path: "/agents",
  primaryKeyword: "AI agents for business",
  secondaryKeywords: ["ForGrow AI", "Voice AI agent", "AI financial agent", "AI sales agent"],
});

export default function AgentsHubPage() {
  const graph = pageGraph({
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "AI agents", path: "/agents" },
    ],
    page: { title: "AI agents", description: PAGE_DESCRIPTION, path: "/agents" },
  });
  graph["@graph"].push(collectionPageSchema({ title: "AI agents", description: PAGE_DESCRIPTION, path: "/agents" }));

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <section className="sd-wave">
          <div className="mx-auto max-w-[1000px] px-6 pb-12 pt-14 text-center lg:pb-14 lg:pt-20">
            <Reveal>
              <h1 className="sd-h1">AI agents for every part of your business</h1>
              <span className="sd-dash" aria-hidden="true" />
            </Reveal>
            <Reveal delay={100}>
              <p className="sd-lead mx-auto mt-8 max-w-[780px]">{AGENT_SUITE.blurb}</p>
            </Reveal>
          </div>
          <div className="pb-12 lg:pb-16">
            <FeaturedCard
              label={AGENT_SUITE.name}
              link={{ label: "Talk to our experts", href: "/contact" }}
              promo={{
                title: AGENT_SUITE.name,
                blurb: AGENT_SUITE.tagline,
                cta: "Talk to our experts",
                href: "/contact",
              }}
              items={AGENTS_NAV.map((a) => ({
                name: a.displayName,
                blurb: a.descriptor,
                href: a.href,
                mark: a.mark,
                accent: a.accent,
              }))}
            />
          </div>
        </section>

        <section className="sd-navy-band sd-section">
          <div className="sd-container">
            <Reveal className="max-w-[720px]">
              <p className="sd-label !text-[#7fd6de]">You stay in control</p>
              <h2 className="sd-h2 mt-4 !text-white">Agents that work within your rules</h2>
            </Reveal>
            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {AGENT_GUARDRAILS.map((g, i) => (
                <Reveal key={g.title} delay={i * 80} className="border-t border-white/25 pt-5">
                  <h3 className="text-[20px] font-normal !text-white">{g.title}</h3>
                  <p className="mt-2 text-[15.5px] leading-snug text-white/80">{g.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <HomeCta />
      </main>
    </>
  );
}
