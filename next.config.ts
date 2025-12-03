/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ⬅️ ESTO HACE EL BUILD ESTÁTICO
  images: {
    unoptimized: true, // ⬅️ Necesario para export
  },
};

module.exports = nextConfig;
