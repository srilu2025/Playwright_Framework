export class dispensaryModuleObject {

  constructor(page) {
    this.page = page;

    // More reliable selector using regex
    this.dispensaryBtn = page.getByRole("link", { name: /Dispensary/ });

    this.billingBtn = page.getByRole("link", { name: /Billing/ });
    this.clickToActivate = page.locator("//span[text()='Click to Activate']").first();

    this.dropDownList = page.locator("//ul[@id='Dispensary']//span[1]");
  }

  
  async clickDispensaryDropDown() {
    await this.billingBtn.click();
    await this.clickToActivate.waitFor({ state: "visible" });
    await this.clickToActivate.click();
    await this.dispensaryBtn.waitFor({ state: "visible" });
    await this.dispensaryBtn.click();
  }
}
