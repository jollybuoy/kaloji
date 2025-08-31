import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NETLIFY_DATABASE_URL': JSON.stringify(process.env.NETLIFY_DATABASE_URL)
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
