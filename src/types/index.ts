/** Shared shapes for the page content in `src/data`. */

import type { LucideIcon } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";

/*
 * Ids are derived from the dictionary rather than declared independently. That
 * ties `src/data` to `src/i18n`: renaming a service in the dictionary without
 * renaming it in the data (or the reverse) is a type error, so the two halves
 * of a section cannot drift apart silently.
 */
export type ServiceId = keyof Dictionary["services"]["items"];
export type ProjectId = keyof Dictionary["projects"]["items"];
export type SkillCategoryId = keyof Dictionary["skills"]["categories"];
export type FaqId = keyof Dictionary["faq"]["items"];
export type NavKey = "services" | "skills" | "projects" | "faq" | "contact";

/** Structure only — the title, description and bullets come from the dictionary. */
export type Service = {
  id: ServiceId;
  /** A lucide icon component, passed by reference so the card stays generic. */
  icon: LucideIcon;
};

/** Keys of the inline brand-logo set in `components/site/TechIcon.tsx`. */
export type TechIconName =
  | "react"
  | "nextjs"
  | "javascript"
  | "typescript"
  | "tailwind"
  | "bootstrap"
  | "shadcn"
  | "html"
  | "css"
  | "vite"
  | "eslint"
  | "npm"
  | "api"
  | "nodejs"
  | "pusher"
  | "betterauth"
  | "oauth"
  | "postman"
  | "prisma"
  | "jwt"
  | "playwright"
  | "jest"
  | "postgresql"
  | "mysql"
  | "mongodb"
  | "git"
  | "github"
  | "githubactions"
  | "vercel"
  | "cloudflare"
  | "sentry"
  | "supabase"
  | "railway"
  | "cloudinary"
  | "sanity";

/** Product names are not translated, so they live here rather than in the dictionary. */
export type Skill = {
  name: string;
  icon: TechIconName;
};

export type SkillCategory = {
  id: SkillCategoryId;
  skills: readonly Skill[];
};

/** Structure only — title, description and alt text come from the dictionary. */
export type Project = {
  id: ProjectId;
  /** Path under `public/`. Swap for a real screenshot at the same ratio (16:10). */
  image: string;
  /** Short tech labels rendered as badges. Product names, so not translated. */
  tags: readonly string[];
  /** Omit either link and the corresponding button is not rendered. */
  liveUrl?: string;
  repoUrl?: string;
};

export type NavLink = {
  /** Must match a section `id` on the page — it doubles as the scroll target. */
  href: string;
  /** Key into `dictionary.nav` for the visible label. */
  key: NavKey;
};
