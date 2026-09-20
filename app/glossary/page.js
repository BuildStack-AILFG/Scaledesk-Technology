import JsonLd from "../components/seo/JsonLd";
import PageHero from "../components/pages/PageHero";
import HubList from "../components/pages/HubList";
import HomeCta from "../components/home/HomeCta";
import { GLOSSARY_TERMS } from "../../lib/seo/glossary";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";
import { snippet } from "../../lib/text";

const PAGE_DESCRIPTION =
  "Plain-English definitions of the AI, automation, CRM and software terms behind business growth, from ScaleDesk Technology.";

export const metadata = buildPageMetadata({
  title: "Glossary — AI, Automation & Software Terms Explained",
  seoTitle: "AI, Automation & Software Glossary | ScaleDesk Technology",
  metaDescription: PAGE_DESCRIPTION,
  path: "/glossary",
  primaryKeyword: "AI automation glossary",
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Glossary", href: "/glossary" },
];

export default function GlossaryHubPage() {
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: { title: "Glossary", description: PAGE_DESCRIPTION, path: "/glossary" },
  });
  graph["@graph"].push(collectionPageSchema({ title: "Glossary", description: PAGE_DESCRIPTION, path: "/glossary" }));

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero
          crumbs={crumbs}
          label="Glossary"
          title="Technology terms, explained simply"
          lead="Plain-English definitions of the AI, automation, CRM and software terms behind business growth."
        />
        <HubList
          groups={[
            {
              items: GLOSSARY_TERMS.map((t) => ({
                name: t.term,
                href: `/glossary/${t.slug}`,
                blurb: snippet(t.definition, 120),
              })),
            },
          ]}
        />
        <HomeCta />
      </main>
    </>
  );
}
