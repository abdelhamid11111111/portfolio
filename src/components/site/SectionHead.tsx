import { Reveal } from "@/components/motion/Reveal";

/**
 * The header every section opens with: mono eyebrow, display title, and a line
 * of context.
 *
 * The title arrives pre-split as `lead` + `accent` rather than as JSX, because
 * which words carry the accent colour differs per language — English "Recent
 * projects" accents the noun, French "Projets récents" the adjective.
 * Splitting in the dictionary keeps that decision with the translator.
 *
 * `align` exists because the stack and FAQ sections read better centred, while
 * the wider grids (services, projects) want a left edge that lines up with the
 * cards below them.
 */
export function SectionHead({
  eyebrow,
  titleLead,
  titleAccent,
  titleId,
  intro,
  align = "left",
}: {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  /** Id for the <h2>. Each section's `aria-labelledby` points at this. */
  titleId: string;
  intro?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={
        centered
          ? "mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
          : "flex max-w-2xl flex-col gap-4"
      }
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2
        id={titleId}
        className="font-display text-3xl leading-[1.12] text-balance sm:text-4xl md:text-[2.75rem]"
      >
        {titleLead} <span className="text-primary">{titleAccent}</span>
      </h2>
      {intro ? (
        <p className="text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
