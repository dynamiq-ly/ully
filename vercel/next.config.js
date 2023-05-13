/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    APP_NAME: 'Ully',
  },
}

module.exports = nextConfig
