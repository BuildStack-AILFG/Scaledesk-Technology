"use client";

import { useEffect, useState } from "react";

/** Thin brand-gradient bar under the header showing how far through the article the reader is. */
export function ReadingProgress({ targetId = "article-body" }) {
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      const done = Math.min(Math.max(-r.top + 120, 0), Math.max(total, 1));
      setP(total > 0 ? done / total : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [targetId]);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-[68px] z-40 h-[3px] bg-transparent">
      <div
        className="h-full origin-left bg-[linear-gradient(90deg,#0a5fbe,#00a3b0)] transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}

/** Sticky "On this page" list that highlights the heading currently being read. */
export function TableOfContents({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((t) => document.getElementById(t.id)).filter(Boolean);
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page">
      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-sd-muted">On this page</p>
      <ul className="mt-4 space-y-1 border-l border-sd-line">
        {items.map((t) => {
          const on = active === t.id;
          return (
            <li key={t.id}>
              <a
                href={`#${t.id}`}
                aria-current={on ? "location" : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-4 text-[14.5px] leading-snug transition-colors ${
                  on ? "border-sd-blue font-medium text-sd-navy" : "border-transparent text-sd-muted hover:text-sd-ink"
                }`}
              >
                {t.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
