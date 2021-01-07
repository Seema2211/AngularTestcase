import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;  
  password: string;  
  title = 'auth-guard-demo';  
  constructor(private _auth: AuthenticationService, private _router: Router) {  
    if (this._auth.loggedIn) {  
      this._router.navigate(['home']);  
    }  
  }  
  ngOnInit(): void {
    debugger
    if (this._auth.loggedIn) {  
      this._auth.logout();  
    }
  }
  login(): void {  
    if (this.username != '' && this.password != '') {  
      if (this._auth.login(this.username, this.password)) {  
        this._router.navigate(["store"]);  
      }  
      else  
        alert("Wrong username or password");  
    }  
  }  

}
