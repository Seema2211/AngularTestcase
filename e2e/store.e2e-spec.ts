import { AppPageObject } from "./app.page-object";
import { StoreFrontPageObject } from "./store-front.page-object";
import { UserDeatilsObject } from "./user-details.page-object";

describe("Store front", () => {
  let page: StoreFrontPageObject;
  let appPage: AppPageObject;
  let Userpage: UserDeatilsObject;
  beforeEach(() => {
    page = new StoreFrontPageObject();
    Userpage = new UserDeatilsObject();
    appPage = new AppPageObject();
    appPage.setLogincredentials();
    page.navigateTo();
  });

  it("should display products", async () => {
    expect(page.getProducts().count()).toEqual(5);
  });

  it("Add to cart button", async () => {
      page.getaddToCartButton().click();
      expect(page.getRemoveFromCartButton()).toBeTruthy()
      expect(page.getProceedToCheckoutButton().isEnabled).toBeTruthy();
  })

  it("remove from cart", async() =>{
      page.getEmptyshoppingbasketButton().click();
      expect(page.getEmptyshoppingbasketButton().isEnabled).toBeTruthy();
      expect(page.getProceedToCheckoutButton().isEnabled).toBeTruthy();
  })

  it("navigate to checkout page ", async() =>{
    page.getaddToCartButton().click();
    Userpage.navigateTocheckout();
    expect(Userpage.checkoutTitle()).toBe("Checkout") 
  })

});