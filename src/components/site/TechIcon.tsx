import { Drama, KeyRound } from "lucide-react";
import {
  SiBetterauth,
  SiBootstrap,
  SiCloudflare,
  SiCloudinary,
  SiCss,
  SiEslint,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiOpenapiinitiative,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPusher,
  SiSanity,
  SiSentry,
  SiSupabase,
  SiReact,
  SiRailway,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { TechIconName } from "@/types";

/**
 * Brand marks for the stack section, from Simple Icons via `react-icons`.
 *
 * Three entries are deliberate substitutes rather than brand logos: `api` uses
 * the OpenAPI mark and `oauth` a generic key, because neither "REST" nor
 * "OAuth" is a company with a logo to borrow; `playwright` uses lucide's theatre
 * masks, because Simple Icons ships no Playwright glyph and a pair of masks is
 * what that project's own logo depicts anyway.
 *
 * Every glyph renders in `currentColor`, so the caller decides the colour and
 * the icons pick up the theme. That is on purpose — 26 brand palettes side by
 * side would fight each other, and several (Next.js, Vercel, ESLint) are near
 * black and would vanish in dark mode.
 */
const icons: Record<TechIconName, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  javascript: SiJavascript,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  shadcn: SiShadcnui,
  html: SiHtml5,
  css: SiCss,
  vite: SiVite,
  eslint: SiEslint,
  npm: SiNpm,
  api: SiOpenapiinitiative,
  nodejs: SiNodedotjs,
  pusher: SiPusher,
  betterauth: SiBetterauth,
  oauth: KeyRound,
  postman: SiPostman,
  prisma: SiPrisma,
  jwt: SiJsonwebtokens,
  playwright: Drama,
  jest: SiJest,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  githubactions: SiGithubactions,
  vercel: SiVercel,
  cloudflare: SiCloudflare,
  sentry: SiSentry,
  supabase: SiSupabase,
  railway: SiRailway,
  cloudinary: SiCloudinary,
  sanity: SiSanity,
};

export function TechIcon({
  name,
  className,
}: {
  name: TechIconName;
  className?: string;
}) {
  const Glyph = icons[name];
  // The label next to every icon already names the technology, so the mark
  // itself is decorative and must not be announced twice.
  return <Glyph className={className} aria-hidden focusable={false} />;
}
