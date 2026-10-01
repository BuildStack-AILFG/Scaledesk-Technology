import { notFound } from "next/navigation";
import { Briefcase, Clock, MapPin } from "lucide-react";
import PageHero from "../../../../components/pages/PageHero";
import JobApplicationForm from "../../../../components/careers/JobApplicationForm";
import { getJobById } from "../../../../data/careers";

export async function generateMetadata({ params }) {
  const { jobId } = await params;
  const job = getJobById(jobId);

  if (!job) {
    return { title: "Apply | ScaleDesk Technology" };
  }

  return {
    title: `Apply — ${job.title} | ScaleDesk Technology`,
    description: `Submit your application for ${job.title} at ScaleDesk Technology.`,
  };
}

export default async function JobApplyPage({ params }) {
  const { jobId } = await params;
  const job = getJobById(jobId);

  if (!job) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Careers", href: "/careers" },
    { name: "Open roles", href: "/careers/opportunities" },
    { name: job.title, href: `/careers/opportunities/${job.id}/apply` },
  ];
  const meta = [
    { icon: Briefcase, v: job.department },
    { icon: Clock, v: job.type },
    { icon: MapPin, v: job.location },
  ].filter((m) => m.v);

  return (
    <main>
      <PageHero crumbs={crumbs} label={`Role ${job.id}`} title={`Apply for ${job.title}`} lead={job.description} narrow>
        {meta.map(({ icon: Icon, v }) => (
          <span key={v} className="sd-chip !px-3.5 !py-1.5 !text-[14px]">
            <Icon size={14} className="text-sd-muted" aria-hidden="true" />
            {v}
          </span>
        ))}
      </PageHero>

      <section className="sd-surface py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <JobApplicationForm job={job} />
        </div>
      </section>
    </main>
  );
}
