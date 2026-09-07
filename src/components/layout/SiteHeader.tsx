"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/site/LanguageToggle";
import { useSectionHref } from "@/components/site/SectionLink";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { navLinks, site } from "@/data/site";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/**
 * Sticky header: wordmark, section links with a scroll-spy underline, and the
 * language and theme switches. Below `md` the links collapse into a disclosure
 * panel. Reaching the contact section is the "Contact" nav link's job — there
 * is deliberately no separate CTA button competing with it.
 *
 * Two scroll-driven behaviours, both cheap:
 *  - past ~12px the bar gains a border and a blur, so it separates from the
 *    hero instead of floating on top of it;
 *  - an IntersectionObserver tracks which section owns the middle of the
 *    viewport and marks that link with `aria-current`, so the state is
 *    announced and not only drawn.
 */
export function SiteHeader({
  locale,
  nav,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
}) {
  const sectionHref = useSectionHref(locale);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(`#${entry.target.id}`);
        }
      },
      // A band across the middle of the screen: whichever section crosses it
      // is the one the visitor is reading.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /*
   * While the panel is open it covers the page, so the page behind it must not
   * scroll — on a phone a body that keeps moving under a fixed overlay is the
   * classic "why is it doing that" bug. Escape closes it for a keyboard user,
   * and the scrim below closes it for a thumb.
   */
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // A hash link inside the panel navigates without unmounting anything, so the
  // panel has to be closed by hand.
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent",
      )}
    >
      <div className="wrap flex h-[var(--nav-h)] items-center justify-between gap-3">
        <a
          href={sectionHref("#top")}
          className="font-display text-lg tracking-tight transition-colors hover:text-primary"
        >
          {site.shortName}
          <span className="text-primary">.</span>
        </a>

        <nav aria-label={nav.sections} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isCurrent = activeId === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={sectionHref(link.href)}
                    aria-current={isCurrent ? "true" : undefined}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground",
                      isCurrent ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {nav[link.key]}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-300",
                        isCurrent ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <LanguageToggle locale={locale} label={nav.switchLanguage} />
          <ThemeToggle label={nav.toggleTheme} />
          <Button
            variant="ghost"
            size="icon"
            className="size-9 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Tapping the page outside the panel closes it — the expected gesture on
          a phone, and the only alternative was hunting for the X. Ordered
          before the panel so the panel paints on top of it. */}
      {menuOpen ? (
        <button
          type="button"
          tabIndex={-1}
          aria-hidden
          onClick={closeMenu}
          className="fixed inset-x-0 bottom-0 top-[var(--nav-h)] cursor-default bg-background/50 backdrop-blur-[2px] md:hidden"
        />
      ) : null}

      {/* Absolute rather than in flow: as a sibling of the bar it grew the
          sticky header and pushed the hero down the page every time it opened.
          Anchored to the bar's bottom edge it drops over the hero instead, and
          the page behind it does not move. The header is sticky, so it is
          already the positioning context this hangs off. */}
      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-[var(--nav-h)] border-b border-border bg-background/95 shadow-lg shadow-black/5 backdrop-blur-lg md:hidden"
      >
        <nav aria-label={nav.sections} className="wrap py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={sectionHref(link.href)}
                  onClick={closeMenu}
                  aria-current={activeId === link.href ? "true" : undefined}
                  className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground aria-[current]:text-foreground"
                >
                  {nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
