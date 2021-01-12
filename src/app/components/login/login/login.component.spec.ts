import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from 'app/services/login.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthenticationService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [AuthenticationService],
      imports: [RouterTestingModule,FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = new AuthenticationService();
  });

  it('First usename and password not set at component load time', () => {
    let logIn = spyOn(service, 'loggedIn').and.returnValues(true);
    let logOut = spyOn(service, 'logout').and.returnValues(true);
    component.ngOnInit();
    expect(logIn).toBeTruthy();
    expect(logOut).toBeTruthy();
  });

  it('After Click on Login button user logged in successfully', () => {
    component.username = 'admin';
    component.password = 'admin';
    let logIn = spyOn(service, 'login').and.returnValues(true);
    component.login();
    expect(logIn).toBeTruthy();
  });

  
  it('After Click on Login button user can not logged in because of wrong credentials', () => {
    component.username = 'dgste';
    component.password = 'admin';
    spyOn(service, 'login').and.returnValues(false);
    component.login();
    expect(alert("Wrong username or password"));
  });

});
