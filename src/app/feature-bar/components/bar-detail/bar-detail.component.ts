import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import { getBarDetail } from './../../reducers/bar.selector';
import { AppState } from '../../app.state';
import { BarActions } from '../../actions/bar.actions';

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.css']
})
export class BarDetailComponent implements OnInit {
    barId: number;
    private sub: any;
    barDetails$: Observable<any>;
    barDetailSpec: any;
    constructor(private route: ActivatedRoute, private store: Store<AppState>,  private barActions: BarActions) { }
    
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.barId = params['id'];
        //console.log(this.barId)
     });
     this.store.dispatch(this.barActions.fetchBarDetails(this.barId));
     this.barDetails$ = this.store.select(getBarDetail);
     this.barDetails$.subscribe(rst =>{
         this.barDetailSpec = rst;
     })
     
  }
  openTab(cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    //evt.currentTarget.className += " active";
}
}
