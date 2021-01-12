import { browser, by, element, promise } from "protractor";

export class OrderPageObject {
    public navigateTo(): promise.Promise<any> {
        return browser.get(browser.baseUrl +'/confirmed');
    }

    public getHeader(){
        return element(by.tagName('h1'));
    }

    public getButton(){
        return element(by.tagName('a'))
    }
    public navigateToStore(){
        return browser.get(browser.baseUrl +'/store')
    }
}