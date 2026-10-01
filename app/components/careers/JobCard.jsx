import Link from "next/link";
import { Briefcase, Clock, MapPin } from "lucide-react";
import { Arrow, IconTile, accent } from "../ui/CardParts";

const DEPT_ACCENTS = ["#0A5FBE", "#00A3B0", "#7C4DFF", "#E58A00", "#1F9D55", "#C13584"];
const deptAccent = (d = "") => DEPT_ACCENTS[[...d].reduce((n, c) => n + c.charCodeAt(0), 0) % DEPT_ACCENTS.length];

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
      className="sd-fcard group grid gap-5 p-6 sm:p-7 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6"
      style={accent(deptAccent(job.department))}
    >
      <IconTile icon={Briefcase} size={48} />
      <span className="min-w-0">
        <span className="block font-display text-[19px] font-semibold tracking-tight text-sd-ink">
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
      <span className="flex items-center gap-3 justify-self-start">
        <span className="text-[14.5px] font-semibold text-sd-blue">Apply now</span>
        <Arrow />
      </span>
    </Link>
  );
}
