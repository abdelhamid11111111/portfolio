import { SectionLink } from "@/components/site/SectionLink";
import { SocialLinks } from "@/components/site/SocialLinks";
import { navLinks, site } from "@/data/site";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";

export function SiteFooter({
  locale,
  nav,
  footer,
  social,
}: {
  /** Needed so the section links still work from a case study page. */
  locale: Locale;
  nav: Dictionary["nav"];
  footer: Dictionary["footer"];
  social: Dictionary["social"];
}) {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="wrap flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <SectionLink
            locale={locale}
            hash="#top"
            className="font-display text-lg tracking-tight"
          >
            {site.shortName}
            <span className="text-primary">.</span>
          </SectionLink>
          <p className="text-sm text-muted-foreground">
            {footer.role} · {footer.location}
          </p>
        </div>

        {/* <nav aria-label={nav.footer}>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <SectionLink
                  locale={locale}
                  hash={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {nav[link.key]}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav> */}

        <SocialLinks social={social} size="sm" />
      </div>

      <div className="wrap border-t border-border py-5">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. 
        </p>
      </div>
    </footer>
  );
}
