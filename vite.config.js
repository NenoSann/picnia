import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadEnv } from 'vite'

export default defineConfig(async ({ mode }) => {
  const isDev = mode === 'development'
  const env = await loadEnv(mode, process.cwd())

  return {
    plugins: [vue()],
    base: '/picnia/',
    server: {
      // host: '192.168.2.110',
      proxy: {
        '/api': {
          target: isDev ? 'http://localhost:3000' : `http://${env.VITE_SERVER_IP}:${env.VITE_PORT}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        }
      }
    }
  }
})