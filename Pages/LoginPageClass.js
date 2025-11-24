import {test,expect} from '@playwright/test';
//import {baseTest} from '../Fixtures/BaseTest';


export class LoginClass {

    
  constructor(page){
  
        //  this.page=page;
        // this.userName=page.getByPlaceholder("Username");
        //  this.password=page.getByPlaceholder("Password");
        //  this.signInBtn=page.getByRole('button', { name: 'Sign in'});
         this.image=page.locator("//img");
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


    
 


     
    }

    
    

    

    
    

