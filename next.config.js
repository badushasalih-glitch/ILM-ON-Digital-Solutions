/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    // Disable disk caching on OneDrive to prevent file-locking slowdowns
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
