import { test, expect } from '@playwright/test';

test("loginPage validation",async ({page})=>{

 await page.goto("https://healthapp.yaksha.com/");
 await page.waitForLoadState('networkidle');
const actualTitle=await page.locator("//a[@href='http://www.danphehealth.com/']").getAttribute("title");
 await page.waitForTimeout(10000);
 console.log(actualTitle);
 expect(actualTitle).toBe("DanpheHealth Pvt. Ltd.");
 
});

test("Signing into App with valid credentials",async ({page})=>{

    
 await page.goto("https://healthapp.yaksha.com/");
 await page.waitForLoadState('networkidle');
  
    await page.getByPlaceholder("Username").fill("admin");
    await page.getByPlaceholder("Password").fill("pass123");
    await page.getByRole('button', { name: 'Sign in'}).click();
    const homePageTitle=await page.title();
    console.log("home page title is...",homePageTitle);
    expect(homePageTitle).toBe("DanpheHealth")
    const pageURL=await page.url();
    console.log("URL of the page is....",pageURL);

});




