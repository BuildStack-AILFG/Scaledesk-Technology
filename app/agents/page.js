import JsonLd from "../components/seo/JsonLd";
import Link from "next/link";
import PageHero from "../components/pages/PageHero";
import GuardrailsBand from "../components/catalog/GuardrailsBand";
import FeaturedCard from "../components/home/FeaturedCard";
import HomeCta from "../components/home/HomeCta";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";
import { AGENT_SUITE } from "../../lib/catalog/agents";
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
        <PageHero
          crumbs={[
            { name: "Home", href: "/" },
            { name: "AI agents", href: "/agents" },
          ]}
          label={AGENT_SUITE.name}
          title="AI agents for every part of your business"
          lead={AGENT_SUITE.blurb}
        >
          <Link href="/contact" className="sd-btn sd-btn-primary">
            Talk to our experts
          </Link>
        </PageHero>
        <section className="bg-white pb-16 pt-4 lg:pb-24">
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
        </section>

        <GuardrailsBand />

        <HomeCta />
      </main>
    </>
  );
}
