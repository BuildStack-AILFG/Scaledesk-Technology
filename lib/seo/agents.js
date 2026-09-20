import { createSeoPage, DEFAULT_INTERNAL_LINKS } from "./page-builder";
import { AGENTS, AGENT_SUITE } from "../catalog/agents";
import { IMG } from "../images";

/** SEO page data for the ForGrow AI agents (content: lib/catalog/agents.js). */
export const AGENT_PAGES = AGENTS.map((a) =>
  createSeoPage({
    slug: a.slug,
    category: "agent",
    searchIntent: "commercial",
    title: `${a.name} by ${AGENT_SUITE.name}`,
    seoTitle: `${a.name} | ${AGENT_SUITE.name} by ScaleDesk Technology`,
    metaDescription: `${a.name} by ${AGENT_SUITE.name} from ScaleDesk Technology. ${a.descriptor}`,
    primaryKeyword: a.name,
    secondaryKeywords: [`AI ${a.name.toLowerCase()}`, AGENT_SUITE.name, "AI agents for business"],
    longTailKeywords: [`${a.name.toLowerCase()} for small business`, `${a.name} by ScaleDesk`],
    h1: a.heroTitle,
    h2s: a.features.map((f) => f.title),
    intro: a.heroLead,
    ogImage: IMG[a.photo]?.src,
    faqs: a.faqs.map((f) => ({ question: f.question, answer: f.answer })),
    cta: { label: "Talk to us", href: "/contact" },
    internalLinks: DEFAULT_INTERNAL_LINKS,
    relatedSlugs: AGENTS.filter((x) => x.slug !== a.slug).map((x) => x.slug),
  })
);

export const getAgentPage = (slug) => AGENT_PAGES.find((a) => a.slug === slug) ?? null;
export const getAgentSlugs = () => AGENT_PAGES.map((a) => a.slug);
