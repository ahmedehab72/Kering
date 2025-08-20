// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kering.com",
        port: "",
        pathname: "/_next/image/**",
      },
      {
        protocol: "https",
        hostname: "assets-keringcom.keringapps.com",
        port: "",
        pathname: "/KERING_CROPS_4_7647e240b6.jpg",
      },
    ],
  },
};

export default nextConfig;
