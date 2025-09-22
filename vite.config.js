import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  // x to enable SCSS globally (variables)
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/_colors.scss";
        @import "@/assets/scss/_typography.scss";
        @import "@/assets/scss/_breakpoints.scss";
      `
      }
    }
  }
})
