// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  //a
  await page.goto('https://www.google.com/');
  await page.locator("//textarea[@title='Buscar']").fill('Beon tech')
  await page.keyboard.press('Enter');
  await expect(page.locator("//div[@id='search']")).toBeVisible();

//b
  await page.locator("(//div[@id='search']//h3)[1]").click()
  await expect(page).toHaveURL("https://beon.tech/companies");
  await expect(page.locator("(//img[@alt='BEON.tech'])[1]")).toBeVisible();

});
