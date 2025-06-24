import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/desai-foundation/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@/components/home': '/src/components/home/index.ts'
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
