/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose", "passport-local-mongoose"],
  },
};

module.exports = nextConfig;
