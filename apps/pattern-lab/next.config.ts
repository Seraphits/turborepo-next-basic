import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [
      // process.cwd() points to 'apps/pattern-lab'.
      // We go up two levels to root, then into packages/ui.
      path.join(process.cwd(), '../../packages/ui/src/styles'),
    ],
  },
};

export default nextConfig;
