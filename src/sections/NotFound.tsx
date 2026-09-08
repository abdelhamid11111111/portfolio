import { ArrowRight, Home } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * The 404 screen.
 *
 * Built from the same parts as every other section — `grid-bg` backdrop, mono
 * eyebrow, display heading with one accented phrase, one primary call to
 * action — so a visitor who lands here by mistake stays inside the same site
 * rather than hitting a framework default that looks like a crash.
 *
 * Centred rather than left-aligned: there is no second column and no content
 * below to line an edge up with, so a single centred column is the honest
 * shape. It is `min-h` for the same reason the hero is — on a short viewport
 * the block grows and scrolls instead of clipping the buttons.
 *
 * The links are the actual point of the page. A 404 that only apologises makes
 * the visitor press Back; offering the same destinations the nav does turns a
 * dead end into a detour, and costs nothing because the routes already exist.
 */
export function NotFound({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["notFound"];
}) {
  // Always absolute. `SectionLink` decides between `#hash` and `/<locale>#hash`
  // by looking at the pathname, but this page is never the home page, so the
  // answer is known here and needs no client component to work it out.
  const href = (hash: string) => `/${locale}${hash}`;

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="notfound-title"
      aria-label={dict.landmark}
    >
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />

      {/* The hero's glow, recentred. Decorative only, hence the two tokens the
          design notes reserve for exactly this and never for text. */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[min(70vh,540px)] w-[min(92vw,780px)] -translate-x-1/2 -translate-y-[58%] opacity-15 blur-3xl dark:opacity-25"
        style={{
          background:
            "radial-gradient(42% 46% at 32% 34%, var(--primary) 0%, transparent 70%), radial-gradient(42% 46% at 70% 66%, var(--brand-cyan) 0%, transparent 70%)",
        }}
      />

      <div className="wrap flex min-h-[calc(100svh-var(--nav-h))] flex-col items-center justify-center gap-[clamp(0.75rem,2.2vh,1.5rem)] py-[clamp(2rem,6vh,5rem)] text-center">
        <Reveal>
          <span className="eyebrow">{dict.eyebrow}</span>
        </Reveal>

        {/* The numeral is scenery: the eyebrow already says "404" in text, so
            announcing it twice would only slow a screen reader down. */}
        <Reveal delay={0.06}>
          <p
            aria-hidden
            className="font-display bg-gradient-to-br from-primary via-primary to-brand-cyan bg-clip-text text-[clamp(5.5rem,22vw,13rem)] leading-[0.82] text-transparent"
          >
            404
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <h1
            id="notfound-title"
            className="font-display max-w-2xl text-3xl leading-[1.12] text-balance sm:text-4xl md:text-[2.75rem]"
          >
            {dict.titleLead}{" "}
            <span className="text-primary">{dict.titleAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {dict.intro}
          </p>
        </Reveal>

        <Reveal delay={0.24} className="w-full pt-[clamp(0.25rem,1.2vh,0.75rem)]">
          <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button asChild className="group h-12 px-6 text-base">
              <a href={href("")}>
                <Home />
                {dict.home}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="group h-12 px-6 text-base"
            >
              <a href={href("#contact")}>
                {dict.contact}
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
