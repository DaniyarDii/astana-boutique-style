import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

let taggerPlugin: any = null;
try {
  // @ts-ignore
  const mod = await import("lovable-tagger");
  taggerPlugin = mod.componentTagger;
} catch {}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.VITE_BASE_PATH || '/',
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && taggerPlugin?.()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
