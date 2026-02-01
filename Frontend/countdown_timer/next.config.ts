import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // This helps with Netlify deployments
  },
  // Prevents some potential hydration issues
  reactStrictMode: true,
};

export default nextConfig;
