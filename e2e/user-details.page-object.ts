import { browser, by, element, promise } from "protractor";

export class UserDeatilsObject {
    public navigateTo(): promise.Promise<any> {
        return browser.get(browser.baseUrl +'/user-deatils');
    }
    getNameTextbox() {  
        return element(by.name('name'));  
    }  
     getEmailTextbox() {  
        return element(by.name('email'));  
    } 
    getContactTextbox() {  
        return element(by.name('contact'));  
    }  
     getAddressTextbox() {  
        return element(by.name('address'));  
    } 
    getStateTextbox() {  
        return element(by.name('state'));  
    }  
     getPincodeTextbox() {  
        return element(by.name('pincode'));  
    } 
    getUpiTextbox() {  
        return element(by.name('upi'));  
    } 
    getSubmitButton()
    {
        return element(by.buttonText('Submit'))
    }

    getNameError(){
       return element.all(by.className('name'))
    }

    getCancleButton(){
        return element(by.tagName('a'))
    }

    navigateTocheckout(){
        return browser.get(browser.baseUrl +'/checkout');
    }

    checkoutTitle(){
        return element(by.tagName('h2 span')).getText();
    }

    getEmailError(){
        return element.all(by.className('email'))
     }
}