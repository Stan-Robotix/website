import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [
        { src: "pdf/*", dest: "dist/pdf" }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        outreach: resolve(__dirname, "outreach/index.html"),
        robots: resolve(__dirname, "robots/index.html"),
        about: resolve(__dirname, "about/index.html"),
        wip: resolve(__dirname, "wip/index.html"),
        sponsors: resolve(__dirname, "sponsors/index.html"),
      },
    },
  },
  base: "/",
});
