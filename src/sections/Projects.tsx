"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";
import { SectionHead } from "@/components/site/SectionHead";
import { staggerChild, staggerParent } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * Two-up grid of featured work.
 *
 * Each thumbnail is a fixed 16:10 box with `fill` + `sizes`, so swapping in a
 * real screenshot of any resolution cannot change the card's height or make
 * the row ragged. The first two are eager-loaded because on a desktop viewport
 * they are usually just below the fold; the rest lazy-load.
 */
export function Projects({ dict }: { dict: Dictionary["projects"] }) {
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
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project, index) => {
            const copy = dict.items[project.id];

            return (
              <motion.li key={project.id} variants={staggerChild}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-muted">
                    <Image
                      src={project.image}
                      alt={copy.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority={index < 2}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />

                    {/* Overlay appears on hover and on keyboard focus within the
                        card, so the links are reachable without a pointer. */}
                    <div className="absolute inset-0 flex items-end justify-end gap-2 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-neutral-900 transition-transform hover:scale-105"
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
                          className="flex size-9 items-center justify-center rounded-md bg-white/15 text-white backdrop-blur-sm transition-transform hover:scale-105"
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
                    <ul className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <Badge variant="secondary" className="font-mono text-xs">
                            {tag}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
