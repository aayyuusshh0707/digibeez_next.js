/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Add the eslint configuration here
  },
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "cdn.codingninjas.com",
    ], // Combine domains into a single array
  },
};

module.exports = nextConfig;
