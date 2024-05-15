/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cookinplus-images.s3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      //erro aqui
      {
        protocol: 'http',
        port: '3333',
        hostname: '*',
        pathname: '*',
      },
    ],
  },
}

module.exports = nextConfig
