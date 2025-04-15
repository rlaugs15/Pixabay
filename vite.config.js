import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api/images": {
        target: "https://pixabay.com/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/images/, ""),
      },
      "/api/videos": {
        target: "https://pixabay.com/api/videos",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/videos/, ""),
      },
    },
  },
});
