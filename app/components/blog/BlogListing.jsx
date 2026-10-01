import Link from "next/link";
import Reveal from "../shell/Reveal";
import PostCard from "./PostCard";
import { CATEGORIES } from "../../../lib/blog/categories";

/** Category chips shared by the blog hub, its pages and category hubs. */
export function CategoryChips({ active }) {
  const chip = "inline-flex rounded-full border px-4 py-2 text-[14.5px] font-medium transition-colors";
  return (
    <ul className="flex flex-wrap justify-center gap-3" aria-label="Blog categories">
      <li>
        <Link href="/blog" className={`${chip} ${!active ? "border-sd-navy bg-sd-navy text-white" : "border-sd-line-strong bg-white text-sd-body hover:border-sd-navy hover:text-sd-navy"}`}>
          All articles
        </Link>
      </li>
      {CATEGORIES.map((c) => (
        <li key={c.slug}>
          <Link
            href={`/blog/category/${c.slug}`}
            className={`${chip} ${active === c.slug ? "border-sd-navy bg-sd-navy text-white" : "border-sd-line-strong bg-white text-sd-body hover:border-sd-navy hover:text-sd-navy"}`}
          >
            {c.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Pagination({ page, pages, base = "/blog" }) {
  if (pages <= 1) return null;
  const href = (n) => (n === 1 ? base : `${base}/page/${n}`);
  const item = "flex h-11 min-w-11 items-center justify-center rounded-xl border px-4 text-[15px] font-medium transition-colors";
  return (
    <nav aria-label="Pagination" className="mt-12 flex flex-wrap items-center justify-center gap-2">
      {page > 1 && (
        <Link href={href(page - 1)} rel="prev" className={`${item} border-sd-line-strong bg-white text-sd-body hover:border-sd-navy hover:text-sd-navy`}>
          &larr; Previous
        </Link>
      )}
      {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
        <Link
          key={n}
          href={href(n)}
          aria-current={n === page ? "page" : undefined}
          className={`${item} ${n === page ? "border-sd-navy bg-sd-navy text-white" : "border-sd-line-strong bg-white text-sd-body hover:border-sd-navy hover:text-sd-navy"}`}
        >
          {n}
        </Link>
      ))}
      {page < pages && (
        <Link href={href(page + 1)} rel="next" className={`${item} border-sd-line-strong bg-white text-sd-body hover:border-sd-navy hover:text-sd-navy`}>
          Next &rarr;
        </Link>
      )}
    </nav>
  );
}

export function PostGrid({ posts }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p, i) => (
        <Reveal key={p.slug} delay={(i % 3) * 70}>
          <PostCard post={p} />
        </Reveal>
      ))}
    </div>
  );
}
