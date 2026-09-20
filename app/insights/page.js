import JsonLd from "../components/seo/JsonLd";
import PageHero from "../components/pages/PageHero";
import HubList from "../components/pages/HubList";
import HomeCta from "../components/home/HomeCta";
import { INSIGHTS } from "../data/insights";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";
import { snippet } from "../../lib/text";

const DESCRIPTION =
  "Practical thinking on AI, automation and building technology that helps businesses sell more, from ScaleDesk Technology.";

export const metadata = buildPageMetadata({
  title: "Insights — AI, Automation & Business Growth",
  seoTitle: "Insights on AI, Automation & Growth | ScaleDesk",
  metaDescription: DESCRIPTION,
  path: "/insights",
  primaryKeyword: "AI automation insights",
  secondaryKeywords: ["AI agents for business", "business automation", "technology partner"],
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Insights", href: "/insights" },
];

export default function InsightsPage() {
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: { title: "Insights", description: DESCRIPTION, path: "/insights" },
  });
  graph["@graph"].push(collectionPageSchema({ title: "Insights", description: DESCRIPTION, path: "/insights" }));

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero
          crumbs={crumbs}
          label="Insights"
          title="Ideas for growing smarter"
          lead="Practical thinking on AI, automation and building technology that helps you sell more."
        />
        <HubList
          groups={[
            {
              items: INSIGHTS.map((a) => ({
                name: a.title,
                href: `/insights/${a.slug}`,
                blurb: `${a.category} · ${a.readTime}. ${snippet(a.excerpt, 90)}`,
              })),
            },
          ]}
        />
        <HomeCta />
      </main>
    </>
  );
}
