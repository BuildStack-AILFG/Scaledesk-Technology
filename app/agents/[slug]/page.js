import { notFound } from "next/navigation";
import ItemPage from "../../components/catalog/ItemPage";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { getAgentPage, getAgentSlugs } from "../../../lib/seo/agents";
import { getAgent, AGENT_SUITE } from "../../../lib/catalog/agents";
import { AGENTS_NAV, INDUSTRIES_NAV, PLATFORMS_NAV } from "../../../lib/nav";

export function generateStaticParams() {
  return getAgentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getAgentPage(slug);
  if (!page) return { title: "AI agent | ScaleDesk Technology" };
  return buildPageMetadata(page);
}

export default async function AgentPage({ params }) {
  const { slug } = await params;
  const agent = getAgent(slug);
  const seo = getAgentPage(slug);
  if (!agent || !seo) notFound();

  const related = [
    ...AGENTS_NAV.filter((a) => a.slug !== slug).slice(0, 3),
    ...PLATFORMS_NAV.filter((p) => p.slug === "leadforgrow-crm"),
  ];
  const industries = agent.industries
    .map((s) => INDUSTRIES_NAV.find((i) => i.slug === s))
    .filter(Boolean);

  return (
    <ItemPage
      item={agent}
      type="agent"
      parent={{ label: "AI agents", href: "/agents" }}
      kindLabel={`${AGENT_SUITE.name} agent`}
      related={related}
      industries={industries}
      seo={{ title: seo.seoTitle, description: seo.metaDescription, path: seo.path }}
    />
  );
}
