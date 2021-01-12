import { browser, by, element, promise } from "protractor";

export class AppPageObject{
    public navigateTo(): promise.Promise<any> {
        return browser.get('/');
    }
    getNameTextbox() {  
        return element(by.name('username'));  
    }  
     getPasswordTextbox() {  
        return element(by.name('password'));  
    }
    getSubmitButton()
    {
        return element(by.buttonText('Login'))
    }
    setLogincredentials(){
        this.navigateTo();
        this.getNameTextbox().clear();
        this.getPasswordTextbox().clear();
        this.getNameTextbox().sendKeys('admin');  
        this.getPasswordTextbox().sendKeys('admin');
        this.getSubmitButton().click();
    }
}