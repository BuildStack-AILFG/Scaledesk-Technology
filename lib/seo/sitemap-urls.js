import { absoluteUrl } from "./config";
import { getServiceSlugs } from "./services";
import { getIndustrySlugs } from "./industries";
import { getProductSlugs } from "./products";
import { getAgentSlugs } from "./agents";
import { getGlossarySlugs } from "./glossary";
import { getAllPosts, PAGE_SIZE } from "../blog/posts";
import { CATEGORIES } from "../blog/categories";

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
  { path: "/blog", priority: 0.85, changeFrequency: "daily" },
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
  const posts = getAllPosts();
  const pages = Math.ceil(posts.length / PAGE_SIZE);
  for (let n = 2; n <= pages; n++) {
    entries.push({ path: `/blog/page/${n}`, priority: 0.5, changeFrequency: "weekly" });
  }
  CATEGORIES.forEach((c) => {
    if (posts.some((p) => p.category === c.slug)) {
      entries.push({ path: `/blog/category/${c.slug}`, priority: 0.7, changeFrequency: "weekly" });
    }
  });
  posts.forEach((p) => {
    entries.push({ path: `/blog/${p.slug}`, priority: 0.7, changeFrequency: "monthly", lastModified: new Date(p.updated) });
  });
  getGlossarySlugs().forEach((slug) => {
    entries.push({ path: `/glossary/${slug}`, priority: 0.5, changeFrequency: "monthly" });
  });

  return entries.map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: entry.lastModified ?? now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
