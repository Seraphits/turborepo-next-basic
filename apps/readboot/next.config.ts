import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
      },
    ],
  },
  // Explicitly typed options prevent "magic string" errors
};

export default nextConfig;
