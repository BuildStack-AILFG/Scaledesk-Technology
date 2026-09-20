import { buildPageMetadata } from "../../../lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  seoTitle: "Privacy Policy | ScaleDesk Technology",
  metaDescription:
    "ScaleDesk Technology privacy policy — how we collect, store, and protect your data. LeadForGrow™, PeopleForGrow™, and enterprise services.",
  path: "/legal/privacy-policy",
  primaryKeyword: "ScaleDesk Privacy Policy",
});

export default function Layout({ children }) {
  return children;
}
