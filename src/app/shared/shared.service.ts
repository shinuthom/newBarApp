import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class SharedService {
    showLogin = new BehaviorSubject(false);
    isUserLoggedIn = new BehaviorSubject(false);
    showLoginFun(val) {
        this.showLogin.next(val);
    }
    triggerLogin() {
        return this.showLogin.asObservable;
    }
    setUserLoggedIn(val) {
        this.isUserLoggedIn.next(val);
        return this.isUserLoggedIn.asObservable;
    }
    getIserLoggedIn() {
        return this.isUserLoggedIn.asObservable;
    }
  
}