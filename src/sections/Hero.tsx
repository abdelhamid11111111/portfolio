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
 * The `lg:` sizes are markedly larger than the base ones. That is not a
 * breakpoint bump for its own sake: below `lg` the two columns stack, so the
 * hero's height is the *sum* of the copy and the visual and there is almost no
 * room spare, while from `lg` up they sit side by side and the height is the
 * *taller of the two* — which leaves 200–400px unused. The big type spends that
 * space instead of leaving the hero looking undersized on a desktop.
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

      <div className="wrap grid min-h-[calc(100svh-var(--nav-h))] items-center gap-[clamp(1.5rem,4.5vh,3.5rem)] py-[clamp(0.75rem,2.6vh,3.25rem)] lg:grid-cols-2 lg:gap-14">
        <div className="flex min-w-0 flex-col items-start gap-[clamp(0.5rem,1.5vh,1.5rem)] lg:gap-[clamp(0.55rem,2vh,1.75rem)]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur-sm lg:px-4 lg:py-2 lg:text-[0.8rem]">
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
              className="font-display pb-[clamp(0.35rem,1.4vh,1rem)] text-[clamp(2rem,min(6.6vw,7vh),4.1rem)] leading-[0.8] lg:text-[clamp(2.25rem,min(5.6vw,9.5vh),5rem)]"
            >
              {/* Each part is its own block, so the name always breaks between
                  given name and surname. Left to natural wrapping it split as
                  "Oug-" / "Lhacen" once the type got large enough to fill the
                  column — a hyphen break through someone's surname.

                  The 5rem ceiling is set by the column, not by taste: the page
                  is capped at `--page-max-width`, so past ~1500px the column
                  stops growing while a `vw`-driven size would keep going. 80px
                  is the largest that keeps "Oug-Lhacen" on one line in a ~535px
                  column; 84px wrapped it. */}
              <span className="block">{site.name.split(" ")[0]}</span>
              <span className="block text-primary">
                {site.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="font-mono text-[clamp(0.7rem,1.5vh,1rem)] tracking-[0.14em] text-muted-foreground uppercase lg:text-[clamp(0.85rem,1.7vh,1.15rem)]">
              {dict.role}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-xl text-[clamp(0.85rem,1.7vh,1.125rem)] leading-[1.55] text-muted-foreground text-pretty lg:max-w-2xl lg:text-[clamp(1rem,2.15vh,1.3rem)] lg:leading-[1.6]">
              {dict.bio}
            </p>
          </Reveal>

          <Reveal delay={0.26} className="w-full">
            <div className="flex flex-row flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="group h-[clamp(2.5rem,5.2vh,2.75rem)] px-[clamp(0.9rem,2.2vw,1.25rem)] text-[clamp(0.85rem,1.6vh,0.95rem)] lg:h-[clamp(2.6rem,6.4vh,3.4rem)] lg:px-[clamp(1.25rem,1.9vw,1.9rem)] lg:text-[clamp(0.95rem,1.9vh,1.1rem)]"
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
                className="h-[clamp(2.5rem,5.2vh,2.75rem)] px-[clamp(0.9rem,2.2vw,1.25rem)] text-[clamp(0.85rem,1.6vh,0.95rem)] lg:h-[clamp(2.6rem,6.4vh,3.4rem)] lg:px-[clamp(1.25rem,1.9vw,1.9rem)] lg:text-[clamp(0.95rem,1.9vh,1.1rem)]"
              >
                <a href="#contact">{dict.contactMe}</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <SocialLinks social={social} size="fluid" />
          </Reveal>
        </div>

        {/* `min-w-0` for the same reason as the column opposite: without it the
            snippet's longest line sets this column's floor and the grid ratio
            stops being honoured. The window scrolls internally if it ever has
            to. */}
        <div className="min-w-0 lg:pl-4">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
