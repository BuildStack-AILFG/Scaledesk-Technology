import { absoluteUrl } from "./config";
import { getServiceSlugs } from "./services";
import { getIndustrySlugs } from "./industries";
import { getProductSlugs } from "./products";
import { getAgentSlugs } from "./agents";
import { getGlossarySlugs } from "./glossary";
import { getInsightSlugs } from "../../app/data/insights";

/**
 * Every indexable URL on the site. Retired pages are NOT listed here; they
 * 301-redirect (see next.config.mjs). Applicant, admin and employee routes are
 * excluded on purpose (see app/robots.js).
 */
const STATIC_PAGES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/products", priority: 0.95, changeFrequency: "weekly" },
  { path: "/agents", priority: 0.95, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/industries", priority: 0.85, changeFrequency: "weekly" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  { path: "/glossary", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
  { path: "/careers/opportunities", priority: 0.55, changeFrequency: "weekly" },
  { path: "/legal/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/security", priority: 0.3, changeFrequency: "yearly" },
];

export function getAllSitemapEntries() {
  const now = new Date();
  const entries = [...STATIC_PAGES];

  getProductSlugs().forEach((slug) => {
    entries.push({ path: `/products/${slug}`, priority: 0.9, changeFrequency: "weekly" });
  });
  getAgentSlugs().forEach((slug) => {
    entries.push({ path: `/agents/${slug}`, priority: 0.9, changeFrequency: "weekly" });
  });
  getServiceSlugs().forEach((slug) => {
    entries.push({ path: `/services/${slug}`, priority: 0.7, changeFrequency: "monthly" });
  });
  getIndustrySlugs().forEach((slug) => {
    entries.push({ path: `/industries/${slug}`, priority: 0.7, changeFrequency: "monthly" });
  });
  getInsightSlugs().forEach((slug) => {
    entries.push({ path: `/insights/${slug}`, priority: 0.6, changeFrequency: "monthly" });
  });
  getGlossarySlugs().forEach((slug) => {
    entries.push({ path: `/glossary/${slug}`, priority: 0.5, changeFrequency: "monthly" });
  });

  return entries.map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
