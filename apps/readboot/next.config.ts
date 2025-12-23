import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui", "@repo/db"],
  // This tells Next.js to treat these as standard Node modules
  serverExternalPackages: ["mongoose", "mongodb"],
};

export default nextConfig;
