import { notFound } from "next/navigation";
import ContentPage from "../../components/pages/ContentPage";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { getIndustry, getIndustrySlugs } from "../../../lib/seo/industries";

export function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry | ScaleDesk Technology" };
  return buildPageMetadata(industry);
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const related = (industry.relatedSlugs ?? [])
    .map((s) => getIndustry(s))
    .filter(Boolean)
    .map((i) => ({ label: i.title, href: i.path }));

  return (
    <ContentPage
      page={industry}
      label="Industry"
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Industries", href: "/industries" },
        { name: industry.title, href: industry.path },
      ]}
      related={related}
    />
  );
}
