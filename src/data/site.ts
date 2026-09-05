import type { NavLink } from "@/types";
import type { Locale } from "@/i18n/config";

/**
 * Identity and contact details that are the same in every language.
 *
 * Anything a translator would need to change (role, location, availability,
 * the WhatsApp prefill) lives in `src/i18n/dictionaries` instead.
 *
 * TODO: replace the placeholder contact details below with the real ones.
 * `whatsappNumber` must be in full international format with no spaces, `+`
 * or dashes — that is what wa.me expects.
 */
export const site = {
  name: "Abdelhamid Oug-Lhacen",
  /** Used in the nav wordmark and the footer. */
  shortName: "Abdelhamid",
  email: "abdelhamidouglhacen@gmail.com",
  /** TODO: replace with the real number (international format, digits only). */
  whatsappNumber: "212681900795",
  githubUrl: "https://github.com/abdelhamid11111111",
  /** TODO: replace with the real LinkedIn profile. */
  linkedinUrl: "https://www.linkedin.com/in/abdelhamid-oug-lhacen-932784411/",
} as const;

export const emailHref = `mailto:${site.email}`;

/**
 * Built from the translated prefill, so a French visitor opens WhatsApp with a
 * French message already typed.
 */
export function whatsappHref(prefill: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(prefill)}`;
}

/** Each `href` must match a section `id` rendered in `app/[locale]/page.tsx`. */
export const navLinks: readonly NavLink[] = [
  { href: "#services", key: "services" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#faq", key: "faq" },
  { href: "#contact", key: "contact" },
] as const;

/** Absolute-ish path to a locale's home page, used by the language switcher. */
export function localeHref(locale: Locale) {
  return `/${locale}`;
}
