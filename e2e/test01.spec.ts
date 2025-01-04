import { test, expect } from '@playwright/test'

// test('This test will pass', async ({ page }) => {
//   console.log('Test be running1!!')
//   await page.goto('https://output.com/products/arcade');
//   await page.waitForLoadState('domcontentloaded')
// })

test('This test will fail', async ({ page }) => {
  console.log('Test be running1!!')
  expect(1).toEqual(2)
})