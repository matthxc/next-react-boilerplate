const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV === 'test') {
  nextConfig.productionBrowserSourceMaps = true;
}

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
