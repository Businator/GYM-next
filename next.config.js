/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'media.guim.co.uk' }],
  },
  pageExtensions: ['tsx', 'jsx'],
};

module.exports = nextConfig;
