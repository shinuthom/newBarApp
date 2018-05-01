import { BarList } from '../shared/models/bar-list.model';
import { AppState } from './../app.state';
import { createSelector } from 'reselect';

export class BarState {
    barList: BarList[];
    barDetail: any;
}

export function getBarState(state: AppState): BarState {
    return state.barState;
}

const fetchBarList = function(state: BarState): BarList[] {
    return state.barList;
}
const fetchBarDetail = function(state: BarState) {
    return state.barDetail;
}

export const getBarList = createSelector(getBarState, fetchBarList);
export const getBarDetail = createSelector(getBarState, fetchBarDetail);