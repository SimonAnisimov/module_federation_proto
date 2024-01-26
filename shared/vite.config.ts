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
      },
    },

    plugins: [
      vue({
        script: {
          defineModel: true,
        },
      }),
      federation({
        name: 'sharedLib',
        filename: 'remoteEntry.js',
        exposes: {
          './ui': '/src/_shared/ui/index.ts',
          './api': '/src/_shared/api/export.ts',
          './lib/dateLib': '/src/_shared/lib/date/index.ts',
          './lib/notify': '/src/_shared/lib/notify/index.ts',
          './lib/localStorage': '/src/_shared/lib/localStorage/index.ts',
          './features/alert': '/src/_features/alert/index.ts',
        },
        shared: [ 'vue', 'date-fns' ],
      }),
    ],
    server: {
      port: 8080,
      proxy: {
        '/api': {
          target: proxyTarget,
          changeOrigin: true,
        },
      }
    },
    build: {
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
