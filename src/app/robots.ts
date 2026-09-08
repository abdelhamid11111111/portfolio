import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

/**
 * robots.txt, served at /robots.txt.
 *
 * Everything is crawlable: the site is six public pages in two languages with
 * no admin area, no search results and no user accounts, so there is nothing
 * here that a `Disallow` would protect. Next's own `/_next/` assets are left
 * open on purpose — Googlebot renders the page before indexing it, and blocking
 * the CSS and JS it needs to do that is a classic way to have a site indexed as
 * an unstyled skeleton.
 *
 * The absolute sitemap URL matters: `Sitemap:` is the one directive in
 * robots.txt that is not resolved relative to the file, so a bare
 * "/sitemap.xml" here is ignored by every crawler that reads it.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
