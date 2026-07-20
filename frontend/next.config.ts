import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Requerido para Cloudflare Pages: deshabilita la optimización de imágenes
  // en el servidor (Next.js la delega al CDN de Cloudflare en producción).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
