import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";


@Injectable()
export class PopulatedCartRouteGuard implements CanActivate {

  constructor(private _router: Router) { }  
    canActivate() {  
        if (localStorage.getItem('currentUser')) {  
            return true;  
        }  
        this._router.navigate(['']);  
        return false;  
    }  
}
