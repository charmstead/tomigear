/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose", "passport-local-mongoose"],
  },
};

module.exports = nextConfig;
