import { fileURLToPath } from "url";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    define: {
      __APP_ENV__: JSON.stringify(process.env.APP_ENV),
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    appType: "spa",
    server: {
      strictPort: true,
      open: true,
      port: parseInt(process.env.VITE_APP_PORT || "3000"),
      origin: process.env.VITE_APP_URL,
    },
    build: {
      assetsInlineLimit: 0,
    },
  };
});
