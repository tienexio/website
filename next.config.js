/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // generateEtags: false,
  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes.
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'no-store',
  //         },
  //       ],
  //     },
  //   ]
  // },
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
