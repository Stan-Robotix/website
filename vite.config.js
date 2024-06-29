import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        robots: resolve(__dirname, "robots/index.html"),
      },
    },
  },
  base: "/vue-deploy/",
});
