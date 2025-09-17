import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "http://guanaco-submitter.guanaco-backend.k2.chaiverse.com/endpoints/onsite/chat",
      },
    ];
  },
};

export default nextConfig;
