import { defineConfig, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

const config: UserConfigExport = defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
      '/admin': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

export default config;
