"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/**
 * Light/dark switch for the header.
 *
 * Both icons are always in the markup and the `dark:` variant decides which one
 * is visible, so the button renders identically on the server and the client —
 * no mount flag, no hydration mismatch, and no flash of the wrong icon.
 * next-themes sets the class on <html> before first paint, so by the time
 * anything is visible the correct icon is already the one showing.
 *
 * The label stays a generic "toggle" rather than naming the target theme: the
 * current theme is not known during render, and a label that lies is worse
 * than one that is merely generic.
 */
export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-9 rounded-full"
      aria-label={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Moon className="size-[18px] dark:hidden" aria-hidden />
      <Sun className="hidden size-[18px] dark:block" aria-hidden />
    </Button>
  );
}
