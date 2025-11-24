import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'; // Include this for alias support

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // Enables resolving paths defined in your tsconfig.json
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    pool: 'forks',
    // Removed setupFiles: ['./setupTests.ts'] for now, as it doesn't exist.
    css: {
      modules: {
        // This is necessary to let Vitest know how to handle your SCSS modules.
        classNameStrategy: 'non-scoped',
      },
    },
  },
});
