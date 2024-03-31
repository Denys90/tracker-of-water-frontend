import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      assets: '/src/assets',
      styles: '/src/styles',
      store: './src/store',
      guards: '/src/guards',
      hooks: '/src/hooks',
      context: '/src/context',
    },
  },
  base: '/runners_of_code__frontend/',
});
