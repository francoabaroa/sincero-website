/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sincero.tech',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;