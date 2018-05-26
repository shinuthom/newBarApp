import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { BarActions } from '../../actions/bar.actions';
import { Observable } from 'rxjs/observable';
import { getBarList, getPreviousBarCount } from './../../reducers/bar.selector';


@Component({
  selector: 'bar-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>, private barActions: BarActions) { }
  barList$: Observable<any>;
  barListCount: number = 0;
  previousBarCount$: Observable<any>;
  triggerBarListService: boolean = true;

  ngOnInit() {
    this.store.dispatch(this.barActions.fetchBarList(this.barListCount));
    this.barList$ = this.store.select(getBarList);
    this.barList$.subscribe(data => {
      this.barListCount = data.length;
    });
  }
  onScroll() {
    this.previousBarCount$ = this.store.select(getPreviousBarCount);
    this.previousBarCount$.subscribe(data => {
      if(data == 0) {
        this.triggerBarListService = false;
      }
    });
    if(this.triggerBarListService) {
      this.store.dispatch(this.barActions.fetchBarListOnScroll(this.barListCount));
      this.barList$ = this.store.select(getBarList);
    }
  }
}
