import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/Pagina-Apresenta-ao-Sistema-Restaurante/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'components/*',   // Copia todos os arquivos dentro da pasta components
          dest: 'components'     // Para a pasta dist/components
        }
      ]
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
