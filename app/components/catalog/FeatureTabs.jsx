"use client";

import { useState } from "react";
import Image from "next/image";
import { fill } from "../../../lib/images";

/**
 * Zoho-style tabbed feature section ("Teams that win together"): a list of
 * feature titles on the left, and the active feature's copy and ONE photo on
 * the right. Only the active photo is rendered, which keeps pages light.
 */
export default function FeatureTabs({ features, accent = "#0a5fbe" }) {
  const [i, setI] = useState(0);
  const f = features[i];

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-14">
      <div role="tablist" aria-label="Features" className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-visible">
        {features.map((x, n) => {
          const on = n === i;
          return (
            <button
              key={x.title}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setI(n)}
              className={`shrink-0 border-b-2 px-1 py-3 text-left text-[18px] transition-colors lg:border-b-0 lg:border-l-[3px] lg:px-5 lg:py-5 lg:text-[20px] ${
                on ? "text-[#111]" : "border-transparent text-[#666] hover:text-[#111]"
              }`}
              style={on ? { borderColor: accent } : undefined}
            >
              {x.title}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
        <div>
          <h3 className="sd-h3">{f.title}</h3>
          <p className="mt-4 text-[17px] leading-relaxed text-[#333]">{f.body}</p>
          <ul className="mt-6 space-y-3">
            {f.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[16px] leading-snug text-[#333]">
                <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full" style={{ background: accent }} aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image key={f.photo} {...fill(f.photo, "center 35%")} sizes="(min-width: 768px) 30vw, 92vw" />
        </div>
      </div>
    </div>
  );
}
