import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { SharedService } from './../../shared/shared.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedService) { }
  isUserLoggedIn: boolean = false;  

  ngOnInit() {
    this.sharedService.isUserLoggedIn.subscribe(d=>{
      this.isUserLoggedIn = d;
    })
  }
  showLoginScreen() {
    this.sharedService.showLoginFun(true);
  }
  Logout() {
    localStorage.removeItem('userDetails');
    this.sharedService.setUserLoggedIn(false);
  }
}
