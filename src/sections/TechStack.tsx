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
          <TabsList className="mx-auto h-auto flex-wrap justify-center gap-1 p-1">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 py-2 text-sm"
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
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
              >
                {category.skills.map((skill) => (
                  <motion.li key={skill.name} variants={staggerChild}>
                    <div className="group flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5">
                      <TechIcon
                        name={skill.icon}
                        className="size-5 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                      />
                      <span className="truncate text-sm font-medium">
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
