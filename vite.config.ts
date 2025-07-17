import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // <--- ESSENCIAL PARA VERCEL ENTENDER CAMINHOS RELATIVOS
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
