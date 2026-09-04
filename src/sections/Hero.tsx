import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { HeroVisual } from "@/components/site/HeroVisual";
import { SocialLinks } from "@/components/site/SocialLinks";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * Two columns from `lg` up, stacked below it with the visual second — on a
 * phone the headline should arrive before the decoration.
 *
 * The hero is meant to be read without scrolling, so its padding, gaps and type
 * are all `clamp()`ed against `vh` as well as `vw`: on a short laptop screen the
 * whole block shrinks proportionally rather than pushing the CTAs past the fold.
 * The `vw` term still governs on wide-but-short windows, so the headline never
 * outgrows its column.
 *
 * The section is `min-h` rather than `h`, so on a genuinely tiny viewport it
 * grows and scrolls instead of clipping the buttons — degrading to a scroll is
 * better than hiding the calls to action.
 */
export function Hero({
  dict,
  social,
}: {
  dict: Dictionary["hero"];
  social: Dictionary["social"];
}) {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />

      <div className="wrap grid min-h-[calc(100svh-var(--nav-h))] items-center gap-[clamp(1.5rem,4.5vh,3.5rem)] py-[clamp(0.75rem,2.6vh,3.25rem)] lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="flex flex-col items-start gap-[clamp(0.5rem,1.5vh,1.5rem)]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75 [animation-duration:2s]" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {dict.availability}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-title"
              className="font-display text-[clamp(2rem,min(6.6vw,7vh),4.1rem)] leading-[1.05] text-balance"
            >
              {site.name.split(" ")[0]}{" "}
              <span className="text-gradient">
                {site.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="font-mono text-[clamp(0.7rem,1.5vh,1rem)] tracking-[0.14em] text-muted-foreground uppercase">
              {dict.role}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-xl text-[clamp(0.85rem,1.7vh,1.125rem)] leading-[1.55] text-muted-foreground text-pretty">
              {dict.bio}
            </p>
          </Reveal>

          <Reveal delay={0.26} className="w-full">
            <div className="flex flex-row flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="group h-[clamp(2.5rem,5.2vh,2.75rem)] px-[clamp(0.9rem,2.2vw,1.25rem)] text-[clamp(0.85rem,1.6vh,0.95rem)]"
              >
                <a href="#projects">
                  {dict.viewProjects}
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-[clamp(2.5rem,5.2vh,2.75rem)] px-[clamp(0.9rem,2.2vw,1.25rem)] text-[clamp(0.85rem,1.6vh,0.95rem)]"
              >
                <a href="#contact">{dict.contactMe}</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <SocialLinks social={social} className="pt-1" />
          </Reveal>
        </div>

        <div className="lg:pl-4">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
