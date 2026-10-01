import Image from "next/image";
import { fill, tone } from "../../../lib/images";

/**
 * Hero photo in a white frame with a deep soft shadow, optionally sitting on a
 * glow tinted with `glow` (a hex colour). `name` is a key from lib/images.js.
 */
export default function FramedPhoto({ name, position = "center 40%", glow, preload = true, sizes = "(min-width: 1024px) 46vw, 94vw" }) {
  return (
    <div className="relative">
      {glow && (
        <div
          aria-hidden="true"
          className="absolute -inset-6 -z-10 rounded-[36px] opacity-70 blur-2xl"
          style={{ background: `radial-gradient(60% 60% at 70% 30%, ${glow}33, transparent 70%)` }}
        />
      )}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border-[6px] border-white bg-white shadow-[0_10px_24px_-6px_rgba(11,27,51,0.1),0_40px_80px_-28px_rgba(11,27,51,0.35)]">
        <div className={`absolute inset-0 overflow-hidden rounded-[18px] ${tone(name)}`}>
          <Image {...fill(name, position)} preload={preload} sizes={sizes} />
        </div>
      </div>
    </div>
  );
}
