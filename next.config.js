/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["chart.js", "react-chartjs-2"],
};

module.exports = nextConfig;
