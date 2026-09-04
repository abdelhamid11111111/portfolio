import type { Project } from "@/types";

/**
 * TODO: replace with real project data.
 *
 * To swap one in: drop a 16:10 screenshot into `public/projects/`, point
 * `image` at it, and update the title, description and alt text under
 * `projects.items.<id>` in *both* dictionaries. Leave `liveUrl` or `repoUrl`
 * out entirely and that button disappears from the card.
 */
export const projects: readonly Project[] = [
  {
    id: "dental-clinic",
    image: "/projects/project-1.png",
    tags: ["Next.js", "TypeScript", "Sanity"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "driving-school",
    image: "/projects/project-2.png",
    tags: ["Next.js", "Tailwind CSS", "Motion"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "admin-dashboard",
    image: "/projects/project-3.png",
    tags: ["React", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "chat-app",
    image: "/projects/project-4.png",
    tags: ["Node.js", "Pusher", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
  },
] as const;
