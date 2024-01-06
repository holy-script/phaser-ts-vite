import { defineConfig } from "vite";

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
  },
  server: {
    open: true,
    port: 3000,
  },
});
