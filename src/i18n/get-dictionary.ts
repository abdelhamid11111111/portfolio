import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

/**
 * Loads a locale's copy.
 *
 * The dictionaries are behind dynamic imports so only the requested locale's
 * strings end up in that route's bundle — adding a third language does not make
 * the French page heavier. `server-only` keeps the whole map out of the client
 * bundle: components receive the slices they need as props instead.
 */
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.en),
  fr: () => import("./dictionaries/fr").then((m) => m.fr),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
