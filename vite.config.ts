import { defineConfig, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

const config: UserConfigExport = defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api': {
        target: 'http://13.124.225.23:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
      '/admin': {
        target: 'http://13.124.225.23:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/admin/, '/admin'),
      },
      '/pageView': {
        target: 'http://13.124.225.23:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/pageView/, '/pageView'),
      },
    },
  },
});

export default config;
