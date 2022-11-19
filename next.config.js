/** @type {import('next').NextConfig} */

const withVideos = require('next-videos');
const nextConfig = withVideos({
	reactStrictMode: true,
	swcMinify: true,
});

module.exports = nextConfig;
