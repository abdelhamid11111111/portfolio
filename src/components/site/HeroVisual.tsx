"use client";

import { motion, useReducedMotion } from "motion/react";
import { SiNextdotjs, SiPostgresql, SiReact, SiTypescript } from "react-icons/si";
import { cn } from "@/lib/utils";

/**
 * The hero's right column: a mock editor window over a soft indigo/cyan glow,
 * with four tech chips drifting around it.
 *
 * Built from type and boxes rather than an illustration file — it scales to any
 * width, costs no image bytes, and follows the theme instead of being a light
 * or dark PNG. The whole thing is `aria-hidden`: it repeats what the headline
 * beside it already says, so a screen reader should skip it rather than read
 * out a decorative code snippet.
 *
 * Its type and padding are clamped against `vh` for the same reason as the rest
 * of the hero: on a short screen the window has to give back height so the CTAs
 * beside it stay above the fold.
 */

/** Token classes map to the chart ramp, so the snippet stays on-palette. */
const code = [
  [
    { t: "const", c: "text-chart-3" },
    { t: " developer", c: "text-foreground" },
    { t: " = ", c: "text-muted-foreground" },
    { t: "{", c: "text-muted-foreground" },
  ],
  [
    { t: "  name", c: "text-chart-2" },
    { t: ": ", c: "text-muted-foreground" },
    { t: "'Abdelhamid'", c: "text-chart-4" },
    { t: ",", c: "text-muted-foreground" },
  ],
  [
    { t: "  role", c: "text-chart-2" },
    { t: ": ", c: "text-muted-foreground" },
    { t: "'Full Stack'", c: "text-chart-4" },
    { t: ",", c: "text-muted-foreground" },
  ],
  [
    { t: "  stack", c: "text-chart-2" },
    { t: ": [", c: "text-muted-foreground" },
    { t: "'next'", c: "text-chart-4" },
    { t: ", ", c: "text-muted-foreground" },
    { t: "'node'", c: "text-chart-4" },
    { t: ", ", c: "text-muted-foreground" },
    { t: "'sql'", c: "text-chart-4" },
    { t: "],", c: "text-muted-foreground" },
  ],
  [
    { t: "  ships", c: "text-chart-2" },
    { t: ": ", c: "text-muted-foreground" },
    { t: "true", c: "text-chart-3" },
    { t: ",", c: "text-muted-foreground" },
  ],
  [{ t: "};", c: "text-muted-foreground" }],
];

/**
 * Floating tech marks, one per layer of the stack.
 *
 * Icon-only and anchored inside the container's `lg:px-14` gutter, so they sit
 * beside the window instead of on top of the snippet. They are hidden below
 * `lg`, where the column is too narrow to have a gutter to sit in — the code is
 * the point, and covering three lines of it to keep a decoration is a bad
 * trade.
 *
 * Offsets are percentages, not fixed pixels: the window shrinks on short
 * viewports, and at ~190px tall a `top-12` / `bottom-24` pair would land on the
 * same spot and stack two chips on top of each other.
 */
const chips = [
  { icon: SiReact, label: "React", pos: "left-0 top-[8%]", delay: 0 },
  { icon: SiNextdotjs, label: "Next.js", pos: "right-0 top-[34%]", delay: 0.8 },
  { icon: SiTypescript, label: "TypeScript", pos: "left-0 bottom-[28%]", delay: 1.6 },
  { icon: SiPostgresql, label: "PostgreSQL", pos: "right-0 bottom-[6%]", delay: 2.4 },
];

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden className="relative mx-auto w-full max-w-lg lg:max-w-none lg:px-14">
      {/* Glow. Two blurred blobs, clipped by the parent's padding. */}
      <div
        className="pointer-events-none absolute -inset-10 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(38% 42% at 28% 30%, var(--primary) 0%, transparent 70%), radial-gradient(38% 42% at 74% 72%, var(--brand-cyan) 0%, transparent 70%)",
          filter: "blur(56px)",
        }}
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative rounded-xl border border-border bg-card/90 shadow-2xl shadow-black/10 backdrop-blur-sm dark:shadow-black/40"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-[clamp(0.45rem,1.2vh,0.75rem)]">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            developer.ts
          </span>
        </div>

        {/* Snippet. Line numbers are a separate column so the code can wrap
            without the gutter wrapping with it. */}
        <div className="overflow-x-auto p-[clamp(0.7rem,1.7vh,1.25rem)]">
          <pre className="font-mono text-[clamp(10.5px,1.5vh,14px)] leading-[clamp(1.55,0.9vh,1.85)]">
            <code>
              {code.map((line, i) => (
                <motion.div
                  key={i}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.11 }}
                  className="flex gap-4 whitespace-pre"
                >
                  <span className="w-4 shrink-0 select-none text-right text-muted-foreground/40">
                    {i + 1}
                  </span>
                  <span>
                    {line.map((token, j) => (
                      <span key={j} className={token.c}>
                        {token.t}
                      </span>
                    ))}
                    {/* Caret parks at the end of the last line. */}
                    {i === code.length - 1 ? (
                      <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] animate-pulse bg-primary [animation-duration:1.1s]" />
                    ) : null}
                  </span>
                </motion.div>
              ))}
            </code>
          </pre>
        </div>

        {/* Status bar — a small dose of realism that also reads as a claim. */}
        <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-[clamp(0.35rem,1vh,0.625rem)] font-mono text-[clamp(9.5px,1.2vh,11px)] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            build passing
          </span>
          <span>0 errors · 0 warnings</span>
        </div>
      </motion.div>

      {chips.map(({ icon: Icon, label, pos, delay }) => (
        <motion.div
          key={label}
          title={label}
          className={cn(
            "absolute hidden size-11 items-center justify-center rounded-xl border border-border bg-card/95 shadow-lg shadow-black/5 backdrop-blur-sm lg:flex dark:shadow-black/30",
            pos,
          )}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={
            reduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: 1, y: [0, -9, 0] }
          }
          transition={{
            opacity: { duration: 0.5, delay: 0.9 + delay * 0.15 },
            scale: { duration: 0.5, delay: 0.9 + delay * 0.15 },
            y: {
              duration: 5,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Icon className="size-5 text-primary" />
        </motion.div>
      ))}
    </div>
  );
}
