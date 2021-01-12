import { inject, TestBed } from "@angular/core/testing";
import { AuthenticationService } from "../login.service";

describe("Authentication service", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                AuthenticationService,
            ]
        });
    });

    it("should be injectable", inject([AuthenticationService], (service: AuthenticationService) => {
        expect(service).toBeTruthy();
    }));

    it("Login with wrong credentials",
        inject([AuthenticationService],
            (service: AuthenticationService) => {
                let result = service.login('seema', 'seema');
                expect(result).toBeFalsy();
            }));

    it("Login with right credentials",
        inject([AuthenticationService],
            (service: AuthenticationService) => {
                let result = service.login('admin', 'admin');
                expect(result).toBeTruthy();
            }));

    it("Check user is logged in successfully",
        inject([AuthenticationService],
            (service: AuthenticationService) => {
                localStorage.setItem('currentUser', "loggedin");
                let result = service.loggedIn;
                expect(result).toBeTruthy();
            }));

    it("Check user is logout  successfully",
        inject([AuthenticationService],
            (service: AuthenticationService) => {
                localStorage.removeItem('currentUser');
                let result = service.loggedIn;
                expect(result).toBeFalsy();
            }));
    it("After click on logout button user can not logout",
        inject([AuthenticationService],
            (service: AuthenticationService) => {
                localStorage.setItem('currentUser', "loggedin");
                let result = service.logout();
                expect(result).toBeFalsy();
            }));
});