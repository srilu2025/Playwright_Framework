import { test, expect } from '@playwright/test';
import ExcelJS from 'exceljs';
import path from 'path';

test("registration form fields validation [senario 3 and 4]", async ({page}) => {
  
    const firstName = page.locator("#newPatFirstName");
    const middleName = page.locator("#newPatMiddleName");
    const lastName = page.locator('#newPatLastName');
    const age = page.getByPlaceholder("Age");
    const phoneNumber = page.locator("#phoneNo");

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
    
    await page.getByPlaceholder("search by HospitalNo, Patient Name, Phone Number").press('Alt+N');

    // Use expect assertions instead of isVisible()
    await expect(firstName).toBeVisible();
    await expect(middleName).toBeVisible();
    await expect(lastName).toBeVisible();
    await expect(age).toBeVisible();
    await expect(phoneNumber).toBeVisible();

    //senario 5
  async function excelTest(){

    const filePath = path.join(__dirname, '..', 'test-data', 'Expected_Data.xlsx');

    const workbook=new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
     
    const workSheet=workbook.getWorksheet('Sheet1');
    
    //getting row 2 as row 1 is a header part
    const firstNameValue= workSheet.getRow(2).getCell(1).value;
    const middleNameValue = workSheet.getRow(2).getCell(2).value;
    const lastNameValue = workSheet.getRow(2).getCell(3).value;
    const ageValue = workSheet.getRow(2).getCell(4).value;
    const phoneValue = workSheet.getRow(2).getCell(5).value;
 
     return {firstNameValue,middleNameValue,lastNameValue,ageValue,phoneValue};
        
    
  }
  const excelData=await excelTest();
  console.log(excelData);

   //filling the form
    await firstName.fill(excelData.firstNameValue);
    await middleName.fill(excelData.middleNameValue);
    await lastName.fill(excelData.lastNameValue);
     await page.locator("#selGender").selectOption('Female');

     await page.getByPlaceholder('Age').fill(String(excelData.ageValue));
     await page.locator("#ageUnit").selectOption('Years');

    await page.locator("#id_select_ethnic_group").selectOption('Others');

    await phoneNumber.fill(String(excelData.phoneValue));
    
    
    // Select India
await page.locator("#ddlCountry").selectOption({ label: "India" });

// Assert using the checked option
const selected = page.locator('#ddlCountry option:checked');
await expect(selected).toHaveText("India");



    


});

