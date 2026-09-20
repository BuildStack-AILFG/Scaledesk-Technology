import Image from "next/image";

/**
 * The ScaleDesk logo exactly as supplied (public/brand/scaledesk-logo-source.jpg),
 * trimmed of its white margin, sharpened and given a transparent background so it
 * sits cleanly on light surfaces. Do not restyle or recolour it.
 */
const SIZES = { sm: 44, md: 56, lg: 76 };
const RATIO = 728 / 592;

export default function Logo({ size = "md", className = "" }) {
  const h = SIZES[size] ?? SIZES.md;
  return (
    <Image
      src="/brand/scaledesk-logo.png"
      alt="ScaleDesk"
      height={h}
      width={Math.round(h * RATIO)}
      className={className}
      style={{ height: h, width: "auto" }}
      preload={size === "md"}
    />
  );
}
