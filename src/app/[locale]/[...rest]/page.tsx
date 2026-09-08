import { notFound } from "next/navigation";

/**
 * Catches every path under a locale that no real route claims, and 404s.
 *
 * Without it those URLs match nothing at all, and Next.js answers with its own
 * built-in error page — which sits outside `[locale]/layout.tsx` and so arrives
 * with no header, no footer, no theme and no translation. Matching them here
 * puts the miss *inside* the segment, where `not-found.tsx` can answer it in
 * the visitor's language and in the site's own design.
 *
 * A catch-all is the lowest-priority match in the App Router, so it never
 * shadows the home page or `projects/[slug]` — it only ever sees what those
 * did not want.
 */
export default function CatchAll(): never {
  notFound();
}
