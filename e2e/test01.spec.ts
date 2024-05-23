import { test, expect } from '@playwright/test'

test('This test will pass', async ({ page }) => {
  console.log('Test be running!!')
  await page.goto('https://output.com/products/arcade');
  await page.waitForLoadState('domcontentloaded')
})
