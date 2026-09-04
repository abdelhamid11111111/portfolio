"use client";

import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/**
 * EN / FR switch.
 *
 * Renders a real anchor per locale rather than a button, because each locale is
 * a genuine URL: the switch is shareable, opens in a new tab correctly, and
 * works before hydration. The current locale is a `<span>`, not a link to
 * itself — and carries `aria-current` so it is announced as the active choice.
 *
 * A plain `<a>` rather than `next/link`, so switching language is a full
 * document load. Changing locale changes `<html lang>`, every meta tag and all
 * of the copy, which is a new document in every meaningful sense; a soft
 * navigation would also re-render next-themes' pre-paint script on the client,
 * which React warns about. The pages are static, so the reload is cheap.
 *
 * The pathname's first segment is swapped rather than hardcoding `/fr`, so the
 * switch keeps the visitor on the page they are already reading if the site
 * ever grows past one route.
 */
export function LanguageToggle({
  locale,
  label,
}: {
  locale: Locale;
  /** `switchLanguage` from the dictionary, containing a `{lang}` placeholder. */
  label: string;
}) {
  const pathname = usePathname();

  const hrefFor = (target: Locale) => {
    const segments = pathname.split("/");
    // segments[0] is the empty string before the leading slash.
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  return (
    <div
      className="flex items-center rounded-full border border-border p-0.5"
      // The group is a set of alternatives, so name it once rather than
      // letting each link announce itself without context.
      role="group"
      aria-label={label.replace("{lang}", "")}
    >
      {locales.map((target) => {
        const isCurrent = target === locale;
        const className = cn(
          "rounded-full px-2.5 py-1 font-mono text-xs leading-none transition-colors",
          isCurrent
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground",
        );

        return isCurrent ? (
          <span key={target} aria-current="true" className={className}>
            {localeNames[target]}
          </span>
        ) : (
          <a
            key={target}
            href={hrefFor(target)}
            hrefLang={target}
            aria-label={label.replace("{lang}", localeNames[target])}
            className={className}
          >
            {localeNames[target]}
          </a>
        );
      })}
    </div>
  );
}
