"use client";

import { usePathname } from "next/navigation";
import { isCorporateRoute } from "../../../lib/shellRoutes";
import CorporateHeader from "./CorporateHeader";
import CorporateFooter from "./CorporateFooter";

/**
 * Chooses the site chrome per route (see lib/shellRoutes.js).
 *
 *  - public pages: light corporate header + footer.
 *  - admin / employee portals: no site chrome, they render their own UI.
 *
 * `nav` is plain JSON built on the server (lib/nav.js#getNavData).
 */
export default function SiteShell({ nav, children }) {
  const pathname = usePathname();

  if (isCorporateRoute(pathname)) {
    return (
      <div data-shell="corporate" className="flex min-h-screen flex-col bg-white">
        {/* Scroll-reveal hides elements via CSS; without JS, show everything. */}
        <noscript>
          <style>{`[data-shell="corporate"] .sd-reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <CorporateHeader nav={nav} />
        <div className="flex-1">{children}</div>
        <CorporateFooter nav={nav} />
      </div>
    );
  }

  return <>{children}</>;
}
