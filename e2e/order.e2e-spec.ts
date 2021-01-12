import { AppPageObject } from "./app.page-object";
import { OrderPageObject } from "./order.page-object";
import { StoreFrontPageObject } from "./store-front.page-object";

describe("Order Confirmation", () => {
  let page: OrderPageObject;
  let appPage: AppPageObject;
  let storePage: StoreFrontPageObject
  beforeEach(() => {
    page = new OrderPageObject();
    storePage = new StoreFrontPageObject();
    appPage = new AppPageObject();
    appPage.setLogincredentials();
    page.navigateTo();
  });

  it("go to order-confirmation page", async () => {
      expect(page.getHeader().getText()).toBe("Thank you for your order, it will be dispatched shortly!")
  });

  it("Back to the store", async () => {
      page.getButton().click();
      page.navigateToStore();
      expect(storePage.getProducts().count()).toEqual(5);
  })

});