// packages/ui/vitest.config.ts

import { defineConfig } from 'vite'; // FIX: Import changed to base 'vite' to resolve module error
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(), // Resolves path aliases like @repo/ui/*
    react()
  ],
  test: {
    environment: 'jsdom', // CRITICAL: Uses the browser environment simulator
    globals: true,
    setupFiles: ['./test/setup.ts'], // Runs environment setup before tests
    // We expect the local script in package.json to be set to "npx vitest run"
  },
});
