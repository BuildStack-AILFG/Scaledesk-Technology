import Link from "next/link";
import { Briefcase, Clock, MapPin } from "lucide-react";

/** One open role as a link card. `showDescription` adds the one-paragraph summary. */
export default function JobCard({ job, showDescription = false }) {
  const meta = [
    { icon: Briefcase, v: job.department },
    { icon: Clock, v: job.type },
    { icon: MapPin, v: job.location },
  ].filter((m) => m.v);

  return (
    <Link
      href={`/careers/opportunities/${job.id}/apply`}
      className="sd-card-link group grid gap-4 p-6 sm:p-7 md:grid-cols-[1fr_auto] md:items-center md:gap-8"
    >
      <span className="min-w-0">
        <span className="block font-display text-[19px] font-semibold tracking-tight text-sd-ink transition-colors group-hover:text-sd-blue">
          {job.title}
        </span>
        <span className="mt-2.5 flex flex-wrap gap-2">
          {meta.map(({ icon: Icon, v }) => (
            <span key={v} className="inline-flex items-center gap-1.5 rounded-full bg-sd-surface px-3 py-1 text-[13px] font-medium text-sd-body">
              <Icon size={13} className="text-sd-muted" aria-hidden="true" />
              {v}
            </span>
          ))}
        </span>
        {showDescription && job.description && (
          <span className="mt-3 block max-w-[680px] text-[15px] leading-relaxed text-sd-muted">{job.description}</span>
        )}
      </span>
      <span className="sd-btn sd-btn-outline sd-btn-sm sd-btn-plain justify-self-start group-hover:border-sd-navy group-hover:text-sd-navy">
        Apply now
      </span>
    </Link>
  );
}
