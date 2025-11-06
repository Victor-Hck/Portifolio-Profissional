import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    allowedDevOrigins: ['*'],
  },
};

export default nextConfig;
