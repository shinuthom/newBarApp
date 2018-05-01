import { BarState } from './bar.selector';
import { Action, ActionReducer } from '@ngrx/store';
import { AppState } from '../app.state';
import { BarActions } from '../actions/bar.actions';
import * as _ from  'lodash';

export const initialState: BarState = {
    barList: [],
    barDetail:[]
}

export function reducer (state: BarState = initialState, { type, payload }: Action) {
    let newState: BarState;
    switch(type) {
        case BarActions.FETCH_BAR_LIST_SUCCESS:
            newState = _.cloneDeep(state);
            newState.barList = payload;
            return newState;
        case BarActions.FETCH_BAR_DETAILS_SUCCESS:
            newState = _.cloneDeep(state);
            newState.barDetail = payload;
            return newState;
        default:
            return state;
    }
}