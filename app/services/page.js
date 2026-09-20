import JsonLd from "../components/seo/JsonLd";
import PageHero from "../components/pages/PageHero";
import HubList from "../components/pages/HubList";
import HomeCta from "../components/home/HomeCta";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";
import { getService } from "../../lib/seo/services";
import { SERVICES_NAV } from "../../lib/nav";
import { snippet } from "../../lib/text";

const PAGE_DESCRIPTION =
  "Expert services from ScaleDesk Technology to go with our platforms: AI and automation, custom software, CRM and HRMS development, cloud, data and technology consulting.";

export const metadata = buildPageMetadata({
  title: "Expert Services — AI, Automation & Software Engineering",
  seoTitle: "AI, Automation & Software Services | ScaleDesk Technology",
  metaDescription: PAGE_DESCRIPTION,
  path: "/services",
  primaryKeyword: "AI and automation services",
  secondaryKeywords: ["Custom Software Development", "CRM Development", "AI Development Company", "Technology Consulting"],
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

export default function ServicesHubPage() {
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: { title: "Services", description: PAGE_DESCRIPTION, path: "/services" },
  });
  graph["@graph"].push(collectionPageSchema({ title: "Services", description: PAGE_DESCRIPTION, path: "/services" }));

  const groups = SERVICES_NAV.map((g) => ({
    title: g.title,
    items: g.items.map((it) => {
      const slug = it.href.split("/").pop();
      return { name: it.label, href: it.href, blurb: snippet(getService(slug)?.metaDescription, 120) };
    }),
  }));

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero
          crumbs={crumbs}
          label="Expert services"
          title="Expert services to help you sell more"
          lead="Alongside our own platforms, our team plans, builds and runs custom technology for your business, from AI and automation to software, cloud and data."
        />
        <HubList groups={groups} />
        <HomeCta />
      </main>
    </>
  );
}
