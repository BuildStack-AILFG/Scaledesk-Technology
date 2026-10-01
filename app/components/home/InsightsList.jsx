import Link from "next/link";
import Reveal from "../shell/Reveal";
import { getAllPosts } from "../../../lib/blog/posts";
import { getCategory } from "../../../lib/blog/categories";

/** Latest guides from the blog as three article cards. */
export default function InsightsList() {
  const items = getAllPosts().slice(0, 3);

  return (
    <section className="sd-surface sd-section">
      <div className="sd-container">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[640px]">
            <p className="sd-label">Blog</p>
            <h2 className="sd-h2 mt-4">Ideas for growing smarter</h2>
            <p className="sd-lead mt-5">
              Practical guides on WhatsApp and Instagram automation, CRM, AI agents and building technology that helps
              you sell more.
            </p>
          </div>
          <Link href="/blog" className="sd-btn sd-btn-outline shrink-0">
            Read the blog
          </Link>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 80}>
              <Link href={`/blog/${a.slug}`} className="sd-card-link group flex h-full flex-col p-7">
                <span className="self-start rounded-full bg-sd-tint px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-sd-teal-dark">
                  {getCategory(a.category)?.name}
                </span>
                <span className="mt-5 block flex-1 font-display text-[19px] font-semibold leading-snug tracking-tight text-sd-ink transition-colors group-hover:text-sd-blue">
                  {a.title}
                </span>
                <span className="mt-6 flex items-center justify-between border-t border-sd-line pt-4 text-[14px] text-sd-muted">
                  {a.readTime}
                  <span aria-hidden="true" className="text-sd-faint transition-all group-hover:translate-x-1 group-hover:text-sd-blue">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
