"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { fill, tone } from "../../../lib/images";

/**
 * Tabbed feature section: feature titles on the left, the active feature's copy
 * and ONE photo on the right. Only the active photo is rendered, which keeps
 * pages light.
 */
export default function FeatureTabs({ features, accent = "#0a5fbe" }) {
  const [i, setI] = useState(0);
  const f = features[i];

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-10">
      <div
        role="tablist"
        aria-label="Features"
        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
      >
        {features.map((x, n) => {
          const on = n === i;
          return (
            <button
              key={x.title}
              type="button"
              role="tab"
              id={`ft-tab-${n}`}
              aria-selected={on}
              aria-controls="ft-panel"
              onClick={() => setI(n)}
              className={`group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left text-[15.5px] font-medium transition-all lg:px-5 lg:py-4 lg:text-[16.5px] ${
                on
                  ? "border-sd-line bg-white text-sd-ink shadow-[0_6px_18px_-10px_rgba(11,27,51,0.3)]"
                  : "border-transparent text-sd-muted hover:bg-white/70 hover:text-sd-ink"
              }`}
            >
              <span
                aria-hidden="true"
                className="hidden h-2 w-2 shrink-0 rounded-full transition-opacity lg:block"
                style={{ background: accent, opacity: on ? 1 : 0.25 }}
              />
              {x.title}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="ft-panel"
        aria-labelledby={`ft-tab-${i}`}
        className="sd-card grid items-center gap-8 p-6 sm:p-8 md:grid-cols-2 md:gap-10"
      >
        <div key={f.title} className="sd-enter">
          <h3 className="sd-h3">{f.title}</h3>
          <p className="mt-4 text-[16.5px] leading-relaxed text-sd-body">{f.body}</p>
          <ul className="mt-6 space-y-3">
            {f.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15.5px] leading-snug text-sd-body">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: `${accent}1a`, color: accent }}
                  aria-hidden="true"
                >
                  <Check size={12} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className={`relative aspect-[4/3] overflow-hidden rounded-[14px] ${tone(f.photo)}`}>
          <Image key={f.photo} {...fill(f.photo, "center 35%")} sizes="(min-width: 768px) 30vw, 92vw" />
        </div>
      </div>
    </div>
  );
}
