/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm WEBOFWEB',
    description: 'Web of the Web',
    icon: '/img/logo.svg',
    listUrl: 'https://conect-2025.github.io/kasm-registry/',
    contactUrl: 'https://github.com/conect-2025/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
