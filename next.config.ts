import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        /**
         * 1. EXCLUDE NEXTAUTH:
         * The (?!auth) part is a "negative lookahead".
         * It tells Next.js: "Proxy everything in /api/ EXCEPT for /api/auth."
         */
        source: "/api/:path",
        destination: "http://localhost:8080/api/:path*",
      },
    ];
  },
  // Optional: If you are seeing issues with cookies or headers
  // in a Docker/Proxy environment, you might need this:
  /* experimental: {
    externalDir: true,
  } 
  */
};

export default withNextIntl(nextConfig);
