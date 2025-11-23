// apps/readboot/next.config.js
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL: Tell Next.js to compile the UI package
  transpilePackages: ["@repo/ui"],

  sassOptions: {
    includePaths: [
      path.join(__dirname, '../../packages/ui/src/styles')
    ],
  },
};

export default nextConfig;
