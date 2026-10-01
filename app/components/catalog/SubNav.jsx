"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Sticky sub-navigation for product pages: anchor links that highlight the
 * section in view, plus a persistent call to action.
 */
export default function SubNav({ items, ctaLabel, ctaHref }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean);
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <div className="sticky top-[68px] z-30 border-y border-sd-line bg-white/85 backdrop-blur-xl">
      <div className="sd-container flex h-[60px] items-center justify-between gap-6">
        <nav className="flex gap-1 overflow-x-auto [scrollbar-width:none]" aria-label="On this page">
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              aria-current={active === i.id ? "location" : undefined}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-[14.5px] font-medium transition-colors ${
                active === i.id ? "bg-sd-navy text-white" : "text-sd-body hover:bg-sd-surface hover:text-sd-navy"
              }`}
            >
              {i.label}
            </a>
          ))}
        </nav>
        <Link href={ctaHref} className="sd-btn sd-btn-primary sd-btn-sm hidden shrink-0 sm:inline-flex">
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
