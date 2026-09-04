/** The locales the site is published in. Adding one here is step 1 of 3 —
 *  add its dictionary file and its entry in `dictionaries`, and the routes,
 *  metadata and language switcher all pick it up automatically. */
export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Native names, used as the label in the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
};

/** Full BCP-47 tags for <html lang> and hreflang. */
export const localeTags: Record<Locale, string> = {
  en: "en",
  fr: "fr",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
