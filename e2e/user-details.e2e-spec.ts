import { AppPageObject } from "./app.page-object";
import { UserDeatilsObject } from "./user-details.page-object";


describe('User Deatils tests', () => {  
   let page: UserDeatilsObject; 
   let appPage: AppPageObject;
    beforeEach(() => {  
        page = new UserDeatilsObject();  
        appPage = new AppPageObject();
        appPage.setLogincredentials();
        page.navigateTo();  
    })

    it('check name input field', () => {  
        page.getNameTextbox().sendKeys('seema');  
        expect(page.getNameTextbox().getAttribute('value')).toBe('seema');
        page.getNameTextbox().clear();
        expect(page.getNameTextbox().getAttribute('value')).toBe('');  
    });

    it('check email input field', () => {  
        page.getEmailTextbox().sendKeys('email');  
        expect(page.getEmailTextbox().getAttribute('value')).toBe('email');
        page.getEmailTextbox().clear();
        expect(page.getEmailTextbox().getAttribute('value')).toBe('');  
    });

    it('Click on cancle button', () => {  
        page.getCancleButton().click();
        page.navigateTocheckout();
        expect(page.checkoutTitle()).toBe("Checkout")  
    });

});