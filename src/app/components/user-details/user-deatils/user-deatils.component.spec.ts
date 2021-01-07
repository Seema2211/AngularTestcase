import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UserDeatilsComponent } from './user-deatils.component';

describe('UserDeatilsComponent', () => {
  let component: UserDeatilsComponent;
  let fixture: ComponentFixture<UserDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeatilsComponent ],
      imports: [ReactiveFormsModule,RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
  it('Check validation for Name of userDetailsForm (ReactiveForm )', () =>{
    let name = component.userDetailsForm.controls["name"];
    expect(name.valid).toBeFalsy();
    expect(name.pristine).toBeTruthy();
    expect(name.errors['required']).toBeTruthy();
    name.setValue('Seema');
    expect(name.valid).toBeTruthy();
    expect(name.errors).toBeNull();
  })

  it('Check validation for email of userDetailsForm (ReactiveForm )', () =>{
    let email = component.userDetailsForm.controls["email"];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('Seema');
    expect(email.valid).toBeFalsy();
    email.setValue("seema@gamil.com");
    expect(email.valid).toBeTruthy();
    expect(email.errors).toBeNull();
  })

  it('Check validation for contact of userDetailsForm (ReactiveForm )', () =>{
    let contact = component.userDetailsForm.controls["contact"];
    expect(contact.valid).toBeFalsy();
    expect(contact.pristine).toBeTruthy();
    expect(contact.errors['required']).toBeTruthy();
    contact.setValue('fgt');
    expect(contact.valid).toBeFalsy();
    contact.setValue(567484);
    expect(contact.valid).toBeTruthy();
    expect(contact.errors).toBeNull();
  })

  it('Check validation for address of userDetailsForm (ReactiveForm )', () =>{
    let address = component.userDetailsForm.controls["address"];
    expect(address.valid).toBeFalsy();
    expect(address.pristine).toBeTruthy();
    expect(address.errors['required']).toBeTruthy();
    address.setValue('address 1');
    expect(address.valid).toBeTruthy();
    expect(address.errors).toBeNull();
  })

  it('Check validation for state of userDetailsForm (ReactiveForm )', () =>{
    let state = component.userDetailsForm.controls["state"];
    expect(state.valid).toBeFalsy();
    expect(state.pristine).toBeTruthy();
    expect(state.errors['required']).toBeTruthy();
    state.setValue('State');
    expect(state.valid).toBeTruthy();
    expect(state.errors).toBeNull();
  })

  it('Check validation for pincode of userDetailsForm (ReactiveForm )', () =>{
    let pincode = component.userDetailsForm.controls["pincode"];
    expect(pincode.valid).toBeFalsy();
    expect(pincode.pristine).toBeTruthy();
    expect(pincode.errors['required']).toBeTruthy();
    pincode.setValue(567484);
    expect(pincode.valid).toBeTruthy();
    expect(pincode.errors).toBeNull();
  })
});
