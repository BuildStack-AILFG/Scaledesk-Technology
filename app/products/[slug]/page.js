import { notFound } from "next/navigation";
import ItemPage from "../../components/catalog/ItemPage";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { getProduct, getProductSlugs } from "../../../lib/seo/products";
import { getPlatform } from "../../../lib/catalog/platforms";
import { AGENTS_NAV, INDUSTRIES_NAV, PLATFORMS_NAV } from "../../../lib/nav";

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Platform | ScaleDesk Technology" };
  return buildPageMetadata(product);
}

export default async function PlatformPage({ params }) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  const seo = getProduct(slug);
  if (!platform || !seo) notFound();

  const related = [
    ...PLATFORMS_NAV.filter((p) => p.slug !== slug).slice(0, 3),
    ...AGENTS_NAV.filter((a) => a.slug === "sales-agent").slice(0, 1),
  ];
  const industries = platform.industries
    .map((s) => INDUSTRIES_NAV.find((i) => i.slug === s))
    .filter(Boolean);

  return (
    <ItemPage
      item={platform}
      type="platform"
      parent={{ label: "Platforms", href: "/products" }}
      kindLabel={`${platform.kind} platform`}
      related={related}
      industries={industries}
      seo={{ title: seo.seoTitle, description: seo.metaDescription, path: seo.path }}
    />
  );
}
