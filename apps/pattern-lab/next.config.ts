import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // 1. Allow Next.js to compile the workspace package
  transpilePackages: ["@repo/ui"],

  // 2. SCSS Shared Path
  // We use process.cwd() to get the app folder, then go up two levels to packages
  sassOptions: {
    includePaths: [path.join(process.cwd(), '../../packages/ui/src/styles')],
  },
};

export default nextConfig;
