import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, caseStudyBySlug } from "@/data/case-studies";
import { site } from "@/data/site";
import { isLocale, locales, localeTags } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { CaseStudy } from "@/sections/CaseStudy";

/**
 * One case study per project, per locale — every combination is prerendered at
 * build time, so these pages are as static as the home page.
 *
 * Adding a case study to `src/data/case-studies.ts` is enough; the route, its
 * metadata and both language versions follow from that one entry.
 */
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    caseStudies.map((study) => ({ locale, slug: study.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!isLocale(locale) || !study) return {};

  const dict = await getDictionary(locale);
  const copy = dict.caseStudies.items[study.id];

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    ),
    title: `${copy.title} — ${site.name}`,
    description: copy.tagline,
    alternates: {
      canonical: `/${locale}/projects/${study.slug}`,
      languages: Object.fromEntries(
        locales.map((l) => [localeTags[l], `/${l}/projects/${study.slug}`]),
      ),
    },
    openGraph: {
      title: copy.title,
      description: copy.tagline,
      type: "article",
      locale: localeTags[locale],
      images: [{ url: study.cover }],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  // An unknown slug is a 404 rather than an empty page — the same call the
  // locale segment makes one level up.
  const study = caseStudyBySlug(slug);
  if (!study) notFound();

  const dict = await getDictionary(locale);

  return <CaseStudy locale={locale} study={study} dict={dict.caseStudies} />;
}
