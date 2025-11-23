// apps/readboot/next.config.js
import path from 'path';
import { fileURLToPath } from 'url';

// We must recreate __dirname because it doesn't exist in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, '../../packages/ui/src/styles')
    ],
  },
};

export default nextConfig;
