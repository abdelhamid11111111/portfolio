import type { FaqId } from "@/types";

/**
 * Accordion order. Every question and answer lives under `faq.items` in the
 * dictionaries — this file only decides what appears and in which order.
 *
 * `process`, `timeline`, `stack` and `handover` are still in the dictionaries
 * but left out here: `follow` and `speed` answer the first two in plainer
 * words, and the last two were developer questions on a page written for
 * clients. Add any of those ids back to this array and the question reappears.
 */
export const faqOrder: readonly FaqId[] = [
  "services",
  "why-website",
  "google",
  "speed",
  "follow",
  "support",
  "problems",
  "availability",
] as const;
