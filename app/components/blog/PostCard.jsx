import Link from "next/link";
import { Clock } from "lucide-react";
import { getCategory } from "../../../lib/blog/categories";
import { snippet } from "../../../lib/text";
import { Arrow } from "../ui/CardParts";

export function formatDate(iso) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

/**
 * Article card: a generated art header in the category colour (no stock photo,
 * so cards in one category never repeat the same image), then title, summary,
 * date and reading time.
 */
export default function PostCard({ post }) {
  const cat = getCategory(post.category);
  const a = cat?.accent ?? "#0a5fbe";

  return (
    <Link href={`/blog/${post.slug}`} className="sd-fcard group flex h-full flex-col" style={{ "--accent": a }}>
      <span
        className="relative block h-[132px] overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${a} 0%, color-mix(in srgb, ${a} 55%, #061f4a) 100%)` }}
        aria-hidden="true"
      >
        {/* dot grid + rings */}
        <span className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:linear-gradient(90deg,transparent,#000_70%)]" />
        <span className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/20" />
        <span className="absolute -right-2 -top-2 h-28 w-28 rounded-full border border-white/25" />
        <span className="absolute bottom-[-18px] right-5 font-display text-[110px] font-extrabold leading-none text-white/15 transition-transform duration-500 group-hover:-translate-y-1">
          {cat?.name?.charAt(0)}
        </span>
        <span className="absolute left-6 top-5 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-white ring-1 ring-white/25 backdrop-blur">
          {cat?.name}
        </span>
        <span className="absolute bottom-4 left-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-white/85">
          <Clock size={13} />
          {post.readTime}
        </span>
      </span>

      <span className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-[18.5px] font-semibold leading-snug tracking-tight text-sd-ink transition-colors group-hover:text-sd-blue">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-sd-muted">{snippet(post.description, 120)}</p>
        <span className="mt-6 flex items-center justify-between border-t border-sd-line pt-4">
          <span className="text-[13.5px] text-sd-muted">{formatDate(post.date)}</span>
          <Arrow />
        </span>
      </span>
    </Link>
  );
}
