import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <main className="bg-zinc-50 text-zinc-900 min-h-screen">
      <section className="border-b border-zinc-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 xl:px-12 py-12 md:py-16">
          <Link
            href="/careers/opportunities"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 text-sm font-medium mb-8 transition-colors"
          >
            ← Back to open roles
          </Link>

          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#0a5fbe] mb-3">
            {job.id}
          </p>
          <h1
            className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            Apply for {job.title}
          </h1>
          <p className="text-zinc-600 leading-relaxed max-w-2xl mb-6">{job.description}</p>

          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-zinc-500">
            <span className="border border-zinc-200 px-2.5 py-1">{job.department}</span>
            <span className="border border-zinc-200 px-2.5 py-1">{job.type}</span>
            <span className="border border-zinc-200 px-2.5 py-1">{job.location}</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 xl:px-12">
          <JobApplicationForm job={job} />
        </div>
      </section>
    </main>
  );
}
