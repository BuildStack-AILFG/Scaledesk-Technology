import { SITE, absoluteUrl } from "./config";

function orgBase() {
  return {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: SITE.alternateNames,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE.url}/#logo`,
      url: absoluteUrl("/brand/scaledesk-logo.png"),
      width: 728,
      height: 592,
      caption: SITE.name,
    },
    image: absoluteUrl(SITE.defaultOgImage),
    description: SITE.description,
    slogan: SITE.slogan,
    email: SITE.email,
    sameAs: SITE.sameAs,
    knowsAbout: SITE.knowsAbout,
    areaServed: SITE.areaServed,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        availableLanguage: ["English"],
      },
    ],
  };
}

export function organizationSchema() {
  return orgBase();
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: SITE.language,
  };
}

export function webPageSchema({ title, description, path, datePublished, dateModified }) {
  const url = absoluteUrl(path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: SITE.language,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({ name, description, path, areaServed = "Worldwide" }) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed,
    url: absoluteUrl(path),
    serviceType: name,
    brand: { "@id": `${SITE.url}/#organization` },
  };
}

export function softwareApplicationSchema({
  name,
  description,
  path,
  applicationCategory = "BusinessApplication",
  operatingSystem = "Web",
  offers,
}) {
  return {
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl(path)}#software`,
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory,
    operatingSystem,
    creator: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    ...(offers && {
      offers: {
        "@type": "Offer",
        ...offers,
      },
    }),
    // No aggregateRating on purpose: it must reflect real, visible reviews.
    // Add one here only when genuine ratings exist and are shown on the page.
  };
}

export function productSchema({ name, description, path, brand = SITE.name }) {
  return {
    "@type": "Product",
    "@id": `${absoluteUrl(path)}#product`,
    name,
    description,
    url: absoluteUrl(path),
    brand: { "@type": "Brand", name: brand },
    manufacturer: { "@id": `${SITE.url}/#organization` },
  };
}

export function faqSchema(faqs) {
  if (!faqs?.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  image,
  authorName = SITE.name,
  section = "Technology",
}) {
  const url = absoluteUrl(path);
  return {
    "@type": ["Article", "BlogPosting"],
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: absoluteUrl("/about"),
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/brand/scaledesk-logo.png"),
      },
    },
    image: image || absoluteUrl(SITE.defaultOgImage),
    articleSection: section,
    inLanguage: SITE.language,
    isPartOf: { "@id": `${SITE.url}/#website` },
  };
}

export function collectionPageSchema({ title, description, path }) {
  return {
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(path)}#collection`,
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${SITE.url}/#website` },
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

/** Combine multiple schemas into @graph */
export function buildGraph(schemas) {
  const filtered = schemas.filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@graph": filtered,
  };
}

/** Default site-wide graph for root layout */
export function siteGraph() {
  return buildGraph([
    organizationSchema(),
    websiteSchema(),
  ]);
}

/** Build page-specific graph */
/** Page-specific nodes only; the organization and website nodes come from siteGraph() in the root layout. */
export function pageGraph({ breadcrumbs, page, service, product, software, faqs, article }) {
  const schemas = [
    page && webPageSchema(page),
    breadcrumbs?.length && breadcrumbSchema(breadcrumbs),
    service && serviceSchema(service),
    product && productSchema(product),
    software && softwareApplicationSchema(software),
    faqs?.length && faqSchema(faqs),
    article && articleSchema(article),
  ];
  return buildGraph(schemas);
}
