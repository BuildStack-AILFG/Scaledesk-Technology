/** @type {import('./types').SiteConfig} */
export const SITE = {
  name: "ScaleDesk Technology",
  legalName: "ScaleDesk Technology",
  shortName: "ScaleDesk",
  alternateNames: ["Scale Desk", "ScaleDesk Tech"],
  url: "https://scaledesktechnology.com",
  locale: "en_US",
  language: "en",
  email: "contact@scaledesktechnology.com",
  slogan: "Products that grow your business, powered by AI and automation",
  description:
    "ScaleDesk Technology is a product company that helps businesses grow their sales with software platforms (LeadForGrow, TalkForGrow, EngageForGrow, PeopleForGrow), AI agents (ForGrow AI) and expert engineering services.",
  defaultOgImage: "/og/default.png",
  linkedIn: "https://www.linkedin.com/company/scaledesk-technology",
  // Only profiles that exist. Add a verified address, phone and social handles here when confirmed.
  sameAs: ["https://www.linkedin.com/company/scaledesk-technology"],
  areaServed: ["Worldwide", "India", "United States", "Europe", "APAC"],
  knowsAbout: [
    "AI Automation for Sales",
    "CRM Software",
    "Business Messaging Platforms",
    "Social Media Engagement Software",
    "AI Agents for Business",
    "Product Engineering",
    "AI Solutions",
    "Enterprise Software Development",
    "Custom Software Development",
    "AI Automation",
    "Business Automation",
    "SaaS Development",
    "MVP Development",
    "CRM Development",
    "HRMS Development",
    "Cloud Native Development",
    "DevOps",
    "Digital Transformation",
    "Technology Consulting",
  ],
  products: [
    { name: "LeadForGrow", slug: "leadforgrow-crm", trademark: "LeadForGrow™" },
    { name: "TalkForGrow", slug: "talkforgrow", trademark: "TalkForGrow™" },
    { name: "EngageForGrow", slug: "engageforgrow", trademark: "EngageForGrow™" },
    { name: "PeopleForGrow", slug: "peopleforgrow", trademark: "PeopleForGrow™" },
  ],
  founder: {
    name: "Saurabh Singh",
    slug: "saurabh-singh",
    title: "Co-Founder & Chief Technology Officer",
    jobTitle: "Chief Technology Officer",
    role: "Co-Founder",
    email: "saurabh@scaledesktechnology.com",
    linkedIn: "https://www.linkedin.com/in/saurabh-singh-scaledesk",
    sameAs: ["https://www.linkedin.com/in/saurabh-singh-scaledesk"],
    expertise: [
      "Product Engineering",
      "Enterprise Software Architecture",
      "AI Solutions",
      "Cloud Native Systems",
      "Digital Transformation",
      "Technology Leadership",
    ],
  },
};

export const KEYWORDS = {
  brand: [
    "ScaleDesk Technology",
    "ScaleDesk",
    "Scale Desk",
    "scaledesktechnology.com",
  ],
  core: [
    "Product Engineering Company",
    "Product Engineering Services",
    "Product Engineering India",
    "Software Development Company",
    "Custom Software Development Company",
    "Enterprise Software Development Company",
    "Enterprise Software Company",
    "IT Services Company",
    "IT Consulting Company",
    "Technology Consulting Company",
    "AI Development Company",
    "Artificial Intelligence Company",
    "AI Solutions Company",
    "AI Automation Company",
    "Business Automation Company",
  ],
  products: [
    "LeadForGrow",
    "LeadForGrow CRM",
    "TalkForGrow",
    "EngageForGrow",
    "PeopleForGrow",
    "ForGrow AI",
  ],
  founder: [
    "Saurabh Singh",
    "Saurabh Singh ScaleDesk",
    "Founder ScaleDesk",
    "Co-Founder ScaleDesk",
    "CTO ScaleDesk",
    "Chief Technology Officer ScaleDesk",
  ],
};

export function absoluteUrl(path = "") {
  const base = SITE.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized === "/" ? "" : normalized}`;
}

export function joinKeywords(...groups) {
  return [...new Set(groups.flat())].join(", ");
}
