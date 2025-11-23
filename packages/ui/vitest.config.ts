// packages/ui/vitest.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
// import path from 'path'; // Already imported, correct

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react()
  ],

  // ADD THE FINAL ARCHITECTURAL FIX HERE
  optimizeDeps: {
    // This tells Vite/Vitest's bundler to process these CJS libraries correctly.
    include: ['@testing-library/jest-dom', '@vitejs/plugin-react'],
  },

  test: {
    environment: 'jsdom',
    globals: true,
    // *** CRITICAL CHANGE: Use path.resolve for absolute pathing ***

  },
});
