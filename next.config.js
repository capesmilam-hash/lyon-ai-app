/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  /* 
   * Static File Export Configuration:
   * To build as a static export (e.g., for GitHub Pages, S3, or static hosting),
   * uncomment the line below. Note that static export mode serves client-side 
   * features while standard Node.js mode enables full-stack API routes.
   */
  // output: 'export',
};

module.exports = nextConfig;
