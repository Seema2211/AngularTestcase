import { browser, by, element, promise } from "protractor";



export class StoreFrontPageObject {
  public navigateTo(): promise.Promise<any> {
    return browser.get( browser.baseUrl +'/store');
  }

  getProducts(){
    return element.all(by.css(".product-container"))
  }

  getaddToCartButton(){
    return element(by.buttonText('Add To Cart'));
  }

  getRemoveFromCartButton(){
    return element(by.buttonText('Remove item from cart'))
  }

  getProceedToCheckoutButton(){
    return element(by.buttonText("Proceed To Checkout"))
  }

  getEmptyshoppingbasketButton(){
    return element(by.buttonText("Empty shopping basket"));
  }

 }
