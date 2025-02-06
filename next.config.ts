import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "registry.npmmirror.com",
      },
    ],
  },
};

export default nextConfig;
