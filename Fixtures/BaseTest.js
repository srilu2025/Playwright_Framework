import {test,expect} from '@playwright/test';

export class baseTest{

     constructor(page){

        this.page=page;
        this.userName = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.signInBtn = page.getByRole('button', { name: 'Sign in' });
   }

   async goToUrl(){

              await this.page.goto("https://healthapp.yaksha.com/");
              await this.page.waitForLoadState('networkidle');
   }

   async userLogin()
   {
    await this.userName.fill("admin");
    await this.password.fill("pass123");
    await this.signInBtn.click();
   //await this.page.waitForLoadState('networkidle');

   }

   async waitForLeftMenu() {
    await this.page.waitForSelector("//a[contains(., 'Billing')]", { timeout: 60000 });
}

}