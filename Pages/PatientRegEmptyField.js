export class RegPageEmptyFields{


    constructor(page){

        this.page=page;
        
        this.billingBtn=page.locator("(//span[text()='Billing'])[1]");
        this.clickToActiveBtn=page.locator("//span[text()='Click to Activate']").first();
        this.newpatientBtn=page.getByRole('button',{name :'Add New Patient'});
        this.regAndBillingBtn=page.getByRole('button',{name :' Register & Billing '});
        this.modalTitle = page.getByRole('heading', { name: 'Add New Patient' });

       this.errorMsg = page.locator("//p[contains(text(),'Some of the inputs are invalid')]");

    }

      async clickBillingBtn(){       
        // Click Billing and wait for it to be active
        await this.billingBtn.click();
        
        // Wait explicitly for "Click to Activate" to appear (max 30s)
        await this.clickToActiveBtn.waitFor({ state: 'visible', timeout: 40000 });
        await this.clickToActiveBtn.click();
    }  


        async clickOnPatientAndRegAndBillBtn()
        {
          await this.newpatientBtn.click();
          await this.modalTitle.waitFor({ state: "visible" });
        await this.regAndBillingBtn.click();


        }
    
    }