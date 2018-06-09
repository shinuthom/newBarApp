import { BarState } from './bar.selector';
import { Action, ActionReducer } from '@ngrx/store';
import { AppState } from '../app.state';
import { BarActions } from '../actions/bar.actions';
import * as _ from  'lodash';

export const initialState: BarState = {
    barList: [],
    barDetail:[],
    previousBarCount: -1,
    userDetail:[]
}

export function reducer (state: BarState = initialState, { type, payload }: Action) {
    let newState: BarState;
    switch(type) {
        case BarActions.FETCH_BAR_LIST_SUCCESS:
            newState = _.cloneDeep(state);
            newState.barList = payload;
            newState.previousBarCount = payload.length;
            return newState;
        case BarActions.FETCH_BAR_LIST_ONSCROLL_SUCCESS:
            newState = _.cloneDeep(state);
            newState.barList = [...state.barList,...payload];
            newState.previousBarCount = payload.length;
            return newState;
        case BarActions.FETCH_BAR_DETAILS_SUCCESS:
            newState = _.cloneDeep(state);
            newState.barDetail = payload;
            return newState;
        case BarActions.FETCH_USER_DETAILS_SUCCESS:
            newState = _.cloneDeep(state);
            newState.userDetail = payload;
            return newState;
        default:
            return state;
    }
}