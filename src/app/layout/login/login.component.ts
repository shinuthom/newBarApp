import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl,  FormGroup, FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() showLogin: EventEmitter<boolean> = new EventEmitter();
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit() {

  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['',[,Validators.email,Validators.required]],
      password: ['',Validators.required]
    });
  }
  hideLoginScreen() {
    this.showLogin.emit(false);
  }
}
