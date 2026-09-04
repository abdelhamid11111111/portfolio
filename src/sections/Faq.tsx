import { SectionHead } from "@/components/site/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqOrder } from "@/data/faq";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * Single-open accordion, everything collapsed on arrival.
 *
 * `collapsible` so the open item can be closed again rather than one always
 * being forced open. This section is a server component — the Radix accordion
 * carries its own client boundary, so nothing else here needs one.
 */
export function Faq({ dict }: { dict: Dictionary["faq"] }) {
  return (
    <section id="faq" className="section-y" aria-labelledby="faq-title">
      <div className="wrap flex flex-col gap-12">
        <SectionHead
          titleId="faq-title"
          eyebrow={dict.eyebrow}
          titleLead={dict.titleLead}
          titleAccent={dict.titleAccent}
          intro={dict.intro}
          align="center"
        />

        <Reveal className="mx-auto w-full max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqOrder.map((id) => (
              <AccordionItem key={id} value={id}>
                <AccordionTrigger className="text-left font-display text-base hover:text-primary sm:text-lg">
                  {dict.items[id].question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
                  {dict.items[id].answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
