/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "media.guim.co.uk" }],
  },
};

module.exports = nextConfig;
