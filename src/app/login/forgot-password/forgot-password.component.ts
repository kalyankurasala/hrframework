import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  ForgotpwForm: FormGroup;

  constructor(private fb: FormBuilder) { }


  forgotpwcreateForm() {
    this.ForgotpwForm = this.fb.group({
      email: new FormControl('', Validators.required)
    });
  }
  ngOnInit() {
    this.forgotpwcreateForm();
  }
}
