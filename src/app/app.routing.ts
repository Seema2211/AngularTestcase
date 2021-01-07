import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CheckoutComponent } from "./components/checkout/checkout.component";
import { LoginComponent } from "./components/login/login/login.component";
import { OrderConfirmationComponent } from "./components/order-confirmation/order-confirmation.component";
import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { UserDeatilsComponent } from "./components/user-details/user-deatils/user-deatils.component";
import { PopulatedCartRouteGuard } from "./route-gaurds/populated-cart.route-gaurd";

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {
                component: LoginComponent,
                path: ""
            },
            {
                component: LoginComponent,
                path: "login"
            },
            {
                canActivate: [PopulatedCartRouteGuard],
                component: CheckoutComponent,
                path: "checkout"
            },
            {
                canActivate: [PopulatedCartRouteGuard],
                component: OrderConfirmationComponent,
                path: "confirmed"
            },
            {
                canActivate: [PopulatedCartRouteGuard],
                component: StoreFrontComponent,
                path: "store"
            }
            ,
            {
                canActivate: [PopulatedCartRouteGuard],
                component: UserDeatilsComponent,
                path: "user-deatils"
            },])
    ]
})
export class AppRoutingModule { }
