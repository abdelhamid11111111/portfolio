import { LocalizedNotFound } from "@/components/site/LocalizedNotFound";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * The 404 for everything under `/<locale>` — an unknown case study slug, and,
 * via the `[...rest]` catch-all, any path no route claims. The proxy rewrites
 * locale-less URLs into this segment before they can miss, so in practice every
 * dead link on the site arrives here.
 *
 * It renders inside `[locale]/layout.tsx`, so the header, footer, fonts and
 * theme come for free and a miss looks like part of the site rather than an
 * error screen bolted on beside it.
 *
 * Both locales' copy is loaded and passed down because the boundary itself
 * cannot know which language was asked for — see `LocalizedNotFound` for why
 * that is resolved on the client. It is ten short strings per language, so
 * shipping the pair costs less than the alternative did.
 */
export default async function LocaleNotFound() {
  const entries = await Promise.all(
    locales.map(
      async (locale) =>
        [locale, (await getDictionary(locale)).notFound] as const,
    ),
  );

  return (
    <LocalizedNotFound
      copy={
        Object.fromEntries(entries) as Record<Locale, Dictionary["notFound"]>
      }
    />
  );
}
