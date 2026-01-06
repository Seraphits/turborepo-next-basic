import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins:,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // Requires sass-embedded installed
        // FIX: Changed @lumina to @repo to match your project name
        additionalData: `@use "@repo/tokens/src/index.scss" as *;`,
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
});
