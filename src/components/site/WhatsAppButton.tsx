import { SiWhatsapp } from "react-icons/si";

/**
 * Floating WhatsApp action, fixed bottom-right for the whole page.
 *
 * It sits above the sticky header's stacking context but below any dialog, and
 * clears the iOS home indicator via `env(safe-area-inset-bottom)`. The label is
 * visually hidden rather than absent, so the control is announced as more than
 * "link".
 */
export function WhatsAppButton({
  href,
  label,
}: {
  /** Built from the locale's prefill text in the layout. */
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-4 z-50 flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:right-5 sm:size-14"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <SiWhatsapp className="size-6 sm:size-7" aria-hidden focusable={false} />
      <span className="sr-only">{label}</span>
      {/* Slow pulse to draw the eye once, without animating forever in a way
          that competes with the content. Suppressed under reduced motion by the
          global rule in globals.css. */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.5s]"
      />
    </a>
  );
}
