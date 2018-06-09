import { Action } from '@ngrx/store';

export class BarActions {
    static FETCH_BAR_LIST = 'FETCH_BAR_LIST';
    static FETCH_BAR_LIST_SUCCESS = 'FETCH_BAR_LIST_SUCCESS';
    static FETCH_BAR_LIST_FAILURE = 'FETCH_BAR_LIST_FAILURE';

    static FETCH_BAR_LIST_ONSCROLL = 'FETCH_BAR_LIST_ONSCROLL';
    static FETCH_BAR_LIST_ONSCROLL_SUCCESS = 'FETCH_BAR_LIST_ONSCROLL_SUCCESS';
    static FETCH_BAR_LIST_ONSCROLL_FAILURE = 'FETCH_BAR_LIST_ONSCROLL_FAILURE';

    static FETCH_BAR_DETAILS = 'FETCH_BAR_DETAILS';
    static FETCH_BAR_DETAILS_SUCCESS = 'FETCH_BAR_DETAILS_SUCCESS';
    static FETCH_BAR_DETAILS_FAILURE = 'FETCH_BAR_DETAILS_FAILURE';

    static FETCH_USER_DETAILS = 'FETCH_USER_DETAILS';
    static FETCH_USER_DETAILS_SUCCESS = 'FETCH_USER_DETAILS_SUCCESS';
    static FETCH_USER_DETAILS_FAILURE = 'FETCH_USER_DETAILS_FAILURE';
 
    fetchBarList(data: any): Action {
        return {
            type: BarActions.FETCH_BAR_LIST,
            payload: data
        };
    };
    fetchBarListSuccess(data: any): Action {
        return {
            type: BarActions.FETCH_BAR_LIST_SUCCESS,
            payload: data
        };
    };
    fetchBarListFailure(data: any): Action {
        return {
            type: BarActions.FETCH_BAR_LIST_FAILURE,
            payload: data
        }
    }

    fetchBarListOnScroll(data: any): Action {
        return {
            type: BarActions.FETCH_BAR_LIST_ONSCROLL,
            payload: data
        };
    };
    fetchBarListOnScrollSuccess(data: any): Action {
        return {
            type: BarActions.FETCH_BAR_LIST_ONSCROLL_SUCCESS,
            payload: data
        };
    };
    fetchBarListOnScrollFailure(data: any): Action {
        return {
            type: BarActions.FETCH_BAR_LIST_ONSCROLL_FAILURE,
            payload: data
        }
    }

    fetchBarDetails(data: any): Action {
        return {
            type: BarActions.FETCH_BAR_DETAILS,
            payload: data
        };
    };
    fetchBarDetailsSuccess(data: any): Action {
        return {
            type: BarActions.FETCH_BAR_DETAILS_SUCCESS,
            payload: data
        };
    };
    fetchBarDetailsFailure(data: any): Action {
        return {
            type: BarActions.FETCH_BAR_DETAILS_FAILURE,
            payload: data
        }
    }

    fetchUserDetails(data: any): Action {
        return {
            type: BarActions.FETCH_USER_DETAILS,
            payload: data
        };
    };
    fetchUserDetailsSuccess(data: any): Action {
        return {
            type: BarActions.FETCH_USER_DETAILS_SUCCESS,
            payload: data
        };
    };
    fetchUserDetailsFailure(data: any): Action {
        return {
            type: BarActions.FETCH_USER_DETAILS_FAILURE,
            payload: data
        }
    }
}
