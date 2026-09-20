import { SITE, absoluteUrl, joinKeywords } from "./config";
import { snippet } from "../text";

const KEYWORDS_FALLBACK = [
  "Product Engineering",
  "AI Solutions",
  "Enterprise Software",
  "Software Development",
  "IT Services",
  "Technology Consulting",
];

/**
 * Build production-ready Next.js Metadata object.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  ogImage,
  ogType = "website",
  noIndex = false,
  noFollow = false,
  publishedTime,
  modifiedTime,
  authors,
  section,
  alternates = {},
}) {
  const canonical = absoluteUrl(path);
  const image = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : absoluteUrl(ogImage)
    : absoluteUrl(SITE.defaultOgImage);

  // Append the brand only when it is not already present and the title stays a sensible length.
  const withBrand = `${title} | ${SITE.name}`;
  const fullTitle = /scaledesk/i.test(title) || withBrand.length > 68 ? title : withBrand;
  // Search results show roughly 160 characters of description.
  description = snippet(description, 158);

  const robots = {
    index: !noIndex,
    follow: !noFollow,
    googleBot: {
      index: !noIndex,
      follow: !noFollow,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };

  return {
    title: fullTitle,
    description,
    keywords: joinKeywords(keywords, KEYWORDS_FALLBACK),
    authors: authors?.map((a) =>
      typeof a === "string" ? { name: a, url: absoluteUrl("/about") } : a
    ) ?? [{ name: SITE.founder.name, url: absoluteUrl("/about") }],
    creator: SITE.founder.name,
    publisher: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical,
      ...alternates,
    },
    openGraph: {
      type: ogType,
      locale: SITE.locale,
      url: canonical,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          ...(ogImage ? {} : { width: 1200, height: 630 }),
          alt: `${SITE.name} — ${title}`,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots,
    category: "technology",
  };
}

export function buildPageMetadata(page) {
  return buildMetadata({
    title: page.seoTitle || page.title,
    description: page.metaDescription || page.description,
    path: page.path,
    keywords: [
      page.primaryKeyword,
      ...(page.secondaryKeywords || []),
      ...(page.longTailKeywords || []),
      ...(page.lsiKeywords || []),
      ...(page.semanticKeywords || []),
    ].filter(Boolean),
    ogImage: page.ogImage,
    ogType: page.ogType || "website",
    noIndex: page.noIndex,
    noFollow: page.noFollow,
    publishedTime: page.publishedTime,
    modifiedTime: page.modifiedTime,
    authors: page.authors,
    section: page.section,
  });
}
