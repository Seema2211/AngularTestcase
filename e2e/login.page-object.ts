import { browser, by, element, promise } from "protractor";

export class LoginPageObject {
    public navigateTo(): promise.Promise<any> {
        return browser.get(browser.baseUrl);
      }
    getNameTextbox() {  
        return element(by.name('username'));  
    }  
     getPasswordTextbox() {  
        return element(by.name('password'));  
    } 
    navigateToStore(){
        return browser.get(browser.baseUrl + '/store');
    }
    getStoreHeder()
    {
        return element(by.tagName('h3')).getText();
    }
    getSubmitButton()
    {
        return element(by.buttonText('Login'))
    }
    getAlert()
    {
       return browser.switchTo().alert();
    }
}