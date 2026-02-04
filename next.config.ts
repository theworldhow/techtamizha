import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages
  output: "export",
  
  // Trailing slash for static hosting
  trailingSlash: true,
  
  // Image optimization settings - use unoptimized for static export
  images: {
    unoptimized: true,
    // Allow images from these domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/**",
      },
    ],
    // Image formats for optimization
    formats: ["image/avif", "image/webp"],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable experimental features for performance
  experimental: {
    // Optimize package imports
    optimizePackageImports: ["@supabase/supabase-js"],
  },
};

export default nextConfig;
