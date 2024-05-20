import { test, expect } from '@playwright/test'

test('This test will pass', async ({ page }) => {
  console.log('Test be runnin!!')
  await page.goto('https://output.com/');
  await page.goto('https://output.com/products/arcade');
  await page.waitForLoadState('domcontentloaded')
  await page.getByRole('link', { name: 'Shop' }).click();
  await page.locator('div').filter({ hasText: /^Learn$/ }).click();
  await page.getByRole('link', { name: 'Company' }).click();
  expect(2).toBe(3)
})
