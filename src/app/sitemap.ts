import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { siteUrl } from "@/data/site";
import { locales, localeTags, type Locale } from "@/i18n/config";

/**
 * The XML sitemap, served at /sitemap.xml.
 *
 * Derived rather than listed: the URLs come from `locales` and `caseStudies`,
 * the same two sources the routes themselves are generated from. Adding a
 * language or a case study puts it in the sitemap with no edit here — which is
 * the point, since a hand-maintained list is the kind of file that silently
 * goes stale six months after launch.
 *
 * Two routes are deliberately absent:
 *   - `/`, which 307-redirects to a locale in `src/proxy.ts`. A redirect is not
 *     a canonical page, and listing one asks Google to index a URL that answers
 *     differently depending on the visitor's Accept-Language header.
 *   - `[...rest]`, the catch-all that renders the 404 page.
 *
 * `alternates.languages` mirrors the hreflang already emitted by each page's
 * metadata. Repeating it here is what tells Google the two locales are one page
 * in two languages rather than duplicate content, and the sitemap is the one
 * place it can see the whole set at once.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // One timestamp for the whole file. Nothing in the content carries a real
  // publication date — the case studies are structural data, not posts — so
  // build time is the most honest answer available. Crawlers treat
  // `lastModified` as a hint, and an invented per-page date would be a worse
  // signal than a uniform one.
  const lastModified = new Date();

  /** The hreflang map for one page, keyed by BCP-47 tag. */
  const languages = (path: (locale: Locale) => string) =>
    Object.fromEntries(
      locales.map((locale) => [localeTags[locale], `${siteUrl}${path(locale)}`]),
    );

  const homePages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: languages((l) => `/${l}`) },
  }));

  const caseStudyPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    caseStudies.map((study) => ({
      url: `${siteUrl}/${locale}/projects/${study.slug}`,
      lastModified,
      changeFrequency: "monthly",
      // Below the home page, above nothing: these are the pages worth ranking
      // after the front door, and `priority` is only ever read relative to the
      // other entries in this same file.
      priority: 0.8,
      alternates: {
        languages: languages((l) => `/${l}/projects/${study.slug}`),
      },
    })),
  );

  return [...homePages, ...caseStudyPages];
}
