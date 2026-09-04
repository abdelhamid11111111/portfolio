import type { SkillCategory } from "@/types";

/**
 * The stack, grouped into the tabs rendered by `sections/TechStack.tsx`.
 *
 * Product names are not translated, so they stay here; each category's label
 * and blurb come from `skills.categories.<id>` in the dictionaries.
 *
 * Every `icon` must be a key of the inline logo set in
 * `components/site/TechIcon.tsx` — adding a skill means adding its glyph there
 * too.
 */
export const skillCategories: readonly SkillCategory[] = [
  {
    id: "frontend",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "shadcn/ui", icon: "shadcn" },
      { name: "Sanity", icon: "sanity" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Vite", icon: "vite" },
      { name: "ESLint", icon: "eslint" },
      { name: "npm", icon: "npm" },
    ],
  },
  {
    id: "backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "REST APIs", icon: "api" },
      { name: "Next.js API Routes", icon: "nextjs" },
      { name: "Prisma", icon: "prisma" },
      { name: "BetterAuth", icon: "betterauth" },
      { name: "OAuth", icon: "oauth" },
      { name: "JWT", icon: "jwt" },
      { name: "Pusher", icon: "pusher" },
      { name: "Postman", icon: "postman" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    id: "databases",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    id: "testing",
    skills: [
      { name: "Playwright", icon: "playwright" },
      { name: "Jest", icon: "jest" },
    ],
  },
  {
    id: "cloud",
    // Ordered by role rather than alphabetically: source control, then where it
    // deploys, then the services it talks to in production.
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Vercel", icon: "vercel" },
      { name: "Railway", icon: "railway" },
      { name: "Cloudflare", icon: "cloudflare" },
      { name: "Supabase", icon: "supabase" },
      { name: "Cloudinary", icon: "cloudinary" },
      { name: "Sentry", icon: "sentry" },
    ],
  },
] as const;
