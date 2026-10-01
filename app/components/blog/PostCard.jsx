import Link from "next/link";
import { getCategory } from "../../../lib/blog/categories";
import { snippet } from "../../../lib/text";

export function formatDate(iso) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

/** Text-forward article card: category, title, summary, date and reading time. */
export default function PostCard({ post }) {
  const cat = getCategory(post.category);
  const accent = cat?.accent ?? "#0a5fbe";
  return (
    <Link href={`/blog/${post.slug}`} className="sd-card-link group flex h-full flex-col p-7">
      <span
        className="inline-flex items-center gap-2 self-start rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em]"
        style={{ background: `${accent}14`, color: accent }}
      >
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} aria-hidden="true" />
        {cat?.name}
      </span>
      <h3 className="mt-5 font-display text-[19px] font-semibold leading-snug tracking-tight text-sd-ink transition-colors group-hover:text-sd-blue">
        {post.title}
      </h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-sd-muted">{snippet(post.description, 130)}</p>
      <p className="mt-6 flex items-center justify-between border-t border-sd-line pt-4 text-[13.5px] text-sd-muted">
        <span>
          {formatDate(post.date)} &middot; {post.readTime}
        </span>
        <span aria-hidden="true" className="text-sd-faint transition-all group-hover:translate-x-1 group-hover:text-sd-blue">
          &rarr;
        </span>
      </p>
    </Link>
  );
}
