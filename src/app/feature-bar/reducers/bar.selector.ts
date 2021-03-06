import { BarList } from '../shared/models/bar-list.model';
import { AppState } from './../app.state';
import { createSelector } from 'reselect';

export class BarState {
    barList: BarList[];
    barDetail: any;
    previousBarCount: number;
    userDetail: any;
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
const fetchPreviousBarCount = function(state: BarState) {
    return state.previousBarCount;
}
const fetchUserDetails = function(state: BarState) {
    return state.userDetail;
}

export const getBarList = createSelector(getBarState, fetchBarList);
export const getBarDetail = createSelector(getBarState, fetchBarDetail);
export const getPreviousBarCount = createSelector(getBarState, fetchPreviousBarCount);
export const getUserDetail = createSelector(getBarState, fetchUserDetails);