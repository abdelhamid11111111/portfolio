import type { FaqId } from "@/types";

/**
 * Accordion order. Every question and answer lives under `faq.items` in the
 * dictionaries — this file only decides what appears and in which order.
 */
export const faqOrder: readonly FaqId[] = [
  "services",
  "process",
  "timeline",
  "stack",
  "handover",
  "availability",
] as const;
