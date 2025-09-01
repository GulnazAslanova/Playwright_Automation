const {test, expect} = require('@playwright/test')


test('Go to LSAC',  async ({page}) => {
   
  await page.goto('https://www.lsac.org/');
  await expect(page).toHaveTitle(/Law School Admission Council/);
  let searchBox = page.locator('input[name="search"]');
  await searchBox.fill('register for the lsac'); 
  await page.waitForTimeout(10000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  //await expect(page).toHaveTitle(/register for the lsat - Google Search/);
    
})
