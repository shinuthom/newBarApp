import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { BarActions } from '../../actions/bar.actions';
import { Observable } from 'rxjs/observable';
import { getBarList } from './../../reducers/bar.selector';

@Component({
  selector: 'bar-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>, private barActions: BarActions) { }
  barList$: Observable<any>;

  ngOnInit() {
    this.store.dispatch(this.barActions.fetchBarList(0));
    this.barList$ = this.store.select(getBarList);
  }

}
