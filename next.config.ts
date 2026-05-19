import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.107", "localhost"],
  async redirects() {
    return [
      { source: "/member-tools", destination: "/", permanent: false },
      { source: "/retention-platform", destination: "/", permanent: false },
      { source: "/consultant", destination: "/", permanent: false },
      { source: "/contact", destination: "/", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
