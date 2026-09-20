import Link from "next/link";

/**
 * next/link for internal hrefs, a plain new-tab anchor for external ones.
 * Pass `external` explicitly, or let it be inferred from an absolute URL.
 */
export default function SmartLink({ href, external, children, ...rest }) {
  const isExternal = external ?? /^https?:\/\//i.test(href);
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
