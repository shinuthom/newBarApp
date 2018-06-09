import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl,  FormGroup, FormBuilder,  Validators } from '@angular/forms';
import { SharedService } from './../../../shared/shared.service';
import { getUserDetail } from './../../reducers/bar.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { BarActions } from '../../actions/bar.actions';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() showLogin: EventEmitter<boolean> = new EventEmitter();
  loginForm: FormGroup;
  userDetails$: Observable<any>;
  constructor(private store: Store<AppState>, private barActions: BarActions, private fb: FormBuilder, private sharedService: SharedService) {
    this.createForm();
  }
  ngOnInit() {

  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',Validators.required]
    });
  }
  hideLoginScreen() {
    this.sharedService.showLoginFun(false);
  }
  triggerLogin() {
    this.store.dispatch(this.barActions.fetchUserDetails(this.loginForm.value));
    this.userDetails$ = this.store.select(getUserDetail);
    this.userDetails$.subscribe( res => {
      if(res.response === 'SUCCESS') {
        this.sharedService.setUserLoggedIn(true);
        localStorage.setItem('userDetails',JSON.stringify(res));
      }
      this.sharedService.showLoginFun(false);
    })
  }
}
