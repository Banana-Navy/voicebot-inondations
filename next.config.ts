import type { NextConfig } from "next";

const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/voicebot-inondations" : "";

const nextConfig: NextConfig = {
  output: isPages ? "export" : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
