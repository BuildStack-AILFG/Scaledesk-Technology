import { notFound } from "next/navigation";
import BlogHub from "../../../components/blog/BlogHub";
import { getAllPosts, paginate, PAGE_SIZE } from "../../../../lib/blog/posts";
import { buildPageMetadata } from "../../../../lib/seo/metadata";

/** Numbered blog pages 2..N. Page 1 lives at /blog. */
export function generateStaticParams() {
  const pages = Math.ceil(getAllPosts().length / PAGE_SIZE);
  return Array.from({ length: Math.max(0, pages - 1) }, (_, i) => ({ n: String(i + 2) }));
}

export async function generateMetadata({ params }) {
  const { n } = await params;
  return buildPageMetadata({
    title: `ScaleDesk Blog, page ${n}`,
    seoTitle: `ScaleDesk Blog: Guides and Articles, Page ${n}`,
    metaDescription: `Page ${n} of the ScaleDesk blog: more practical guides on WhatsApp and Instagram automation, CRM, AI agents and business technology.`,
    path: `/blog/page/${n}`,
    primaryKeyword: "ScaleDesk blog",
  });
}

export default async function BlogPageN({ params }) {
  const { n } = await params;
  const num = Number(n);
  const data = paginate(getAllPosts(), num);
  if (!Number.isInteger(num) || num < 2 || data.page !== num) notFound();
  return <BlogHub data={data} />;
}
