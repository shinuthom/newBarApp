import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.css']
})
export class BarListComponent implements OnInit {

  constructor() { }
  @Input() barList: any;

  ngOnInit() {
    
  }

}
