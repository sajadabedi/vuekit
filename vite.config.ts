import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.vue'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('/dist/src/', '/dist/'),
        content
      })
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'FirstbaseUI',
      formats: ['es', 'umd'],
      fileName: (format) => `ui.${format}.js`
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['vue', /\.stories\.ts$/],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
});
