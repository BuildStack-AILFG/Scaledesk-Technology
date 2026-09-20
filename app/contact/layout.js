import { buildPageMetadata } from "../../lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Contact ScaleDesk Technology",
  seoTitle: "Contact ScaleDesk Technology | Talk to Our Experts",
  metaDescription:
    "Talk to the ScaleDesk team about our platforms (LeadForGrow, TalkForGrow, EngageForGrow, PeopleForGrow), ForGrow AI agents and expert services.",
  path: "/contact",
  primaryKeyword: "Contact ScaleDesk Technology",
  secondaryKeywords: ["talk to ScaleDesk", "AI agents enquiry", "CRM platform enquiry"],
});

export default function Layout({ children }) {
  return children;
}
