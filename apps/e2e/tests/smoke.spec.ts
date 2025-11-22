// tests/smoke.spec.ts (Finalized code for Checkpoint 1.3)

import { test, expect } from '@playwright/test';

test.describe('API Smoke Test: Homepage Status', () => {
  // This ensures the pipeline is working by verifying a successful HTTP response.
  test('should return 200 status code for homepage', async ({ request }) => {
    // We use the request fixture for speed; it hits the baseURL defined in the config.
    const response = await request.get('/');
    await expect(response.status()).toBe(200);
  });
});
