"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { NotFound } from "@/sections/NotFound";

/** Never fires: the "store" here is whether we are on the client at all. */
const neverChanges = () => () => {};

/**
 * Picks the 404's language from the URL, on the client.
 *
 * A not-found boundary renders without `params`, so the locale has to come from
 * somewhere else. Reading it from a request header would mean calling
 * `headers()` inside the `[locale]` segment, and that one call opts the *whole*
 * segment out of static rendering — the home page and all six case studies stop
 * being prerendered to pay for a string on a page almost nobody sees. Next's
 * own guidance for this case is to do the work on the client, so both locales'
 * copy is handed over as props and this component chooses between them.
 *
 * `useSyncExternalStore` is what keeps that honest. The prerendered HTML has no
 * URL to read, so it has to say English; resolving the real locale during the
 * first client render would then disagree with that HTML and cost a hydration
 * error. Giving the hook a server snapshot of `false` and a client snapshot of
 * `true` makes React render the server's answer first and the real one
 * immediately after, which is the supported way to say "after hydration" —
 * without the `setState`-inside-an-effect the lint rule rightly objects to.
 *
 * A French visitor therefore reads English for one frame. That is the cheap
 * half of the trade, and it is paid only on a page that is already a mistake.
 */
export function LocalizedNotFound({
  copy,
}: {
  copy: Record<Locale, Dictionary["notFound"]>;
}) {
  const pathname = usePathname();
  const hydrated = useSyncExternalStore(
    neverChanges,
    () => true,
    () => false,
  );

  // `/fr/whatever` -> "fr". Anything else leaves the default in place.
  const segment = pathname.split("/")[1] ?? "";
  const locale = hydrated && isLocale(segment) ? segment : defaultLocale;

  return <NotFound locale={locale} dict={copy[locale]} />;
}
