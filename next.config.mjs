/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages ne supporte pas l'optimisation d'image Next.js
  },
  basePath: '/nom-de-ton-repo', // uniquement si ton site n'est PAS sur username.github.io (repo racine)
}

export default nextConfig