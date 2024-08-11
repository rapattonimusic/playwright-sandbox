import { test, expect } from '@playwright/test';

test('This test will fail', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
  // Fail the test
  await expect(2).toBe(3);
});

test('This test will pass!', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

