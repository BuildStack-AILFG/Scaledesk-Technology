import { createSeoPage, DEFAULT_INTERNAL_LINKS } from "./page-builder";
import { PLATFORMS } from "../catalog/platforms";
import { IMG } from "../images";

/**
 * SEO page data for the ScaleDesk platforms. Content comes from
 * lib/catalog/platforms.js so names and copy are edited in one place.
 */
export const PRODUCTS = PLATFORMS.map((p) =>
  createSeoPage({
    slug: p.slug,
    category: "product",
    searchIntent: "commercial",
    title: `${p.name} ${p.kind} by ScaleDesk Technology`,
    seoTitle: `${p.name} ${p.kind} | ScaleDesk Technology`,
    metaDescription: `${p.name} ${p.kind} by ScaleDesk Technology. ${p.descriptor}`,
    primaryKeyword: `${p.name} ${p.kind}`,
    secondaryKeywords: [p.name, `${p.kind} platform`, "ScaleDesk Technology"],
    longTailKeywords: [`${p.name} by ScaleDesk`, `${p.kind.toLowerCase()} software for growing businesses`],
    h1: p.heroTitle,
    h2s: p.features.map((f) => f.title),
    intro: p.heroLead,
    ogImage: IMG[p.photo]?.src,
    faqs: p.faqs.map((f) => ({ question: f.question, answer: f.answer })),
    cta: { label: "Talk to us", href: "/contact" },
    internalLinks: DEFAULT_INTERNAL_LINKS,
    relatedSlugs: PLATFORMS.filter((x) => x.slug !== p.slug).map((x) => x.slug),
  })
);

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

export function getProductSlugs() {
  return PRODUCTS.map((p) => p.slug);
}
