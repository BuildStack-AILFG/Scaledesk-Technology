import Link from "next/link";
import JsonLd from "../../components/seo/JsonLd";
import PageHero from "../../components/pages/PageHero";
import Reveal from "../../components/shell/Reveal";
import JobCard from "../../components/careers/JobCard";
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
        <section className="sd-surface sd-section">
          <div className="sd-container max-w-[980px] space-y-14">
            {Object.entries(byDept).map(([dept, jobs]) => (
              <div key={dept}>
                <Reveal className="mb-6 flex items-baseline justify-between gap-4 border-b border-sd-line pb-4">
                  <h2 className="font-display text-[clamp(22px,2vw,26px)] font-bold tracking-tight text-sd-ink">{dept}</h2>
                  <span className="shrink-0 text-[14px] font-medium text-sd-muted">
                    {jobs.length} {jobs.length === 1 ? "role" : "roles"}
                  </span>
                </Reveal>
                <ul className="flex flex-col gap-3">
                  {jobs.map((job, i) => (
                    <Reveal as="li" key={job.id} delay={(i % 4) * 50}>
                      <JobCard job={job} showDescription />
                    </Reveal>
                  ))}
                </ul>
              </div>
            ))}
            <div className="sd-card flex flex-col items-start justify-between gap-4 p-7 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-[17px] font-semibold tracking-tight text-sd-ink">Already applied?</p>
                <p className="mt-1 text-[15px] text-sd-muted">Sign in to see where your application stands.</p>
              </div>
              <Link href="/careers/track" className="sd-btn sd-btn-primary sd-btn-sm">
                Track your application
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
