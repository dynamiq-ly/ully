/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    APP_NAME: 'Ully',
    APP_SERVER: 'http://localhost:8000/',
  },
  images: {
    domains: ['localhost'],
    loader: 'default',
  },
}

module.exports = nextConfig
