import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    // Explicit project root: a stray package-lock.json in a parent directory
    // otherwise makes Turbopack infer the wrong workspace root.
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/",
        // Temporary until the real site lives here.
        destination: "https://github.com/justinoboyle",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
