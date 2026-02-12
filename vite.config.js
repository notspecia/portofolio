import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // x to enable SCSS globally (variables)
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/styles/_colors.scss";
        @import "@/styles/animations.scss";
        @import "@/styles/_typography.scss";
        @import "@/styles/_breakpoints.scss";
      `
      }
    }
  }
})
