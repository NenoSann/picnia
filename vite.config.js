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
          // target: isDev ? 'http://localhost:3000' : `http://${env.VITE_SERVER_IP}:${env.VITE_PORT}`,
          target: 'https://localhost:3000',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        }
      }
    },
    build: {
      outDir: 'dist/picnia', // 指定构建后的输出目录为 'picnia'
      assetsDir: 'assets', // 指定生成的资源文件的路径为 'assets'
      publicDir: '/picnia/', // 指定公共资源的访问路径为 '/picnia/'
    }
  }
})