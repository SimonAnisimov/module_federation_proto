// vite.config.ts
import { resolve } from "node:path";
import vue from "file:///C:/Users/simon/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/work/module_federation/logus/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig, loadEnv } from "file:///C:/Users/simon/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/work/module_federation/logus/node_modules/vite/dist/node/index.js";
import federation from "file:///C:/Users/simon/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/work/module_federation/logus/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\simon\\OneDrive\\\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B\\work\\module_federation\\logus";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const proxyTarget = env.VITE_PROXY_TARGET;
  return {
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "./src"),
        "@types": resolve(__vite_injected_original_dirname, "./src/types"),
        "@app": resolve(__vite_injected_original_dirname, "./src/_app"),
        "@processes": resolve(__vite_injected_original_dirname, "./src/_processes"),
        "@pages": resolve(__vite_injected_original_dirname, "./src/_pages"),
        "@widgets": resolve(__vite_injected_original_dirname, "./src/_widgets"),
        "@features": resolve(__vite_injected_original_dirname, "./src/_features"),
        "@entities": resolve(__vite_injected_original_dirname, "./src/_entities"),
        "@shared": resolve(__vite_injected_original_dirname, "./src/_shared"),
        "sharedLib": resolve(__vite_injected_original_dirname, "./sharedLib")
      }
    },
    plugins: [
      vue({
        script: {
          defineModel: true
        }
      }),
      federation({
        name: "logus",
        filename: "remoteEntry.js",
        exposes: {
          "./modules": "/src/_pages/index.ts"
        },
        remotes: {
          shared: "http://localhost:8080/assets/remoteEntry.js"
        },
        shared: ["vue"]
      })
    ],
    server: {
      port: 8081,
      proxy: {
        "/api": {
          target: proxyTarget,
          changeOrigin: true
        }
      }
    },
    build: {
      chunkSizeWarningLimit: 3e3,
      target: "esnext",
      minify: false,
      cssCodeSplit: true,
      rollupOptions: {
        output: { minifyInternalExports: false }
      }
    },
    test: {
      globals: true,
      environment: "jsdom"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzaW1vblxcXFxPbmVEcml2ZVxcXFxcdTA0MTRcdTA0M0VcdTA0M0FcdTA0NDNcdTA0M0NcdTA0MzVcdTA0M0RcdTA0NDJcdTA0NEJcXFxcd29ya1xcXFxtb2R1bGVfZmVkZXJhdGlvblxcXFxsb2d1c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcc2ltb25cXFxcT25lRHJpdmVcXFxcXHUwNDE0XHUwNDNFXHUwNDNBXHUwNDQzXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDQyXHUwNDRCXFxcXHdvcmtcXFxcbW9kdWxlX2ZlZGVyYXRpb25cXFxcbG9ndXNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3NpbW9uL09uZURyaXZlLyVEMCU5NCVEMCVCRSVEMCVCQSVEMSU4MyVEMCVCQyVEMCVCNSVEMCVCRCVEMSU4MiVEMSU4Qi93b3JrL21vZHVsZV9mZWRlcmF0aW9uL2xvZ3VzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCc7XG5cbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSBcIkBvcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xuICBjb25zdCBwcm94eVRhcmdldCA9IGVudi5WSVRFX1BST1hZX1RBUkdFVDtcblxuICByZXR1cm4ge1xuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgICAnQHR5cGVzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy90eXBlcycpLFxuICAgICAgICAnQGFwcCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvX2FwcCcpLFxuICAgICAgICAnQHByb2Nlc3Nlcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvX3Byb2Nlc3NlcycpLFxuICAgICAgICAnQHBhZ2VzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9fcGFnZXMnKSxcbiAgICAgICAgJ0B3aWRnZXRzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9fd2lkZ2V0cycpLFxuICAgICAgICAnQGZlYXR1cmVzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9fZmVhdHVyZXMnKSxcbiAgICAgICAgJ0BlbnRpdGllcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvX2VudGl0aWVzJyksXG4gICAgICAgICdAc2hhcmVkJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9fc2hhcmVkJyksXG4gICAgICAgICdzaGFyZWRMaWInOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc2hhcmVkTGliJylcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSh7XG4gICAgICAgIHNjcmlwdDoge1xuICAgICAgICAgIGRlZmluZU1vZGVsOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBmZWRlcmF0aW9uKHtcbiAgICAgICAgbmFtZTogJ2xvZ3VzJyxcbiAgICAgICAgZmlsZW5hbWU6ICdyZW1vdGVFbnRyeS5qcycsXG4gICAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgICAnLi9tb2R1bGVzJzogJy9zcmMvX3BhZ2VzL2luZGV4LnRzJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3Rlczoge1xuICAgICAgICAgIHNoYXJlZDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hc3NldHMvcmVtb3RlRW50cnkuanMnLFxuICAgICAgICB9LFxuICAgICAgICBzaGFyZWQ6IFsndnVlJ11cbiAgICAgIH0pXG4gICAgXSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IDgwODEsXG4gICAgICBwcm94eToge1xuICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICB0YXJnZXQ6IHByb3h5VGFyZ2V0LFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDMwMDAsXG4gICAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgICAgbWluaWZ5OiBmYWxzZSxcbiAgICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7IG1pbmlmeUludGVybmFsRXhwb3J0czogZmFsc2UgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGVzdDoge1xuICAgICAgZ2xvYmFsczogdHJ1ZSxcbiAgICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIH0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeWEsU0FBUyxlQUFlO0FBRWpjLE9BQU8sU0FBUztBQUNoQixTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLGdCQUFnQjtBQUp2QixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDM0MsUUFBTSxjQUFjLElBQUk7QUFFeEIsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxRQUMvQixVQUFVLFFBQVEsa0NBQVcsYUFBYTtBQUFBLFFBQzFDLFFBQVEsUUFBUSxrQ0FBVyxZQUFZO0FBQUEsUUFDdkMsY0FBYyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLFFBQ25ELFVBQVUsUUFBUSxrQ0FBVyxjQUFjO0FBQUEsUUFDM0MsWUFBWSxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLFFBQy9DLGFBQWEsUUFBUSxrQ0FBVyxpQkFBaUI7QUFBQSxRQUNqRCxhQUFhLFFBQVEsa0NBQVcsaUJBQWlCO0FBQUEsUUFDakQsV0FBVyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxRQUM3QyxhQUFhLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQy9DO0FBQUEsSUFDRjtBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLFFBQ0YsUUFBUTtBQUFBLFVBQ04sYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWLFNBQVM7QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNmO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0EsUUFBUSxDQUFDLEtBQUs7QUFBQSxNQUNoQixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsUUFBUTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFFBQ2hCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLHVCQUF1QjtBQUFBLE1BQ3ZCLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLGNBQWM7QUFBQSxNQUNkLGVBQWU7QUFBQSxRQUNiLFFBQVEsRUFBRSx1QkFBdUIsTUFBTTtBQUFBLE1BQ3pDO0FBQUEsSUFDRjtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
