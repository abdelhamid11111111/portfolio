import { SocialLinks } from "@/components/site/SocialLinks";
import { navLinks, site } from "@/data/site";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function SiteFooter({
  nav,
  footer,
  social,
}: {
  nav: Dictionary["nav"];
  footer: Dictionary["footer"];
  social: Dictionary["social"];
}) {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="wrap flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <a href="#top" className="font-display text-lg tracking-tight">
            {site.shortName}
            <span className="text-primary">.</span>
          </a>
          <p className="text-sm text-muted-foreground">
            {footer.role} · {footer.location}
          </p>
        </div>

        <nav aria-label={nav.footer}>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks social={social} size="sm" />
      </div>

      <div className="wrap border-t border-border py-5">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. {footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
