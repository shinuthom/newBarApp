import { reducer as barReducer } from './reducers/bar.reducer';
import { combineReducers, ActionReducer } from '@ngrx/store';
import { AppState } from './app.state';
import { compose } from '@ngrx/core/compose';

const reducers = {
    barState: barReducer

};

export const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action)
}
