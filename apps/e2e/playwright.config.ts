// apps/e2e/playwright.config.ts (Cleaned)

import { defineConfig, devices } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';
import path from 'path';

// Define the configuration object
const config: PlaywrightTestConfig = {
  // Global Test Configuration
  timeout: 60 * 1000, // Increased overall test timeout to 60s
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,

  // CRITICAL: WebServer Configuration
  webServer: {
    // Starts both ReadBoot (3002) and Scrambled Sounds (3001) from monorepo root.
    command: 'npx pnpm turbo run dev',
    url: 'http://localhost:3002', // Wait for the slowest starting app (ReadBoot)
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
    cwd: path.resolve(__dirname, '../../'), // Executes command from the root
  },

  // Your Projects Definition for Isolated Testing (Approach 2)
  projects: [
    // Project 1: ReadBoot
    {
      name: 'readboot-e2e',
      use: {
        launchOptions: { env: { APP_NAME: 'readboot', PORT: '3002' } },
        baseURL: 'http://localhost:3002',
        ...devices['Desktop Chrome'],
      },
    },

    // Project 2: Scrambled Sounds
    {
      name: 'scrambled-sounds-e2e',
      use: {
        launchOptions: { env: { APP_NAME: 'scrambled-sounds', PORT: '3001' } },
        baseURL: 'http://localhost:3001',
        ...devices['Desktop Chrome'],
      },
    },
  ],
};

export default defineConfig(config);
