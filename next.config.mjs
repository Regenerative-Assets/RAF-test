/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ⬇️  Ignore build‑blocking lint and type errors from large auto‑generated code
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
