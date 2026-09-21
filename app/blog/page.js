import BlogHub, { BLOG_DESCRIPTION } from "../components/blog/BlogHub";
import { getAllPosts, paginate } from "../../lib/blog/posts";
import { buildPageMetadata } from "../../lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "ScaleDesk Blog: WhatsApp, Instagram, CRM & AI Agents",
  seoTitle: "ScaleDesk Blog: WhatsApp, Instagram, CRM & AI Agents",
  metaDescription: BLOG_DESCRIPTION,
  path: "/blog",
  primaryKeyword: "WhatsApp automation blog",
  secondaryKeywords: ["Instagram automation", "CRM guide", "AI agents for business", "business automation"],
});

export default function BlogPage() {
  return <BlogHub data={paginate(getAllPosts(), 1)} />;
}
