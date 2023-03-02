/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  images: {
    domains: ["upload.wikimedia.org", "origin-www.nycgo.com"],
  },
};

module.exports = nextConfig;
