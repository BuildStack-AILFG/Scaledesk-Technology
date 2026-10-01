import JsonLd from "../components/seo/JsonLd";
import Link from "next/link";
import PageHero from "../components/pages/PageHero";
import FeaturedCard from "../components/home/FeaturedCard";
import PlatformsBand from "../components/home/PlatformsBand";
import HomeCta from "../components/home/HomeCta";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { pageGraph, collectionPageSchema } from "../../lib/seo/schema";
import { PLATFORMS_NAV } from "../../lib/nav";

const PAGE_DESCRIPTION =
  "ScaleDesk platforms: LeadForGrow CRM, TalkForGrow messaging, EngageForGrow social and PeopleForGrow HR, one growth suite for leads, conversations, social and people.";

export const metadata = buildPageMetadata({
  title: "Platforms — LeadForGrow, TalkForGrow, EngageForGrow & PeopleForGrow",
  seoTitle: "Platforms: LeadForGrow, TalkForGrow, EngageForGrow | ScaleDesk",
  metaDescription: PAGE_DESCRIPTION,
  path: "/products",
  primaryKeyword: "LeadForGrow",
  secondaryKeywords: ["TalkForGrow", "EngageForGrow", "PeopleForGrow", "ScaleDesk platforms"],
});

export default function PlatformsHubPage() {
  const graph = pageGraph({
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Platforms", path: "/products" },
    ],
    page: { title: "Platforms", description: PAGE_DESCRIPTION, path: "/products" },
  });
  graph["@graph"].push(collectionPageSchema({ title: "Platforms", description: PAGE_DESCRIPTION, path: "/products" }));

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Platforms", href: "/products" },
          ]}
          label="Platforms"
          title="One growth suite for your business"
          lead="Platforms we built to capture leads, talk to customers, engage on social channels and look after your people. Use one on its own, or all four together."
        >
          <Link href="/contact" className="sd-btn sd-btn-primary">
            Talk to our experts
          </Link>
        </PageHero>
        <section className="bg-white pb-16 pt-4 lg:pb-24">
          <FeaturedCard
            columns={2}
            label="Platforms"
            link={{ label: "Talk to our experts", href: "/contact" }}
            promo={{
              title: "The ForGrow suite",
              blurb: "Leads, conversations, social and people, designed to work together.",
              cta: "Talk to our experts",
              href: "/contact",
            }}
            items={PLATFORMS_NAV.map((p) => ({
              name: p.displayName,
              blurb: p.descriptor,
              href: p.href,
              mark: p.mark,
              accent: p.accent,
            }))}
          />
        </section>
        <PlatformsBand />
        <HomeCta />
      </main>
    </>
  );
}
