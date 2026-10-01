import Link from "next/link";
import Reveal from "../shell/Reveal";
import { getAllPosts } from "../../../lib/blog/posts";
import PostCard from "../blog/PostCard";

/** Latest guides from the blog, as the same article cards the blog uses. */
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
              <PostCard post={a} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
