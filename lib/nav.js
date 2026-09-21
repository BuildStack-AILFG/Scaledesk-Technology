/**
 * Single source of truth for the corporate header, mobile nav and footer.
 * Everything is derived from the catalog data (platforms, agents) or the
 * existing lib/seo getters, so nav links can never point at a missing page.
 *
 * getNavData() returns plain JSON for client components; client components
 * must NOT import this module (it would bundle the SEO content data).
 */
import { PLATFORMS } from "./catalog/platforms";
import { AGENTS, AGENT_SUITE } from "./catalog/agents";
import { getIndustry, getIndustrySlugs } from "./seo/industries";
import { getServiceSlugs } from "./seo/services";
import { CATEGORIES } from "./blog/categories";
import { getAllPosts } from "./blog/posts";
import { SITE } from "./seo/config";

/* ── Platforms and agents ──────────────────────────────────────────────── */

export const PLATFORMS_NAV = PLATFORMS.map((p) => ({
  ...p,
  displayName: `${p.name} ${p.kind}`,
  href: `/products/${p.slug}`,
  external: false,
}));

export const AGENTS_NAV = AGENTS.map((a) => ({
  ...a,
  displayName: a.name,
  href: `/agents/${a.slug}`,
  external: false,
}));

/* ── Services (technology-partner categories) ──────────────────────────── */

const existing = (slugs) => new Set(slugs);
const serviceSlugs = existing(getServiceSlugs());

/** Six service categories shown on the homepage; each links to a real service page. */
export const SERVICE_CATEGORIES = [
  { mark: "automate", name: "AI and automation", blurb: "AI agents, workflows and automation that take routine work off your team.", slug: "ai-automation", accent: "#0A5FBE" },
  { mark: "crm", name: "Sales and marketing technology", blurb: "CRM, lead capture and campaign systems built around how you sell.", slug: "crm-development", accent: "#00A3B0" },
  { mark: "talk", name: "Customer experience", blurb: "Messaging, social and voice channels that keep customers engaged.", slug: "business-automation", accent: "#1F9D55" },
  { mark: "data", name: "Data and analytics", blurb: "Dashboards and insight, so you know exactly what is driving growth.", slug: "data-pipelines", accent: "#E58A00" },
  { mark: "code", name: "Custom software", blurb: "Web, mobile and SaaS products built around your workflow.", slug: "custom-software-development", accent: "#7C4DFF" },
  { mark: "cloud", name: "Cloud and integrations", blurb: "Modern infrastructure and connected systems that scale with you.", slug: "cloud-native-development", accent: "#C13584" },
]
  .filter((s) => serviceSlugs.has(s.slug))
  .map((s) => ({ ...s, href: `/services/${s.slug}` }));

const SERVICE_GROUPS = [
  {
    title: "AI and automation",
    items: [
      ["ai-development", "AI Development"],
      ["ai-agents", "AI Agents"],
      ["ai-automation", "AI Automation"],
      ["business-automation", "Business Automation"],
      ["data-pipelines", "Data Pipelines"],
    ],
  },
  {
    title: "Software development",
    items: [
      ["custom-software-development", "Custom Software"],
      ["enterprise-software-development", "Enterprise Software"],
      ["saas-development", "SaaS Development"],
      ["mvp-development", "MVP Development"],
      ["web-application-development", "Web Applications"],
      ["mobile-app-development", "Mobile Apps"],
      ["product-engineering", "Product Engineering"],
      ["software-engineering", "Software Engineering"],
    ],
  },
  {
    title: "Business systems",
    items: [
      ["crm-development", "CRM Development"],
      ["hrms-development", "HRMS Development"],
      ["api-development", "API Development"],
      ["backend-engineering", "Backend Engineering"],
      ["frontend-engineering", "Frontend Engineering"],
    ],
  },
  {
    title: "Cloud and DevOps",
    items: [
      ["cloud-native-development", "Cloud-Native Development"],
      ["cloud-infrastructure", "Cloud Infrastructure"],
      ["devops", "DevOps"],
      ["system-modernization", "System Modernization"],
    ],
  },
  {
    title: "Consulting and design",
    items: [
      ["technology-consulting", "Technology Consulting"],
      ["digital-transformation", "Digital Transformation"],
      ["ui-ux-design", "UI/UX Design"],
    ],
  },
];

export const SERVICES_NAV = SERVICE_GROUPS.map((g) => ({
  title: g.title,
  items: g.items
    .filter(([slug]) => serviceSlugs.has(slug))
    .map(([slug, label]) => ({ label, href: `/services/${slug}` })),
})).filter((g) => g.items.length);

/** Short list used in the footer. */
export const FEATURED_SERVICES = SERVICE_CATEGORIES.map((s) => ({ label: s.name, blurb: s.blurb, href: s.href }));

/* ── Industries ────────────────────────────────────────────────────────── */

const INDUSTRY_LABELS = {
  fintech: "Fintech",
  healthcare: "Healthcare",
  saas: "SaaS",
  ecommerce: "E-commerce",
  enterprise: "Enterprise",
  startup: "Startups",
  manufacturing: "Manufacturing",
  logistics: "Logistics",
  education: "Education",
  energy: "Energy and utilities",
};

export const INDUSTRIES_NAV = getIndustrySlugs().map((slug) => ({
  label: INDUSTRY_LABELS[slug] || getIndustry(slug)?.title || slug,
  href: `/industries/${slug}`,
  slug,
}));

/* ── Company, resources, legal, social, calls to action ────────────────── */

export const RESOURCES_NAV = [
  { label: "Blog", href: "/blog", blurb: "Guides on WhatsApp, Instagram, CRM and AI agents." },
  { label: "Glossary", href: "/glossary", blurb: "Plain-English definitions of key terms." },
];

export const COMPANY_NAV = [
  { label: "About us", href: "/about", blurb: "Our mission and the people behind ScaleDesk." },
  { label: "Careers", href: "/careers", blurb: "Join the team building the future of business growth." },
  { label: "Contact us", href: "/contact", blurb: "Talk to our team." },
];

export const LEGAL_NAV = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms-of-service" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Security", href: "/legal/security" },
];

/** Social profiles, taken from SITE.sameAs so there is one place to edit. */
export const SOCIAL_LINKS = SITE.sameAs
  .map((href) => {
    if (href.includes("linkedin.com")) return { id: "linkedin", label: "LinkedIn", href };
    if (href.includes("twitter.com") || href.includes("x.com")) return { id: "x", label: "X", href };
    if (href.includes("github.com")) return { id: "github", label: "GitHub", href };
    return null;
  })
  .filter(Boolean);

/** Primary call-to-action targets, kept in one place. */
export const CTA = {
  primary: { label: "Talk to our experts", href: "/contact", external: false },
  signIn: { label: "Sign in", href: "https://leadforgrow.com", external: true },
};

/* ── Tabbed mega-menu (tabs → optional rail → item grid → promos) ──────── */

const platformItem = (p) => ({
  name: p.displayName, blurb: p.tagline, href: p.href, external: false, accent: p.accent, mark: p.mark,
});
const agentItem = (a) => ({
  name: a.displayName, blurb: a.tagline, href: a.href, external: false, accent: a.accent, mark: a.mark,
});

function buildMenus() {
  return {
    services: {
      cta: { label: "All services", href: "/services" },
      rail: SERVICES_NAV.map((g) => ({
        id: g.title,
        label: g.title,
        items: g.items.map((it) => ({ name: it.label, href: it.href })),
      })),
      launch: {
        tag: "Technology partner",
        title: "Your growth, built with you",
        blurb: "We work alongside your team to design, build and run the technology behind your sales.",
        href: "/contact",
        cta: "Talk to our experts",
      },
    },
    platforms: {
      cta: { label: "All platforms", href: "/products" },
      rail: [{ id: "platforms", label: "Platforms", items: PLATFORMS_NAV.map(platformItem) }],
      launch: {
        tag: "The suite",
        title: "One growth suite",
        blurb: "Leads, conversations, social and people, working together.",
        href: "/products",
        cta: "Explore the platforms",
      },
    },
    agents: {
      cta: { label: "All AI agents", href: "/agents" },
      rail: [{ id: "agents", label: AGENT_SUITE.name, items: AGENTS_NAV.map(agentItem) }],
      launch: {
        tag: AGENT_SUITE.name,
        title: "AI agents that work alongside your team",
        blurb: AGENT_SUITE.blurb,
        href: "/agents",
        cta: "Meet the agents",
      },
    },
    industries: {
      cta: { label: "All industries", href: "/industries" },
      rail: [{ id: "industries", label: "Industries", items: INDUSTRIES_NAV.map((i) => ({ name: i.label, href: i.href })) }],
    },
    insights: {
      cta: { label: "All articles", href: "/blog" },
      rail: [
        {
          id: "topics",
          label: "Blog topics",
          items: CATEGORIES.map((c) => ({ name: c.name, blurb: c.description.split(". ")[0].replace(/.$/, ""), href: `/blog/category/${c.slug}` })),
        },
        { id: "more", label: "More", items: [{ name: "Glossary", blurb: "Plain-English definitions of key terms.", href: "/glossary" }] },
      ],
    },
    company: {
      cta: { label: "About ScaleDesk", href: "/about" },
      rail: [{ id: "company", label: "Company", items: COMPANY_NAV.map((c) => ({ name: c.label, blurb: c.blurb, href: c.href })) }],
    },
  };
}

/** Flat, serialisable index behind the header search. */
function buildSearchIndex() {
  const idx = [];
  for (const p of PLATFORMS_NAV) idx.push({ label: p.displayName, group: "Platform", href: p.href, hint: p.tagline });
  for (const a of AGENTS_NAV) idx.push({ label: a.displayName, group: "AI agent", href: a.href, hint: a.tagline });
  for (const g of SERVICES_NAV) for (const it of g.items) idx.push({ label: it.label, group: "Service", href: it.href });
  for (const i of INDUSTRIES_NAV) idx.push({ label: i.label, group: "Industry", href: i.href });
  for (const r of RESOURCES_NAV) idx.push({ label: r.label, group: "Resources", href: r.href, hint: r.blurb });
  for (const c of CATEGORIES) idx.push({ label: c.name, group: "Blog topic", href: `/blog/category/${c.slug}` });
  for (const p of getAllPosts()) idx.push({ label: p.title, group: "Blog", href: `/blog/${p.slug}` });
  for (const c of COMPANY_NAV) idx.push({ label: c.label, group: "Company", href: c.href });
  return idx;
}

export function getNavData() {
  return {
    platforms: PLATFORMS_NAV.map(({ slug, displayName, name, kind, href, accent, mark, tagline }) => ({
      slug, displayName, name, kind, href, accent, mark, tagline,
    })),
    agents: AGENTS_NAV.map(({ slug, displayName, href, accent, mark, tagline }) => ({
      slug, displayName, href, accent, mark, tagline,
    })),
    industries: INDUSTRIES_NAV,
    services: SERVICES_NAV,
    resources: RESOURCES_NAV,
    company: COMPANY_NAV,
    legal: LEGAL_NAV,
    cta: CTA,
    featuredServices: FEATURED_SERVICES,
    social: SOCIAL_LINKS,
    menus: buildMenus(),
    search: buildSearchIndex(),
  };
}
