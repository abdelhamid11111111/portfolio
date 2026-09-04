import { Clock, Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { SectionHead } from "@/components/site/SectionHead";
import { Card } from "@/components/ui/card";
import { emailHref, site, whatsappHref } from "@/data/site";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * Form on the left, direct-contact details on the right.
 *
 * The WhatsApp link is repeated here rather than relying on the floating
 * button alone: someone who has scrolled this far is deciding how to get in
 * touch, and the choice should be in front of them, not in the corner.
 */
export function Contact({
  dict,
  whatsapp,
}: {
  dict: Dictionary["contact"];
  whatsapp: Dictionary["whatsapp"];
}) {
  return (
    <section
      id="contact"
      className="section-y relative overflow-hidden border-t border-border bg-muted/25"
      aria-labelledby="contact-title"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />

      <div className="wrap flex flex-col gap-12">
        <SectionHead
          titleId="contact-title"
          eyebrow={dict.eyebrow}
          titleLead={dict.titleLead}
          titleAccent={dict.titleAccent}
          intro={dict.intro}
        />

        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
          <Reveal>
            <Card className="p-6 sm:p-8">
              <ContactForm dict={dict.form} />
            </Card>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <Card className="flex flex-col gap-5 p-6 sm:p-7">
              <h3 className="font-display text-lg">{dict.direct.title}</h3>

              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href={emailHref}
                    className="group flex items-start gap-3.5 text-sm"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                      <Mail className="size-4" aria-hidden />
                    </span>
                    <span className="flex flex-col gap-0.5 pt-1">
                      <span className="text-xs text-muted-foreground">
                        {dict.direct.emailLabel}
                      </span>
                      <span className="break-all transition-colors group-hover:text-primary">
                        {site.email}
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href={whatsappHref(whatsapp.prefill)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3.5 text-sm"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                      <SiWhatsapp
                        className="size-4"
                        aria-hidden
                        focusable={false}
                      />
                    </span>
                    <span className="flex flex-col gap-0.5 pt-1">
                      <span className="text-xs text-muted-foreground">
                        {dict.direct.whatsappLabel}
                      </span>
                      <span className="transition-colors group-hover:text-primary">
                        {dict.direct.whatsappCta}
                      </span>
                    </span>
                  </a>
                </li>

                <li className="flex items-start gap-3.5 text-sm">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-primary">
                    <MapPin className="size-4" aria-hidden />
                  </span>
                  <span className="flex flex-col gap-0.5 pt-1">
                    <span className="text-xs text-muted-foreground">
                      {dict.direct.basedInLabel}
                    </span>
                    <span>{dict.direct.location}</span>
                  </span>
                </li>
              </ul>
            </Card>

            {/* `flex-row` is explicit: Card's own base class sets flex-col. */}
            <Card className="flex flex-row items-start gap-3.5 p-6 sm:p-7">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-primary">
                <Clock className="size-4" aria-hidden />
              </span>
              <div className="flex flex-col gap-1 pt-0.5">
                <p className="text-sm font-medium">{dict.direct.responseTitle}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {dict.direct.responseBody}
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
