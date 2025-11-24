import { test, expect } from '@playwright/test';
import { LoginClass } from '../Pages/LoginPageClass';
import {HomePage} from '../Pages/HomePageClass';
import {NewPatientReg} from '../Pages/NewPatientRegClass';
import {RegPageEmptyFields} from '../Pages/PatientRegEmptyField';
import {dispensaryModuleObject} from '../Pages/DispensaryModuleClass';
import { baseTest } from '../Fixtures/BaseTest';
let baseTestObject;

test.beforeEach("open the browser, enter the url ,sigining into the application",async({page})=>{

  baseTestObject=new baseTest(page);
     await baseTestObject.goToUrl();
     await baseTestObject.userLogin();
     


});

test("testing the loginPage", async ({ page }) => {

     
    const loginInstance = new LoginClass(page);
    //await expect(loginInstance.image).toBeVisible();
    
    
     const homePageTitle = await page.title();
     console.log("home page title is...", homePageTitle);
     expect(homePageTitle).toBe("DanpheHealth");

});

test("testing the homePage",async ({page})=>{

   const homePageInstance= new HomePage(page);

    await homePageInstance.clickBillingBtn();
    const searchText=await homePageInstance.searchPatientBtn.textContent();
    
    //console.log(searchText);
    await expect(searchText).toBeTruthy();

});

test("filling the patient registrattion form by Reading Data from the Excel file",async ({page})=>{

   await baseTestObject.waitForLeftMenu();

  const regPage=new NewPatientReg(page);

  await regPage.openSearchInputField();

  const excelData=await regPage.readexcel();
  console.log(excelData);

  await regPage.fillPatientRegForm(excelData,'Female','Years','Others',"India");

  // Assert using the checked option
 const selected = page.locator('#ddlCountry option:checked');
 await expect(selected).toHaveText("India");

});

test("validating Error message is displaying without entering fields in patient Registration Form",async ({page})=>{

   await baseTestObject.waitForLeftMenu();

   const regPageEmpty=new RegPageEmptyFields(page);

  await regPageEmpty.clickBillingBtn();
  await regPageEmpty.clickOnPatientAndRegAndBillBtn();

  //await expect(regPageEmpty.errorMsg).toBeVisible();

 const text= await regPageEmpty.errorMsg.textContent();
 console.log(text);

 await expect(regPageEmpty.errorMsg).toHaveText(text);
        
});

test("clicking Dispensary Dropdown and validating length",async ({page})=>{

     await baseTestObject.waitForLeftMenu();

   const dispModule = new dispensaryModuleObject(page);

  // ensure sidebar is fully activated
 

  await dispModule.clickDispensaryDropDown();

  const options = await dispModule.dropDownList.allTextContents();
  await expect(options).toHaveLength(6);

  console.log(options);
});




