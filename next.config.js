
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['imgur.com'],
    formats: ["image/webp"],
  }
}

module.exports = nextConfig
