import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import postcsspxtoviewport from 'postcss-px-to-viewport-8-plugin'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isProd = env.VITE_APP_ENV === 'production'
  const isDev = mode === 'development'

  return {
    plugins: [
      vue(),
      nodePolyfills({
        globals: {
          Buffer: true,
          global: true,
          process: true
        },
        protocolImports: true
      })
    ],
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      'process.env': {}
    },
    server: {
      host: '0.0.0.0',
      port: 8880,
      open: false,
      cors: true,
      hmr: {
        overlay: true
      },
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL || 'http://localhost:8080',
          changeOrigin: true,
          timeout: 120000,
          rewrite: path => path.replace(/^\/api/, ''),
          secure: false,
        }
      },
    },
     resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
      }
    },
    build: {
      sourcemap: isDev, 
      minify: isProd ? 'terser' : 'esbuild',
      terserOptions: isProd
        ? {
            compress: {
              drop_console: true,
              drop_debugger: true
            }
          }
        : {},
      rollupOptions: isProd ? {} : {},
      chunkSizeWarningLimit: 1600,
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'vant'], 
      exclude: []
    },
    css: {
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: 'px',
            viewportWidth: 1920,
            unitPrecision: 20,
            propList: ['*'], 
            viewportUnit: 'vw', 
            fontViewportUnit: 'vw', 
            selectorBlackList: ['ignore-'],
            minPixelValue: 1,
            mediaQuery: false, 
            replace: true, 
            exclude: undefined, 
            include: undefined, 
            landscape: false, 
            landscapeUnit: 'vw',
            landscapeWidth: 1920, 
          })
        ]
      }
    }
  }
})