/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  compiler: {
    styledComponents: true,
  },
  // Remove the modularizeImports block to prevent path resolution errors
};

module.exports = nextConfig;
