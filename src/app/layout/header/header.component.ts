import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output() showLogin: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
  }
  showLoginScreen() {
    this.showLogin.emit(true);
  }

}
