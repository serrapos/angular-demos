import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { checkAndUpdateElementInline } from '@angular/core/src/view/element';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  loginForm = this.builder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    firstName: new FormControl('', Validators.required),
    lastName  : new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  changePasswordForm = this.builder.group({
    'oldPassword': ['', Validators.required],
    'newPassword': ['', [Validators.required, Validators.minLength(5)]],
    'repitePassword': ['', [Validators.required, this.validateSamePassword]]
  });

  loginError: boolean;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
  }

  loginFormSubmit() {
    console.log('Login form: ', this.loginForm.value);
    if (!(this.loginForm.value.username === 'admin' && this.loginForm.value.password === 'admin')) {
      this.loginError = true;
    }
  }

  registerFormSubmit() {
    console.log('Submit Register Form: ', this.registerForm.value);
  }

  changePasswordFormSubmit() {
    console.log('Submit Change Password Form: ', this.changePasswordForm.value);
  }

  validateSamePassword(repitePassword: FormControl) {
    if (repitePassword.root && repitePassword.value === repitePassword.root.value.newPassword) {
      return null;
    }
    return {incorrectPassword: true};
  }

}
