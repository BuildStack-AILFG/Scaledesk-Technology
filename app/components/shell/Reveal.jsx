"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll reveal (Zoho's `.anim-ele`): fades up 20px once, when the element
 * enters the viewport. The hidden state is CSS (`.sd-reveal`), so there is no
 * layout shift; SiteShell adds a <noscript> fallback so content is never lost
 * without JavaScript. Honours prefers-reduced-motion.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`sd-reveal ${className}`} style={{ "--d": `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
