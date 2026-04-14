import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/aylar-plastik" : "",
  assetPrefix: isProd ? "/aylar-plastik/" : "",
  trailingSlash: true,
};

export default nextConfig;
