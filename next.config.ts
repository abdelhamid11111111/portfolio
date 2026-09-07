import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /*
     * Next 16 requires this allowlist, and it defaults to `[75]` alone — a
     * `quality` prop outside the list is silently coerced to the nearest entry
     * rather than honoured. 90 is here for the case study screenshots: they are
     * dense UI captures full of small text, which is exactly the content JPEG-
     * style quantisation smears first. 75 stays for everything else.
     */
    qualities: [75, 90],
  },
};

export default nextConfig;
