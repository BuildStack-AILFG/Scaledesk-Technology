import { buildPageMetadata } from "../../../lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Terms of Service",
  seoTitle: "Terms of Service | ScaleDesk Technology",
  metaDescription:
    "Terms of service for ScaleDesk Technology products and services including LeadForGrow™, PeopleForGrow™, and Product Engineering engagements.",
  path: "/legal/terms-of-service",
  primaryKeyword: "ScaleDesk Terms of Service",
});

export default function Layout({ children }) {
  return children;
}
