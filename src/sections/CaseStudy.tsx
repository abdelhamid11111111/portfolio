import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { Reveal } from "@/components/motion/Reveal";
import { TechIcon } from "@/components/site/TechIcon";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import type { CaseStudy as CaseStudyData } from "@/types";

/**
 * The whole case study page, in the order a visitor reads it: what it is, what
 * was hard, what it does, a walk through the screens (including the admin side
 * a live demo never shows), the stack, and a way to start a conversation.
 *
 * A server component — nothing here holds state. The scroll-in animation comes
 * from `Reveal`, which is the client boundary.
 *
 * Every string arrives from the dictionary so the page is bilingual for free;
 * only structure (screenshots, order, links) comes from `src/data/case-studies`.
 */
export function CaseStudy({
  locale,
  study,
  dict,
}: {
  locale: Locale;
  study: CaseStudyData;
  dict: Dictionary["caseStudies"];
}) {
  const copy = dict.items[study.id];
  const home = `/${locale}`;

  return (
    <article>
      {/* Header band. Tinted and bordered, so the page reads as a separate
          document rather than one more section of the home page. */}
      <header className="border-b border-border bg-muted/30">
        <div className="wrap flex flex-col gap-8 pt-10 pb-14 sm:pt-12">
          <Reveal className="flex flex-col gap-5">
            {/* Plain anchor rather than next/link: leaving the case study is a
                full document load back to the home page, the same trade the
                language switcher makes. */}
            <a
              href={`${home}#projects`}
              className="group inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft
                className="size-4 transition-transform group-hover:-translate-x-0.5"
                aria-hidden
              />
              {dict.back}
            </a>

            <div className="flex max-w-3xl flex-col gap-4">
              <span className="eyebrow">{dict.eyebrow}</span>
              <h1 className="font-display text-3xl leading-[1.1] text-balance sm:text-4xl md:text-5xl">
                {copy.title}
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                {copy.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {study.liveUrl ? (
                <Button asChild size="lg" className="h-11 gap-2 px-5 text-sm">
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dict.liveDemo}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </Button>
              ) : null}
              {study.repoUrl ? (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 gap-2 px-5 text-sm"
                >
                  <a
                    href={study.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="size-4" aria-hidden focusable={false} />
                    {dict.sourceCode}
                  </a>
                </Button>
              ) : null}
            </div>
          </Reveal>

          {/* The three facts a client scans for before reading a word of prose. */}
          <Reveal delay={0.08}>
            <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {(
                [
                  [dict.meta.builtFor, copy.meta.builtFor],
                  [dict.meta.timeline, copy.meta.timeline],
                  [dict.meta.type, copy.meta.type],
                ] as const
              ).map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1 bg-card p-4">
                  <dt className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                    {label}
                  </dt>
                  <dd className="text-sm">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      {/* Cover shot, pulled up so it straddles the header's bottom edge. */}
      <div className="wrap -mt-8">
        <Reveal>
          {/* The ratio is inline rather than a Tailwind class: it comes from
              the data, and a class assembled at runtime is one Tailwind never
              sees to generate. 19/8 is the fallback, matching the cards. */}
          <a
            href={study.cover}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden rounded-xl border border-border bg-muted shadow-xl shadow-primary/5"
            style={{ aspectRatio: study.coverRatio ?? 19 / 8 }}
          >
            <Image
              src={study.cover}
              alt={copy.coverAlt}
              fill
              sizes="(min-width: 1180px) 1100px, 100vw"
              priority
              quality={90}
              className="object-cover"
            />
          </a>
        </Reveal>
      </div>

      {/* Summary + the challenge / approach / outcome trio. */}
      <section className="section-y" aria-labelledby="overview-title">
        <div className="wrap flex flex-col gap-10">
          <Reveal className="max-w-3xl">
            <h2 id="overview-title" className="sr-only">
              {dict.challengeTitle}
            </h2>
            <p className="text-lg leading-relaxed text-pretty sm:text-xl">
              {copy.summary}
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {(
              [
                [dict.challengeTitle, copy.challenge],
                [dict.approachTitle, copy.approach],
                [dict.outcomeTitle, copy.outcome],
              ] as const
            ).map(([title, body], index) => (
              <Reveal
                key={title}
                delay={index * 0.08}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
              >
                <span className="font-mono text-xs text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feature list. Deliberately terse — the walkthrough below does the
          explaining, this is the scannable version for someone in a hurry. */}
      <section
        className="border-y border-border bg-muted/30 py-16 sm:py-20"
        aria-labelledby="features-title"
      >
        <div className="wrap flex flex-col gap-8">
          <Reveal>
            <h2
              id="features-title"
              className="font-display text-2xl sm:text-3xl"
            >
              {dict.featuresTitle}
            </h2>
          </Reveal>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {copy.features.map((feature, index) => (
              <Reveal
                as="li"
                key={feature}
                delay={Math.min(index * 0.05, 0.25)}
                className="flex items-start gap-3"
              >
                <span
                  aria-hidden
                  className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                >
                  <Check className="size-3" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {feature}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* The walkthrough: one screenshot per screen, alternating sides, with the
          `wide` blocks — the dashboards — given a full-width row of their own. */}
      <section className="section-y" aria-labelledby="walkthrough-title">
        <div className="wrap flex flex-col gap-10 sm:gap-14">
          <Reveal className="flex max-w-2xl flex-col gap-4">
            <h2
              id="walkthrough-title"
              className="font-display text-2xl sm:text-3xl"
            >
              {dict.walkthroughTitle}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              {dict.walkthroughIntro}
            </p>
          </Reveal>

          {study.blocks.map((block, index) => {
            // A block whose key is missing from the dictionary is skipped
            // rather than rendered with an empty heading.
            const text = blockCopy(copy.blocks, block.id);
            if (!text) return null;

            const step = String(index + 1).padStart(2, "0");

            if (block.wide) {
              return (
                <Reveal key={block.id} className="flex flex-col gap-6">
                  <div className="flex max-w-2xl flex-col gap-3">
                    <span className="font-mono text-xs text-primary">
                      {step}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl">
                      {text.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
                      {text.body}
                    </p>
                  </div>
                  <Shot
                    src={block.image}
                    alt={text.alt}
                    ratio={block.ratio ?? 19 / 8}
                    sizes="(min-width: 1180px) 1100px, 100vw"
                  />
                </Reveal>
              );
            }

            // Odd rows put the screenshot on the right, so the page alternates
            // instead of marching down one column.
            const imageRight = index % 2 === 1;

            return (
              <Reveal
                key={block.id}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <div
                  className={`flex flex-col gap-3 ${imageRight ? "md:order-1" : "md:order-2"}`}
                >
                  <span className="font-mono text-xs text-primary">{step}</span>
                  <h3 className="font-display text-xl sm:text-2xl">
                    {text.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
                    {text.body}
                  </p>
                </div>
                <div className={imageRight ? "md:order-2" : "md:order-1"}>
                  <Shot
                    src={block.image}
                    alt={text.alt}
                    ratio={block.ratio ?? 19 / 8}
                    sizes="(min-width: 1180px) 530px, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Stack. Same brand marks as the home page's stack section, so the two
          read as one system. */}
      <section
        className="border-t border-border py-16 sm:py-20"
        aria-labelledby="stack-title"
      >
        <div className="wrap flex flex-col gap-6">
          <Reveal>
            <h2 id="stack-title" className="font-display text-2xl sm:text-3xl">
              {dict.stackTitle}
            </h2>
          </Reveal>
          <Reveal as="ul" delay={0.06} className="flex flex-wrap gap-2.5">
            {study.stack.map((tech) => (
              <li
                key={tech.name}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2"
              >
                <TechIcon
                  name={tech.icon}
                  className="size-4 text-muted-foreground"
                />
                <span className="font-mono text-xs">{tech.name}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-24" aria-labelledby="case-cta-title">
        <div className="wrap">
          <Reveal className="flex flex-col items-start gap-5 rounded-xl border border-border bg-muted/40 p-8 sm:p-10">
            <h2
              id="case-cta-title"
              className="font-display text-2xl text-balance sm:text-3xl"
            >
              {dict.cta.title}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
              {dict.cta.body}
            </p>
            <Button asChild size="lg" className="h-11 gap-2 px-6 text-sm">
              <a href={`${home}#contact`}>
                {dict.cta.action}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </article>
  );
}

/**
 * One screenshot in a box shaped like the file itself, so a capture is never
 * cropped to fit a shape it does not have. The ratio is inline rather than a
 * Tailwind class because it comes from the data, and a class assembled at
 * runtime is one Tailwind never sees to generate.
 *
 * `sizes` is passed in rather than fixed: a `wide` block fills the container
 * while a normal one takes half of it, and declaring the wrong width is how an
 * image ends up asking for half the resolution it is displayed at.
 */
function Shot({
  src,
  alt,
  ratio,
  sizes,
}: {
  src: string;
  alt: string;
  /** Width ÷ height. */
  ratio: number;
  sizes: string;
}) {
  return (
    /*
     * The whole screenshot, always, at whatever width the column gives it —
     * nothing cropped and nothing to scroll sideways.
     *
     * These are ~1900px-wide dashboards, so on a phone the fitted image is too
     * small to read the data in it, and no amount of layout fixes that: the
     * pixels are not there. Rather than pretend otherwise, the box opens the
     * full-size file in a new tab, where the phone's own viewer gives
     * pinch-to-zoom for free. No lightbox, no JavaScript, and it doubles as a
     * "see it properly" affordance on desktop.
     */
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden rounded-xl border border-border bg-muted"
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={90}
        className="object-cover"
      />
    </a>
  );
}

type BlockCopy = { title: string; body: string; alt: string };

/**
 * Looks a block's prose up by id. Narrowing happens here, in one typed place,
 * so the caller can walk `study.blocks` without knowing which case study's
 * dictionary slice it is holding.
 */
function blockCopy(
  blocks: Record<string, BlockCopy>,
  id: string,
): BlockCopy | undefined {
  return blocks[id];
}
