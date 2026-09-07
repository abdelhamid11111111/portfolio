"use client";

import { motion } from "motion/react";
import { SectionHead } from "@/components/site/SectionHead";
import { staggerChild, staggerParent } from "@/components/motion/Reveal";
import { TechIcon } from "@/components/site/TechIcon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillCategories } from "@/data/skills";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * The stack, split across tabs.
 *
 * Tabs rather than stacked grids: the full list is ~35 items, which reads as a
 * wall when shown at once, and the categories are genuinely alternatives to
 * each other. Radix keeps the roving-tabindex and arrow-key behaviour, so this
 * stays keyboard-navigable for free.
 *
 * Product names live in the data (they are not translated); each category's
 * label and blurb come from the dictionary.
 */
export function TechStack({ dict }: { dict: Dictionary["skills"] }) {
  return (
    <section
      id="skills"
      className="section-y border-y border-border bg-muted/25"
      aria-labelledby="skills-title"
    >
      <div className="wrap flex flex-col gap-12">
        <SectionHead
          titleId="skills-title"
          eyebrow={dict.eyebrow}
          titleLead={dict.titleLead}
          titleAccent={dict.titleAccent}
          intro={dict.intro}
          align="center"
        />

        <Tabs defaultValue={skillCategories[0].id} className="gap-8">
          {/* The list wraps to two rows on narrow screens, which the primitive
              is not shaped for: it pins itself to `h-8` and its triggers to the
              full height of that one row, so a wrapped row fell outside the
              tinted pill. Overriding the height on the same variant is what
              lets the background grow with the rows; `flex-none` then sizes
              each trigger to its label instead of stretching two of them
              across a half-empty second row. */}
          <TabsList className="mx-auto flex-wrap justify-center gap-1 p-1 group-data-horizontal/tabs:h-auto">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="h-auto flex-none px-4 py-2 text-sm"
              >
                {dict.categories[category.id].label}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="flex flex-col gap-7"
            >
              <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground text-pretty">
                {dict.categories[category.id].blurb}
              </p>

              <motion.ul
                variants={staggerParent}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 items-stretch gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4"
              >
                {category.skills.map((skill) => (
                  <motion.li key={skill.name} variants={staggerChild}>
                    {/* Two columns on a phone leave ~130px of text room, and
                        `truncate` was spending it on an ellipsis — "Next.js API
                        Ro…" tells a visitor nothing. Wrapping to a second line
                        costs a few pixels of card height and keeps every name
                        readable; the tiles are stretched to a common height by
                        the grid, so a wrapped one does not make the row ragged. */}
                    <div className="group flex h-full items-center gap-2.5 rounded-lg border border-border bg-card px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 sm:gap-3 sm:px-4 sm:py-3.5">
                      <TechIcon
                        name={skill.icon}
                        className="size-5 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                      />
                      <span className="min-w-0 text-sm leading-snug font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
