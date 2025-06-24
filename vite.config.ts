import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
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
