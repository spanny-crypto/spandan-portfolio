/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // static HTML in /out: fully crawlable, no server needed
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
