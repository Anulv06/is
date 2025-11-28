// is/vite.config.ts
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  build: {
    target: 'es2022',
    copyPublicDir: false,
    cssCodeSplit: false, // ← один CSS-файл
    lib: {
      name: 'is-components-new',
      entry: 'src/index.ts',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'umd.js'}`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        assetFileNames: 'style.css', // ← стили в один файл
      },
    },
  },
  plugins: [
    vue(),
    svgLoader(),
    dts({
      cleanVueFileName: true,
      entryRoot: 'src',
      include: ['src/index.ts'],
    }),
  ],
  optimizeDeps: {
    include: ['vue'],
  },
});