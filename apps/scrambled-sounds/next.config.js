import path from 'path';
import { fileURLToPath } from 'url';

// 1. ESM Shim for __dirname (Required because package.json is "type": "module")
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 2. Allow Next.js to compile the workspace package
  transpilePackages: ["@repo/ui"],

  // 3. SCSS Shared Path
  sassOptions: {
    includePaths: [path.join(__dirname, '../../packages/ui/src/styles')],
  },
};

export default nextConfig;
