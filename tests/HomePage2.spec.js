import { test, expect } from '@playwright/test';

test("Homepage Validations[senario 2]",async({page})=>{

     await page.goto("https://healthapp.yaksha.com/");
     await page.waitForLoadState('networkidle');
  
    await page.getByPlaceholder("Username").fill("admin");
    await page.getByPlaceholder("Password").fill("pass123");
    await page.getByRole('button', { name: 'Sign in'}).click();

    
    await page.locator("(//span[text()='Billing'])[1]").click();
    await page.locator("//h5[text()='New-1 ']").click();

    const searchText=page.locator("//label[text()='Search OPD Patients:']").textContent();
    
    //console.log(searchText);
    
   expect(searchText).toBeTruthy();

    
});