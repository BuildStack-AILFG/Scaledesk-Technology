"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Sticky sub-navigation for product pages (Zoho pattern): anchor links that
 * highlight the section in view, plus a persistent call to action.
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
    <div className="sticky top-[72px] z-30 border-b border-[#e6e8ee] bg-white/95 backdrop-blur">
      <div className="sd-container flex items-center justify-between gap-6">
        <nav className="-mb-px flex gap-7 overflow-x-auto" aria-label="On this page">
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={`whitespace-nowrap border-b-2 py-4 text-[16px] transition-colors ${
                active === i.id ? "border-[#0a5fbe] text-[#0a5fbe]" : "border-transparent text-[#333] hover:text-[#0a5fbe]"
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
