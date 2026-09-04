"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ElementType, ReactNode } from "react";

type RevealTag = "div" | "section" | "article" | "li" | "ul" | "span";

/**
 * Enter-on-scroll wrapper used by every section.
 *
 * `whileInView` with `once: true` means an element animates the first time it
 * crosses the viewport and then stays put — nothing re-animates on the way back
 * up, which is what makes a long page feel calm rather than busy. The
 * `-12% ` bottom margin delays the trigger slightly so the motion reads as a
 * response to scrolling rather than something that already finished off-screen.
 *
 * When the visitor has asked for reduced motion we render the finished state
 * directly: no transform, no opacity fade, no observer.
 */
export function Reveal({
  as = "div",
  className,
  delay = 0,
  y = 18,
  children,
}: {
  as?: RevealTag;
  className?: string;
  /** Stagger in seconds. Keep siblings under ~0.3s total. */
  delay?: number;
  /** Distance travelled, in px. Small by design. */
  y?: number;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as as keyof typeof motion] as ElementType;

  if (reduceMotion) {
    const Plain = as as ElementType;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

/**
 * Parent/child pair for lists where the items should cascade. The parent owns
 * the timing so the children do not each need a hand-computed delay.
 */
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
