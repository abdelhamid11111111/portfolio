"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Applies the visitor's motion preference to every `motion` component at once.
 *
 * `reducedMotion="user"` makes the library drop transform and layout
 * animations when the OS asks for reduced motion, while still allowing opacity
 * to cross-fade — content appears, it just does not fly. Without this, only the
 * components that call `useReducedMotion` by hand would honour the setting, and
 * the variant-driven staggers in the services, stack and project grids would
 * keep sliding.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
