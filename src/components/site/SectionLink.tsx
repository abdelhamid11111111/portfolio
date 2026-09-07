"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";

/**
 * The nav and the footer point at sections of the home page. On the home page
 * that is a bare `#hash` — an in-page jump with no navigation at all. On a case
 * study page the same link has to travel home first, so it becomes
 * `/<locale>#hash`.
 *
 * Deciding per render rather than hardcoding the absolute form keeps the home
 * page's links what they were: no reload, no router work, just a scroll.
 */
export function useSectionHref(locale: Locale) {
  const pathname = usePathname();
  // Trailing slashes are off by default, but a redirect can still land here
  // with one, and `/en/` is just as much the home page as `/en`.
  const onHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  return (hash: string) => (onHome ? hash : `/${locale}${hash}`);
}

/** The hook as a component, for the server-rendered footer. */
export function SectionLink({
  locale,
  hash,
  className,
  children,
}: {
  locale: Locale;
  /** Including the `#`, e.g. `#projects`. */
  hash: string;
  className?: string;
  children: ReactNode;
}) {
  const href = useSectionHref(locale)(hash);

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
