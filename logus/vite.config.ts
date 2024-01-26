import { resolve } from 'node:path';

import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const proxyTarget = env.VITE_PROXY_TARGET;

  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@types': resolve(__dirname, './src/types'),
        '@app': resolve(__dirname, './src/_app'),
        '@processes': resolve(__dirname, './src/_processes'),
        '@pages': resolve(__dirname, './src/_pages'),
        '@widgets': resolve(__dirname, './src/_widgets'),
        '@features': resolve(__dirname, './src/_features'),
        '@entities': resolve(__dirname, './src/_entities'),
        '@shared': resolve(__dirname, './src/_shared'),
        'sharedLib': resolve(__dirname, './sharedLib')
      },
    },

    plugins: [
      vue({
        script: {
          defineModel: true,
        },
      }),
      federation({
        name: 'logus',
        filename: 'remoteEntry.js',
        exposes: {
          // './modules': '/src/_pages/index.ts',
          './modules/AccountingModule': '/src/_pages/accounting/index.vue',
          './modules/ReserveModule': '/src/_pages/reserve/index.vue'
        },
        remotes: {
          shared: 'http://localhost:8080/assets/remoteEntry.js',
        },
        shared: ['vue']
      })
    ],
    server: {
      port: 8081,
      proxy: {
        '/api': {
          target: proxyTarget,
          changeOrigin: true,
        },
      }
    },
    build: {
      chunkSizeWarningLimit: 3000,
      target: 'esnext',
      minify: false,
      cssCodeSplit: true,
      rollupOptions: {
        output: { minifyInternalExports: false }
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  };
});
