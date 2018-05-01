
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { BarActions } from '../actions/bar.actions';
import { Observable } from 'rxjs/Observable';
import { BackendService } from '../shared/services/backend.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { AppState } from '../app.state';

@Injectable()
export class BarEffects {

    @Effect()
    barList$ = this.actions$
        .ofType(BarActions.FETCH_BAR_LIST)
        .switchMap((action: Action) => this.backendService.fetchBarList(action.payload))
        .map((data: any) => this.successOrFailed(data, this.barActions.fetchBarListSuccess, this.barActions.fetchBarListFailure));
    @Effect()
    barDetails$ = this.actions$
        .ofType(BarActions.FETCH_BAR_DETAILS)
        .switchMap((action: Action) => this.backendService.fetchBarDetails(action.payload))
        .map((data: any) => this.successOrFailed(data, this.barActions.fetchBarDetailsSuccess, this.barActions.fetchBarDetailsFailure));

    successOrFailed(data, successAction, failureAction){
        if(data.hasError) {
            return data.hasError ? failureAction(data) : successAction(data);
        } else {
            return data ? successAction(data) : failureAction(data);
        }
    }
    
    constructor(private actions$: Actions,
    private barActions: BarActions, 
    private backendService: BackendService,
    private store: Store<AppState>) {}
}