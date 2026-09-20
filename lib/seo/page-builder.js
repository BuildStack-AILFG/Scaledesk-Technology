/** Shared SEO page content builder for services, industries, solutions */

export function createSeoPage({
  slug,
  category,
  title,
  seoTitle,
  metaDescription,
  primaryKeyword,
  secondaryKeywords = [],
  longTailKeywords = [],
  lsiKeywords = [],
  semanticKeywords = [],
  searchIntent = "commercial",
  h1,
  h2s = [],
  h3s = [],
  intro,
  sections = [],
  faqs = [],
  cta = { label: "Talk to Our Engineers", href: "/contact" },
  internalLinks = [],
  externalLinks = [],
  ogImage,
  relatedSlugs = [],
}) {
  const basePath =
    category === "service"
      ? `/services/${slug}`
      : category === "industry"
        ? `/industries/${slug}`
        : category === "solution"
          ? `/solutions/${slug}`
          : category === "product"
            ? `/products/${slug}`
            : category === "agent"
              ? `/agents/${slug}`
              : `/${slug}`;

  return {
    slug,
    category,
    path: basePath,
    title,
    seoTitle: seoTitle || title,
    metaDescription,
    description: metaDescription,
    primaryKeyword,
    secondaryKeywords,
    longTailKeywords,
    lsiKeywords,
    semanticKeywords,
    searchIntent,
    h1: h1 || title,
    h2s,
    h3s,
    intro,
    sections,
    faqs,
    cta,
    internalLinks,
    externalLinks,
    ogImage,
    relatedSlugs,
  };
}

export const DEFAULT_INTERNAL_LINKS = [
  { label: "Product Engineering", href: "/services/product-engineering" },
  { label: "AI Development", href: "/services/ai-development" },
  { label: "Enterprise Software", href: "/services/enterprise-software-development" },
  { label: "LeadForGrow™ CRM", href: "/products/leadforgrow-crm" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "About ScaleDesk", href: "/about" },
  { label: "Contact", href: "/contact" },
];
