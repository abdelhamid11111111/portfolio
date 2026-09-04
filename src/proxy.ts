import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

/**
 * Sends a locale-less URL to the visitor's best-matching language.
 *
 * `/` is the only path this really has to handle — the site is one page per
 * locale — but the matcher covers any future path for free. Parsing
 * `Accept-Language` by hand keeps this dependency-free; the header is a
 * comma-separated list of tags with optional `;q=` weights, and we only need
 * the primary subtag ("fr-CA" -> "fr") to pick a winner.
 *
 * The redirect is temporary (307), not permanent: the visitor's browser
 * language can change, and a 308 would be cached by the browser forever.
 */
function pickLocale(header: string | null): string {
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return {
        tag: tag.trim().toLowerCase(),
        q: q ? Number.parseFloat(q.trim().slice(2)) || 0 : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const primary = tag.split("-")[0];
    const hit = locales.find((locale) => locale === primary);
    if (hit) return hit;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const locale = pickLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  // Skip Next internals, the static asset folder and anything with a file
  // extension — those must never be rewritten to a locale path.
  matcher: ["/((?!_next|projects|favicon.ico|.*\\.).*)"],
};
