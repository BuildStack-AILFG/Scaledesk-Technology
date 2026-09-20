import JsonLd from "../components/seo/JsonLd";
import Reveal from "../components/shell/Reveal";
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
        <section className="sd-wave">
          <div className="mx-auto max-w-[1000px] px-6 pb-12 pt-14 text-center lg:pb-14 lg:pt-20">
            <Reveal>
              <h1 className="sd-h1">One growth suite for your business</h1>
              <span className="sd-dash" aria-hidden="true" />
            </Reveal>
            <Reveal delay={100}>
              <p className="sd-lead mx-auto mt-8 max-w-[780px]">
                Platforms we built to capture leads, talk to customers, engage on social channels and look after your
                people. Use one on its own, or all four together.
              </p>
            </Reveal>
          </div>
          <div className="pb-12 lg:pb-16">
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
          </div>
        </section>
        <PlatformsBand />
        <HomeCta />
      </main>
    </>
  );
}
