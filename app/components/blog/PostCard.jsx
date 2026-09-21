import Link from "next/link";
import { getCategory } from "../../../lib/blog/categories";
import { snippet } from "../../../lib/text";

export function formatDate(iso) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

/** Text-forward article card: category, title, summary, date and reading time. */
export default function PostCard({ post }) {
  const cat = getCategory(post.category);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-[#dfe8ec] bg-white p-7 transition-shadow hover:shadow-[0_14px_34px_-18px_rgba(6,33,79,0.35)]"
      style={{ borderTop: `4px solid ${cat?.accent ?? "#0a5fbe"}` }}
    >
      <span className="text-[13px] font-medium uppercase tracking-[0.06em]" style={{ color: cat?.accent }}>
        {cat?.name}
      </span>
      <h3 className="mt-3 text-[22px] font-normal leading-snug text-[#111] transition-colors group-hover:text-[#0a5fbe]">
        {post.title}
      </h3>
      <p className="mt-3 flex-1 text-[16px] leading-snug text-[#555]">{snippet(post.description, 130)}</p>
      <p className="mt-5 text-[14px] text-[#777]">
        {formatDate(post.date)} &middot; {post.readTime}
      </p>
    </Link>
  );
}
