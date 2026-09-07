import type { Project } from "@/types";

/**
 * TODO: replace with real project data.
 *
 * To swap one in: drop a 19:8 screenshot into `public/projects/`, point
 * `image` at it, and update the title, description and alt text under
 * `projects.items.<id>` in *both* dictionaries. Leave `liveUrl` or `repoUrl`
 * out entirely and that button disappears from the card.
 *
 * Order matters: the section shows the first `INITIAL_VISIBLE` (see
 * `sections/Projects.tsx`) and hides the rest behind a "show more" button, so
 * put the strongest work at the top of the array.
 */
export const projects: readonly Project[] = [
  {
    id: "dental-clinic",
    image: "/projects/dentaleHeroPic.png",
    tags: ["Next.js", "TypeScript", "Sanity"],
    liveUrl: "https://dentiste-landingpage.vercel.app/#",
    repoUrl: "https://github.com/abdelhamid11111111/dentiste-landingpage",
  },
  {
    id: "Event Ticketing Platform",
    image: "/projects/TicketHeroPic.png",
    tags: ["Next.js", "Tailwind CSS", "Motion"],
    liveUrl: "https://sale-ticket.vercel.app/",
    repoUrl: "https://github.com/abdelhamid11111111/sale-ticket",
  },
  {
    id: "English School",
    image: "/projects/englishSchool.png",
    tags: ["React", "Prisma", "PostgreSQL"],
    liveUrl: "https://english-school-tau.vercel.app/",
    repoUrl: "https://github.com/abdelhamid11111111/english-school",
  },
  {
    id: "Architect",
    image: "/projects/architectLandingpage.png",
    tags: ["Node.js", "Pusher", "MongoDB"],
    liveUrl: "https://architect-landingpage-lime.vercel.app/",
    repoUrl: "https://github.com/abdelhamid11111111/architect-landingpage",
  },
  {
    id: "workout-community",
    image: "/projects/workout.png",
    tags: ["Next.js", "Tailwind CSS", "Motion"],
    liveUrl: "https://workout-community.vercel.app/",
    repoUrl: "https://github.com/abdelhamid11111111/workout-community",
  },
  {
    id: "gym",
    image: "/projects/gym.png",
    tags: ["Next.js", "Tailwind CSS", "Motion"],
    liveUrl: "https://gym-landingpage-zeta.vercel.app/",
    repoUrl: "https://github.com/abdelhamid11111111/gym-landingpage",
  },
  {
    id: "HR-System",
    image: "/projects/hr.png",
    tags: ["Next.js", "TypeScript", "Prisma"],
    repoUrl: "https://github.com/abdelhamid11111111/hr-platform",
  },
] as const;
