import { test, expect } from '@playwright/test';

test.describe('Critical Path Smoke Test', () => {
  test('landing page renders correctly', async ({ page }) => {
    // 1. Navigation
    await page.goto('/');

    // 2. Visual Assertion (Regression Prevention)
    // Using accessible locators ensures we test what the user perceives.
    const mainHeading = page.getByRole('heading', { level: 1 });

    // 3. Visibility Assertion
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toHaveText(/Next.js/i);
  });
});
