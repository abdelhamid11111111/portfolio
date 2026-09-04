"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import { SectionHead } from "@/components/site/SectionHead";
import { staggerChild, staggerParent } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/card";
import { services } from "@/data/services";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * Three service cards on one row from `md` up.
 *
 * The cards cascade in as a group rather than each running its own observer —
 * one parent owns the stagger, so the timing stays consistent no matter how
 * many services `data/services.ts` grows to. Icons and order come from the
 * data; every string is looked up in the dictionary by the same id.
 */
export function Services({ dict }: { dict: Dictionary["services"] }) {
  return (
    <section id="services" className="section-y" aria-labelledby="services-title">
      <div className="wrap flex flex-col gap-12">
        <SectionHead
          titleId="services-title"
          eyebrow={dict.eyebrow}
          titleLead={dict.titleLead}
          titleAccent={dict.titleAccent}
          intro={dict.intro}
        />

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          className="grid gap-5 md:grid-cols-3"
        >
          {services.map(({ id, icon: Icon }) => {
            const copy = dict.items[id];

            return (
              <motion.li key={id} variants={staggerChild} className="h-full">
                <Card className="group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:ring-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  {/* Wash that fades in on hover — carries the accent without
                      repainting the card's ring or text. */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="relative flex h-full flex-col gap-4">
                    <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-muted/60 text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                      <Icon className="size-5" aria-hidden />
                    </span>

                    <h3 className="font-display text-xl">{copy.title}</h3>

                    {/* flex-1 pins the bordered list to the bottom of the card,
                        so the three lists stay aligned even when one title
                        wraps to a second line. */}
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {copy.description}
                    </p>

                    <ul className="mt-1 flex flex-col gap-2 border-t border-border pt-4">
                      {copy.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
