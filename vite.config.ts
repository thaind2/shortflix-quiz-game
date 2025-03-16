  import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion', 'styled-components'],
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true
  },
  base: '/',
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'styled-components']
  }
});
