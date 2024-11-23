import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  swcMinify: true,typescript: {
    // ⚠️ Only use this during development
    ignoreBuildErrors: true,
  },
  eslint: {
    // ⚠️ Only use this during development
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
