import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  triggerLogin: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showLogin(event) {
    this.triggerLogin = event;
  }
}
