import Image from "next/image";
import Mark from "./Marks";

/**
 * A product's real logo when lib/catalog has one (`logo: { src, white }`),
 * otherwise its drawn Mark icon. `onDark` picks the white logo / white mark.
 */
export default function ProductLogo({ product, size = 32, onDark = false, className = "" }) {
  if (product.logo) {
    return (
      <Image
        src={onDark ? product.logo.white : product.logo.src}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        className={`shrink-0 object-contain ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }
  return <Mark name={product.mark} size={size} color={onDark ? "#ffffff" : product.accent} className={className} />;
}
