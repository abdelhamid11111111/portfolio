import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { emailHref, site } from "@/data/site";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";

const sizes = {
  sm: "size-9",
  md: "size-10 lg:size-12",
  fluid: "size-10 lg:size-[clamp(2.5rem,6vh,3rem)]",
} as const;

/**
 * The social row, shared by the hero and the footer so the two cannot drift.
 *
 * GitHub comes from Simple Icons and LinkedIn from Font Awesome: lucide v1
 * dropped brand marks entirely, and Simple Icons no longer ships a LinkedIn
 * glyph. Both render in `currentColor`, so they still match.
 */
export function SocialLinks({
  social,
  className,
  size = "md",
}: {
  social: Dictionary["social"];
  className?: string;
  /**
   * `fluid` is the hero's variant: same 48px target from `lg` up, but it gives
   * that back against `vh` so the row still clears the fold on a short laptop
   * window instead of being the one thing pushed under it.
   */
  size?: "sm" | "md" | "fluid";
}) {
  const items = [
    { label: social.github, href: site.githubUrl, Icon: SiGithub, external: true },
    {
      label: social.linkedin,
      href: site.linkedinUrl,
      Icon: FaLinkedinIn,
      external: true,
    },
    { label: social.email, href: emailHref, Icon: Mail, external: false },
  ];

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {items.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={cn(
              "flex items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary",
              sizes[size],
            )}
          >
            <Icon className="size-[18px]" aria-hidden focusable={false} />
          </a>
        </li>
      ))}
    </ul>
  );
}
