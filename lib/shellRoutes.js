/**
 * Route groups for the site chrome.
 *
 *  - Everything public renders with the corporate (light, Zoho-style) header
 *    and footer.
 *  - The internal admin and employee portals keep a plain, chrome-free layout
 *    (they bring their own UI).
 */
const PORTAL_PREFIXES = ["/admin", "/employee"];

export function isPortalRoute(pathname = "/") {
  return PORTAL_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function isCorporateRoute(pathname = "/") {
  return !isPortalRoute(pathname);
}
