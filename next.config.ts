import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",              // ⬅️ Fuerza la exportación estática
  distDir: "out",                // ⬅️ Carpeta donde se genera el build estático
  trailingSlash: true,           // ⬅️ Opcional, evita errores con rutas en Amplify
};

export default nextConfig;
