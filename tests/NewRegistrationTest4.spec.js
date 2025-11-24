import { test, expect } from '@playwright/test';

test("verifying error displaying on click Register and Billing button senario 7",async ({page})=>{

    

    await page.goto("https://healthapp.yaksha.com/");
    await page.waitForLoadState('networkidle');
  
    await page.getByPlaceholder("Username").fill("admin");
    await page.getByPlaceholder("Password").fill("pass123");
    await page.getByRole('button', { name: 'Sign in'}).click();
    
    // Wait for navigation after login
    await page.waitForLoadState('networkidle');
    
    // Click Billing and wait for it to be active
    await page.locator("(//span[text()='Billing'])[1]").click();
    
    // Wait explicitly for "Click to Activate" to appear (max 30s)
    const activateButton = page.locator("//span[text()='Click to Activate']").first();
    await activateButton.waitFor({ state: 'visible', timeout: 40000 });
    await activateButton.click();

    await page.getByRole('button',{name :'Add New Patient'}).click();
    await page.getByRole('button',{name :' Register & Billing '}).click();

    const errorMsg= page.locator("//p[text()='Some of the inputs are invalid. Please check and try again. !']");

    await expect(errorMsg).toBeVisible();
    
    

});