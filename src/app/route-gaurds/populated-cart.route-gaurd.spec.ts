import { inject, TestBed } from "@angular/core/testing";
import { MockBackend } from "@angular/http/testing";
import { Router, RouterModule } from "@angular/router";
import { CartItem } from "app/models/cart-item.model";
import { ShoppingCart } from "app/models/shopping-cart.model";
import { DeliveryOptionsDataService } from "app/services/delivery-options.service";
import { ProductsDataService } from "app/services/products.service";
import { ShoppingCartService } from "app/services/shopping-cart.service";
import { LocalStorageServie, StorageService } from "app/services/storage.service";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import * as sinon from "sinon";
import { SinonSpy } from "sinon";
import { PopulatedCartRouteGuard } from "./populated-cart.route-gaurd";

class MockShoppingCartService {
  public unsubscriveCalled: boolean = false;
  private subscriptionObservable: Observable<ShoppingCart>;
  private subscriber: Observer<ShoppingCart>;
  private cart: ShoppingCart = new ShoppingCart();

  public constructor() {
    this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
      this.subscriber = observer;
      observer.next(this.cart);
      return () => this.unsubscriveCalled = true;
    });
  }

  public get(): Observable<ShoppingCart> {
    return this.subscriptionObservable;
  }

  public dispatchCart(cart: ShoppingCart): void {
    this.cart = cart;
    if (this.subscriber) {
      this.subscriber.next(cart);
    }
  }
}

describe("PopulatedCartRouteGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule
      ],
      providers: [
        PopulatedCartRouteGuard,
        { provide: ShoppingCartService, useClass: MockShoppingCartService },
        { provide: Router, useValue: sinon.createStubInstance(Router) }
      ]
    });
  });

  it("should be injectable", inject([PopulatedCartRouteGuard], (routeGaurd: PopulatedCartRouteGuard) => {
    expect(routeGaurd).toBeTruthy();
  }));

  describe("canActivate", () => {
     it("should return true if user logged in", inject([Router, PopulatedCartRouteGuard], (router: Router, gaurd: PopulatedCartRouteGuard) => {
      localStorage.setItem('currentUser', "loggedin"); 
      let result = gaurd.canActivate();
      expect(result).toBeTruthy()
    }));

    it("should return false and redirect to '/' if user not logged in",
      inject([Router, PopulatedCartRouteGuard], (router: Router, gaurd: PopulatedCartRouteGuard) => {
        localStorage.removeItem('currentUser'); 
        let result = gaurd.canActivate()
        expect(result).toBeFalsy();
        sinon.assert.calledOnce(router.navigate as SinonSpy);
        sinon.assert.calledWithExactly(router.navigate as SinonSpy, [""]);
      }));
  });
});
