import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          home: resolve(__dirname, 'home.html')
        }
      }
     },
     base: '/vue-deploy/', 
  })