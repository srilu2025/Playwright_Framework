import ExcelJS from "exceljs";
import path from "path";

export class NewPatientReg{

       constructor(page)
       {
        this.page=page;
        this.firstName = page.locator("#newPatFirstName");
        this.middleName = page.locator("#newPatMiddleName");
        this.lastName = page.locator('#newPatLastName');
        this.age = page.getByPlaceholder("Age");
        this.phoneNumber = page.locator("#phoneNo");
        this.billingBtn=page.locator("(//span[text()='Billing'])[1]");
        this.activateBtn=page.locator("//span[text()='Click to Activate']").first();
        this.searchBox=page.getByPlaceholder("search by HospitalNo, Patient Name, Phone Number");
        this.gender=page.locator("#selGender");
        this.ageUnit=page.locator("#ageUnit");
        this.religion=page.locator("#id_select_ethnic_group");
        this.country=page.locator("#ddlCountry");
    }
    
   async openSearchInputField()
   {
    await this.billingBtn.click();
    
    // Wait explicitly for "Click to Activate" to appear (max 30s)
    await this.activateBtn.waitFor({ state: 'visible', timeout: 40000 });
    await this.activateBtn.click();
    
    await this.searchBox.press('Alt+N');
}

async  readexcel()
{
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

  async fillPatientRegForm(data,genderOption,ageUnitValue,religOption,countryOption)
  {
    //filling the form
    await this.firstName.fill(data.firstNameValue);
    await this.middleName.fill(data.middleNameValue);
    await this.lastName.fill(data.lastNameValue);
     await this.gender.selectOption(genderOption);
    await this.age.fill(String(data.ageValue));
     await this.ageUnit.selectOption(ageUnitValue);

    await this.religion.selectOption(religOption);

    await this.phoneNumber.fill(String(data.phoneValue));
    
    await this.country.selectOption({ label: countryOption });

  }
}

