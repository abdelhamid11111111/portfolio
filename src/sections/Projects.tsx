"use client";

import { ArrowUpRight, ChevronDown, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { SectionHead } from "@/components/site/SectionHead";
import { staggerChild, staggerParent } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudyFor, caseStudyHref } from "@/data/case-studies";
import { projects } from "@/data/projects";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";

/** How many cards show before the visitor asks for the rest. Two full rows. */
const INITIAL_VISIBLE = 4;

/**
 * Two-up grid of featured work.
 *
 * Each thumbnail is a fixed 19:8 box — the ratio of a wide desktop browser
 * screenshot — with `fill` + `sizes`, so swapping in a real screenshot of any
 * resolution cannot change the card's height or make the row ragged. Capture
 * screenshots at that ratio or `object-cover` will crop them.
 *
 * The first two are eager-loaded because on a desktop viewport they are usually
 * just below the fold; the rest lazy-load.
 *
 * Only the first `INITIAL_VISIBLE` render up front — the rest mount when the
 * button below the grid is pressed, and animate in on their own because a
 * freshly mounted child inherits the parent list's current variant.
 *
 * A project with an entry in `src/data/case-studies.ts` gains a third link in
 * the overlay, pointing at its own page. `locale` is threaded in for that href,
 * since a case study lives under the locale segment.
 */
export function Projects({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["projects"];
}) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hasMore = projects.length > INITIAL_VISIBLE;

  return (
    <section id="projects" className="section-y" aria-labelledby="projects-title">
      <div className="wrap flex flex-col gap-12">
        <SectionHead
          titleId="projects-title"
          eyebrow={dict.eyebrow}
          titleLead={dict.titleLead}
          titleAccent={dict.titleAccent}
          intro={dict.intro}
        />

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          id="projects-grid"
          className="grid gap-6 md:grid-cols-2"
        >
          {visible.map((project, index) => {
            const copy = dict.items[project.id];
            const study = caseStudyFor(project.id);
            /*
             * Cards past the initial batch mount after the list has already
             * played its enter animation. `whileInView` with `once: true` never
             * fires again, so a child that inherited the list's variants would
             * sit at `hidden` — in the DOM but at opacity 0. These drive their
             * own animation instead, with a stagger of their own.
             */
            const isRevealed = index >= INITIAL_VISIBLE;

            return (
              <motion.li
                key={project.id}
                variants={isRevealed ? undefined : staggerChild}
                initial={isRevealed ? { opacity: 0, y: 18 } : undefined}
                animate={isRevealed ? { opacity: 1, y: 0 } : undefined}
                transition={
                  isRevealed
                    ? {
                        duration: 0.55,
                        delay: (index - INITIAL_VISIBLE) * 0.09,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }
                    : undefined
                }
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <div className="relative aspect-19/8 overflow-hidden border-b border-border bg-muted">
                    <Image
                      src={project.image}
                      alt={copy.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority={index < 2}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />

                    {/* Always on below `md`: a touch screen has no hover, so a
                        reveal-on-hover overlay hides these links outright on a
                        phone. From `md` up it goes back to appearing on hover,
                        and on keyboard focus within the card so the links stay
                        reachable without a pointer. */}
                    <div className="absolute inset-0 flex flex-wrap content-end items-end justify-end gap-2 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-3 opacity-100 transition-opacity duration-300 sm:p-4 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                      
                      {/* Same pill as the demo link, one step quieter, so the
                          two read as a pair rather than compete. The treatment
                          does not change when there is no demo beside it — the
                          link is the same thing on every card, so it looks the
                          same on every card. */}
                      {study ? (
                        <Link
                          href={caseStudyHref(locale, study.slug)}
                          className="flex items-center gap-1.5 rounded-md bg-white/15 px-2.5 py-2 text-xs font-medium text-white backdrop-blur-sm transition-transform hover:scale-105 sm:px-3 sm:text-sm"
                        >
                          <FileText className="size-4" aria-hidden />
                          {dict.caseStudy}
                          <span className="sr-only">— {copy.title}</span>
                        </Link>
                      ) : null}
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 rounded-md bg-white px-2.5 py-2 text-xs font-medium text-neutral-900 transition-transform hover:scale-105 sm:px-3 sm:text-sm"
                        >
                          {dict.liveDemo}
                          <ArrowUpRight className="size-4" aria-hidden />
                          <span className="sr-only">— {copy.title}</span>
                        </a>
                      ) : null}
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={dict.sourceCode.replace(
                            "{project}",
                            copy.title,
                          )}
                          className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white/15 text-white backdrop-blur-sm transition-transform hover:scale-105"
                        >
                          <SiGithub
                            className="size-[18px]"
                            aria-hidden
                            focusable={false}
                          />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="font-display text-lg transition-colors duration-300 group-hover:text-primary">
                      {copy.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {copy.description}
                    </p>
                    {/* <ul className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <Badge variant="secondary" className="font-mono text-xs">
                            {tag}
                          </Badge>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>

        {hasMore ? (
          <div className="flex justify-center">
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => setShowAll((open) => !open)}
              aria-expanded={showAll}
              aria-controls="projects-grid"
              className="group h-11 gap-2 px-6 text-sm"
            >
              {showAll ? dict.showLess : dict.showMore}
              <ChevronDown
                aria-hidden
                className={`size-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : "group-hover:translate-y-0.5"
                }`}
              />
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
