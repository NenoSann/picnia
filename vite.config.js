import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/picnia/',
  server: {
    // host: '192.168.2.110',
    proxy: {
      '/api': {
        target: 'http://43.163.233.68:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
})
