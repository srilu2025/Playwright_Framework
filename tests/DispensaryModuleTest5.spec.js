import { test, expect } from '@playwright/test';




  test("1.validating dispensary arrow is expanding or not",async ({page})=>{

    await page.goto("https://healthapp.yaksha.com/");
    await page.waitForLoadState('networkidle');
  
    await page.getByPlaceholder("Username").fill("admin");
    await page.getByPlaceholder("Password").fill("pass123");
    await page.getByRole('button', { name: 'Sign in'}).click();
    
    // Wait for navigation after login
    await page.waitForLoadState('networkidle');
  
    await page.getByRole("link", { name: "Dispensary" }).click();

   const dropDownOptions=await page.locator("//ul[@id='Dispensary']//span[1]").allTextContents();
   console.log(dropDownOptions);
   await page.waitForTimeout(1000);
   await page.getByRole("link", { name: "Dispensary" }).click();
   await expect(dropDownOptions).toHaveLength(6);

  });











