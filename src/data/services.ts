import { LayoutDashboard, Rocket, Blocks } from "lucide-react";
import type { Service } from "@/types";

/**
 * Order and icon only. The copy for each id lives under
 * `services.items` in every dictionary.
 */
export const services: readonly Service[] = [
  { id: "landing-pages", icon: Rocket },
  { id: "web-apps", icon: Blocks },
  { id: "dashboards", icon: LayoutDashboard },
] as const;
