import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
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
        @import "@/assets/scss/_colors.scss";
        @import "@/assets/scss/animations.scss";
        @import "@/assets/scss/_typography.scss";
        @import "@/assets/scss/_breakpoints.scss";
      `
      }
    }
  }
})
