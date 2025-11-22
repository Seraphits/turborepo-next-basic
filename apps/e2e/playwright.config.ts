// apps/e2e/playwright.config.ts

import { defineConfig, devices } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';
import path from 'path';

// Define the configuration object
const config: PlaywrightTestConfig = {
  // ... (Your other configurations, like testDir, reporters, etc.)

  // CRITICAL: WebServer Configuration (Your dynamic command)
  webServer: {
    command: `pnpm run start --filter={process.env.APP_NAME}`,
    url: process.env.CI ? 'http://localhost:3000' : 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },

  // Your Projects Definition
  projects: [
    // READBOOT PROJECT CONFIGURATION
    {
      name: 'readboot-e2e',
      use: {
        launchOptions: { env: { APP_NAME: 'readboot', PORT: '3000' } },
        baseURL: 'http://localhost:3000',
        ...devices['Desktop Chrome'],
      },
    },

    // SCRAMBLED SOUNDS PROJECT CONFIGURATION
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

// Export the configuration using defineConfig
export default defineConfig(config);
