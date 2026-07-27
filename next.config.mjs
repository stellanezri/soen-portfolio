/** @type {import('next').NextConfig} */
const basePath = '/soen-portfolio'

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: `${basePath}/`,
}

export default nextConfig