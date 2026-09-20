import Link from "next/link";
import JsonLd from "../../components/seo/JsonLd";
import PageHero from "../../components/pages/PageHero";
import { OPPORTUNITIES } from "../../data/careers";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { pageGraph } from "../../../lib/seo/schema";

const DESCRIPTION =
  "Open roles and internships at ScaleDesk Technology: engineering, AI, design and business. Apply online and track your application.";

export const metadata = buildPageMetadata({
  title: "Open Roles",
  seoTitle: "Open Roles & Internships | ScaleDesk Technology Careers",
  metaDescription: DESCRIPTION,
  path: "/careers/opportunities",
  primaryKeyword: "ScaleDesk open roles",
  secondaryKeywords: ["engineering internships", "AI engineer jobs", "remote software jobs"],
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Careers", href: "/careers" },
  { name: "Open roles", href: "/careers/opportunities" },
];

export default function OpportunitiesPage() {
  const graph = pageGraph({
    breadcrumbs: crumbs.map((c) => ({ name: c.name, path: c.href })),
    page: { title: "Open roles", description: DESCRIPTION, path: "/careers/opportunities" },
  });

  const byDept = OPPORTUNITIES.reduce((acc, job) => {
    (acc[job.department] ||= []).push(job);
    return acc;
  }, {});

  return (
    <>
      <JsonLd data={graph} />
      <main>
        <PageHero crumbs={crumbs} label="Careers" title="Open roles" lead="Find the role that fits you, apply online, and track your application any time." narrow />
        <section className="bg-white sd-section">
          <div className="sd-container max-w-[980px] space-y-12">
            {Object.entries(byDept).map(([dept, jobs]) => (
              <div key={dept}>
                <h2 className="sd-h3 mb-2 border-b border-[#dfe8ec] pb-4">{dept}</h2>
                <ul>
                  {jobs.map((job) => (
                    <li key={job.id} className="border-b border-[#dfe8ec]">
                      <Link href={`/careers/opportunities/${job.id}/apply`} className="group grid gap-2 py-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
                        <span>
                          <span className="block text-[22px] text-[#111] transition-colors group-hover:text-[#0a5fbe]">{job.title}</span>
                          <span className="mt-1 block text-[15px] text-[#666]">
                            {job.type} &middot; {job.location}
                          </span>
                          <span className="mt-2 block max-w-[680px] text-[16px] leading-snug text-[#555]">{job.description}</span>
                        </span>
                        <span className="sd-link">Apply</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="text-[15px] text-[#555]">
              Already applied?{" "}
              <Link href="/careers/track" className="text-[#0a5fbe] underline">
                Track your application
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
