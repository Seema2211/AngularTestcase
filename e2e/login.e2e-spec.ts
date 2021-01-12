import { LoginPageObject } from "./login.page-object";

describe('Login tests', () => {  
   let page: LoginPageObject;  
    beforeEach(() => {  
        page = new LoginPageObject();  
        page.navigateTo();  
    });  
 
    it('set name and password to login form', () => {  
        page.getNameTextbox().sendKeys('admin');  
        page.getPasswordTextbox().sendKeys('admin');
        page.getSubmitButton().click();
        page.navigateToStore();
        let result = page.getStoreHeder() 
        expect(result).toBe("Pick your favourite juices...");  
    });

    it('set wrong name and wrong password to login form ', () => {  
        page.getNameTextbox().sendKeys('admin123');  
        page.getPasswordTextbox().sendKeys('admin1234');
        page.getSubmitButton().click();
        var popupAlert = page.getAlert();
        var alertText = popupAlert.getText();
        expect(alertText).toMatch('Wrong username or password');
        // Close alert
        popupAlert.dismiss();
    });
});  