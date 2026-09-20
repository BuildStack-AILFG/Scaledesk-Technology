import JsonLd from "../components/seo/JsonLd";
import PageHero from "../components/pages/PageHero";
import HubList from "../components/pages/HubList";
import HomeCta from "../components/home/HomeCta";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";
import { getIndustry } from "../../lib/seo/industries";
import { INDUSTRIES_NAV } from "../../lib/nav";
import { snippet } from "../../lib/text";

const PAGE_DESCRIPTION =
  "Software and AI for the way your industry works: fintech, healthcare, SaaS, e-commerce, enterprise, startups, manufacturing, logistics, education and energy, from ScaleDesk Technology.";

export const metadata = buildPageMetadata({
  title: "Industries We Serve",
  seoTitle: "Industry Software & AI Solutions | ScaleDesk Technology",
  metaDescription: PAGE_DESCRIPTION,
  path: "/industries",
  primaryKeyword: "industry software solutions",
  secondaryKeywords: ["Healthcare Software", "E-commerce Software", "Fintech Development", "Manufacturing Software"],
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Industries", href: "/industries" },
];

export default function IndustriesHubPage() {
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: { title: "Industries", description: PAGE_DESCRIPTION, path: "/industries" },
  });
  graph["@graph"].push(collectionPageSchema({ title: "Industries", description: PAGE_DESCRIPTION, path: "/industries" }));

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero
          crumbs={crumbs}
          label="Industries"
          title="Built for the way your industry works"
          lead="From retail and healthcare to logistics and education, we shape our platforms, agents and services around how each business operates."
        />
        <HubList
          groups={[
            {
              items: INDUSTRIES_NAV.map((i) => ({
                name: i.label,
                href: i.href,
                blurb: snippet(getIndustry(i.slug)?.metaDescription, 120),
              })),
            },
          ]}
        />
        <HomeCta />
      </main>
    </>
  );
}
