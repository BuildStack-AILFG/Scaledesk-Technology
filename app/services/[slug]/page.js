import { notFound } from "next/navigation";
import ContentPage from "../../components/pages/ContentPage";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { getService, getServiceSlugs } from "../../../lib/seo/services";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service | ScaleDesk Technology" };
  return buildPageMetadata(service);
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = (service.relatedSlugs ?? [])
    .map((s) => getService(s))
    .filter(Boolean)
    .map((s) => ({ label: s.title, href: s.path }));

  return (
    <ContentPage
      page={service}
      label="Expert service"
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: service.title, href: service.path },
      ]}
      related={related}
    />
  );
}
