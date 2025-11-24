export class HomePage{


    constructor(page){
  
        
         this.billingBtn=page.locator("(//span[text()='Billing'])[1]");
         this.addBtn=page.locator("//h5[text()='New-1 ']");
         this.searchPatientBtn=page.locator("//label[text()='Search OPD Patients:']");
          
    }

    // async goToUrl(url){

    //      await this.page.goto(url);
    //      await this.page.waitForLoadState('networkidle');
    // }

    // async login(user,pswd){

    //     await this.userName.fill(user);
    //     await this.password.fill(pswd);
    //     await this.signInBtn.click();

    // }

    async clickBillingBtn(){

        this.billingBtn.click();
        this.addBtn.click();
        
        
    }
    
    

      
    





}