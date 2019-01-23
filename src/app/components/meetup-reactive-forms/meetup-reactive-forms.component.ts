import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meetup-reactive-forms',
  templateUrl: './meetup-reactive-forms.component.html'
})
export class MeetupReactiveFormsComponent implements OnInit {

  formDemo = this.formBuilder.group({
    'username': ['', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(5)]],
    'password': ['', Validators.required],
    'repitePassword': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email, this.validateFormatEmail]],
    'fullname': ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formDemo.setValidators(this.validatePassword);
  }

  formSubmit () {
    console.log('Formulario -> ', this.formDemo.value);
  }

  validateFormatEmail(control: FormControl) {
    if (control.value.endsWith('.com') || control.value.endsWith('.es')) {
      return null;
    } else {
      return {'extensionError': true};
    }
  }

  validatePassword(group: FormGroup) {
    if (group.value.password === group.value.repitePassword) {
      return null;
    } else {
      return {'repitePasswordError': true};
    }
  }

}
