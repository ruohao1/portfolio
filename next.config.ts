import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      // optional: if you ever use other Unsplash hosts
      // { protocol: 'https', hostname: 'plus.unsplash.com', pathname: '/**' },
      // { protocol: 'https', hostname: 'source.unsplash.com', pathname: '/**' },
    ],
  },
};

export default nextConfig;
