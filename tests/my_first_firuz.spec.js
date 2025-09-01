const {test, expect} = require('@playwright/test')


test('Go to youtube', async ({ page }) => {
  await page.goto('https://www.lsac.org/');
  await expect(page).toHaveURL('https://www.lsac.org/');

  let searchBox = page.locator("//input[@name='search']");
  await searchBox.fill('learn playwright with javascript');
  await searchBox.press('Enter');
  await page.waitForTimeout(3000)
});
