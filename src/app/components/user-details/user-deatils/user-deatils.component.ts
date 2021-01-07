import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-deatils',
  templateUrl: './user-deatils.component.html',
  styleUrls: ['./user-deatils.component.scss']
})
export class UserDeatilsComponent implements OnInit {
  userDeatils = false;
  userDetailsForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userDetailsForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      contact: ['',[Validators.required,Validators.pattern(/^[0-9]\d*$/)]],
      address: ['',[Validators.required]],
      state: ['',[Validators.required]],
      pincode: ['',[Validators.required, Validators.maxLength(6)]],
      upi: ['',[Validators.required]],
    });
  }
  get cpf() {
    return this.userDetailsForm.controls;
  }
  onSubmit()
  {
    this.router.navigate(['/confirmed']);
  }
}
