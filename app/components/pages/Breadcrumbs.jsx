import Link from "next/link";
import { ChevronRight } from "lucide-react";

/** Breadcrumb trail for page heroes. crumbs: [{ name, href }], last item is the current page. */
export default function Breadcrumbs({ crumbs = [], className = "" }) {
  if (crumbs.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-[14px] text-sd-muted">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.href ?? c.name} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={14} className="text-sd-faint" aria-hidden="true" />}
              {last ? (
                <span aria-current="page" className="font-medium text-sd-ink">
                  {c.name}
                </span>
              ) : (
                <Link href={c.href} className="transition-colors hover:text-sd-navy">
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
