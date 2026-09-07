import type { CaseStudy } from "@/types";

/**
 * The long-form pages behind the "Case study" link on a project card.
 *
 * Structure only: slug, screenshots and stack live here, every word lives in
 * `caseStudies.items.<project>` in `src/i18n/dictionaries`. A project without
 * an entry here simply has no case study link on its card — nothing else to
 * turn off.
 *
 * TODO: every `image` below points at an existing project screenshot so the
 * page renders today. Replace them with real captures:
 *   1. drop the files in `public/case-studies/<slug>/`,
 *   2. point `cover` and each block at any shot; both default to a 19:8 box,
 *      and anything shaped differently declares its own `coverRatio` / `ratio`
 *      as width / height so the box follows the file rather than cropping it,
 *   3. update the matching `title`, `body` and `alt` in *both* dictionaries.
 *
 * Adding a case study is three steps: an entry here, an `items` entry in
 * `en.ts` and the same in `fr.ts`. Miss one of the dictionaries and the build
 * fails rather than the page rendering blank.
 */
export const caseStudies: readonly CaseStudy[] = [
  {
    id: "Event Ticketing Platform",
    slug: "event-ticketing",
    cover: "/projects/ticket.png",
    // 2880x1792 — a full-page capture, much taller than a viewport shot.
    coverRatio: 2880 / 1792,
    liveUrl: "https://sale-ticket.vercel.app/",
    repoUrl: "https://github.com/abdelhamid11111111/sale-ticket",
    stack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Prisma", icon: "prisma" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Vercel", icon: "vercel" },
    ],
    blocks: [
      { id: "browse-events", image: "/projects/event.png" },
      { id: "checkout", image: "/projects/checkout.png" },
      { id: "my-tickets", image: "/projects/urtickets.png" },
      // The dashboard is the part a live demo never shows, so it gets three
      // steps of its own: the overview wide, then the two screens behind it.
      {
        id: "admin-overview",
        image: "/projects/dashboardonee.png",
        // 1880x817 — a touch taller than the 19/8 default, which was cropping
        // the "Revenue Analytics" heading off the top.
        ratio: 1880 / 817,
        wide: true,
      },
      { id: "admin-events", image: "/projects/dashboardtwo.png" },
      { id: "admin-revenue", image: "/projects/dashboardlast.png" },
      { id: "orders", image: "/projects/crud.png" },
    ],
  },
  {
    id: "workout-community",
    slug: "workout-community",
    cover: "/projects/workout.png",
    liveUrl: "https://workout-community.vercel.app/",
    repoUrl: "https://github.com/abdelhamid11111111/workout-community",
    stack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Prisma", icon: "prisma" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "BetterAuth", icon: "betterauth" },
    ],
    // Every shot is a dense dashboard, so they all run full width — at half
    // the container these tables and charts are decoration, not evidence.
    blocks: [
      {
        id: "my-challenges",
        image: "/projects/mychallenges.png",
        ratio: 1880 / 817,
        wide: true,
      },
      { id: "admin-dashboard", image: "/projects/dash1.png", wide: true },
      { id: "training-habits", image: "/projects/moreData.png", wide: true },
      { id: "top-challenges", image: "/projects/top.png", wide: true },
      { id: "visitor-analytics", image: "/projects/analyticsone.png", wide: true },
      { id: "traffic-sources", image: "/projects/analyticstwo.png", wide: true },
      { id: "manage-challenges", image: "/projects/crudmanag.png", wide: true },
      { id: "members-overview", image: "/projects/users.png", wide: true },
      { id: "member-list", image: "/projects/userslast.png", wide: true },
    ],
  },
  {
    id: "HR-System",
    slug: "hr-system",
    cover: "/projects/hr.png",
    // 1910x811 — the employee list, the screen the app opens on.
    coverRatio: 1910 / 811,
    // No live demo: it runs against a local database, so the case study is the
    // only way to see it.
    repoUrl: "https://github.com/abdelhamid11111111/hr-platform",
    stack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Prisma", icon: "prisma" },
      { name: "MySQL", icon: "mysql" },
      { name: "Jest", icon: "jest" },
    ],
    // Every shot is a full screen with the sidebar in it, so they all run full
    // width — at half the container the tables stop being readable.
    blocks: [
      {
        id: "employees",
        image: "/projects/emp.png",
        ratio: 1912 / 808,
        wide: true,
      },
      {
        id: "departments",
        image: "/projects/dep.png",
        ratio: 1912 / 808,
        wide: true,
      },
      {
        id: "employee-profile",
        image: "/projects/emppage.png",
        ratio: 1912 / 808,
        wide: true,
      },
      {
        id: "employment-details",
        image: "/projects/emppagetwo.png",
        ratio: 1912 / 808,
        wide: true,
      },
      {
        id: "reviews",
        image: "/projects/emprev.png",
        ratio: 1912 / 808,
        wide: true,
      },
      {
        id: "reports",
        image: "/projects/empdata.png",
        ratio: 1912 / 808,
        wide: true,
      },
    ],
  },
] as const;

/** Lookup used by the project grid to decide whether a card gets the link. */
export function caseStudyFor(projectId: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.id === projectId);
}

export function caseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

/** `/<locale>/projects/<slug>` — the one place the route shape is written. */
export function caseStudyHref(locale: string, slug: string) {
  return `/${locale}/projects/${slug}`;
}
