import JsonLd from "./components/seo/JsonLd";
import { buildPageMetadata } from "../lib/seo/metadata";
import { pageGraph } from "../lib/seo/schema";
import { AGENT_SUITE } from "../lib/catalog/agents";
import { INDUSTRIES_NAV, PLATFORMS_NAV } from "../lib/nav";
import HomeHero from "./components/home/HomeHero";
import FeaturedCard from "./components/home/FeaturedCard";
import ServicesSection from "./components/home/ServicesSection";
import AgentsSection from "./components/home/AgentsSection";
import HowWeWork from "./components/home/HowWeWork";
import IndustryTiles from "./components/home/IndustryTiles";
import InsightsList from "./components/home/InsightsList";
import CareersBand from "./components/home/CareersBand";
import HomeCta from "./components/home/HomeCta";

const graph = pageGraph({
  page: {
    title: "ScaleDesk Technology — Products That Grow Your Business",
    description:
      "ScaleDesk builds platforms and AI agents that help businesses grow their sales, with expert engineering services when you need more.",
    path: "/",
  },
});

export const metadata = buildPageMetadata({
  title: "Products That Grow Your Business — AI Agents & Platforms",
  seoTitle: "ScaleDesk Technology | Products That Grow Your Business",
  metaDescription:
    "ScaleDesk Technology is a product company that helps businesses grow their sales with platforms such as LeadForGrow, ForGrow AI agents, and expert engineering services.",
  path: "/",
  primaryKeyword: "AI agents and business growth platforms",
  secondaryKeywords: [
    "ScaleDesk Technology",
    "ScaleDesk",
    "AI agents for business",
    "LeadForGrow",
    "TalkForGrow",
    "EngageForGrow",
    "PeopleForGrow",
    "ForGrow AI",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={graph} />
      <main>
        <section className="sd-wave">
          <HomeHero />
          <div className="pb-12 lg:pb-16">
            <FeaturedCard
              columns={2}
              label="Platforms"
              link={{ label: "Explore all platforms", href: "/products" }}
              promo={{
                title: `Introducing ${AGENT_SUITE.name}`,
                blurb: "AI agents that work alongside your team, from the first call to the final invoice.",
                cta: `Explore ${AGENT_SUITE.name}`,
                href: "/agents",
              }}
              items={PLATFORMS_NAV.map((p) => ({
                name: p.displayName,
                blurb: p.descriptor,
                href: p.href,
                mark: p.mark,
                accent: p.accent,
              }))}
            />
          </div>
        </section>

        <AgentsSection />
        <HowWeWork />
        <ServicesSection />
        <IndustryTiles items={INDUSTRIES_NAV} />
        <InsightsList />
        <CareersBand />
        <HomeCta />
      </main>
    </>
  );
}
