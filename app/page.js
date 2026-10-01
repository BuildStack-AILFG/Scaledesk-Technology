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
import TrustBar from "./components/home/TrustBar";
import StatsBand from "./components/home/StatsBand";
import Testimonials from "./components/home/Testimonials";
import Reveal from "./components/shell/Reveal";

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
    "GramForGrow",
    "PeopleForGrow",
    "ForGrow AI",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={graph} />
      <main>
        <section className="sd-hero-bleed bg-white">
          <HomeHero />
        </section>

        <TrustBar />

        <section className="bg-white sd-section">
          <Reveal className="sd-container mb-12 max-w-[760px] text-center">
            <p className="sd-label">Platforms</p>
            <h2 className="sd-h2 mt-4">One suite for every part of growth</h2>
            <p className="sd-lead mt-5">
              Capture leads, run conversations, grow your audience and manage your people, each product ready on day one.
            </p>
          </Reveal>
          <FeaturedCard
            columns={2}
            label="Our platforms"
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
              logo: p.logo,
              accent: p.accent,
            }))}
          />
        </section>

        <AgentsSection />
        <StatsBand />
        <HowWeWork />
        <ServicesSection />
        <IndustryTiles items={INDUSTRIES_NAV} />
        <Testimonials />
        <InsightsList />
        <CareersBand />
        <HomeCta />
      </main>
    </>
  );
}
