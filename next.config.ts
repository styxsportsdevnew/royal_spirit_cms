import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    css: {
      loader: "postcss",
    },
  },
};

export default nextConfig;
