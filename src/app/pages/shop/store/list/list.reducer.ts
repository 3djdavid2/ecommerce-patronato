import { Pagination } from './list.models';
import * as fromActions from './list.actions';
import { HttpParams } from '@angular/common/http';


//data que va a a almecenar el reducer (tipos de datos:)
export interface ListState {
    pagination: Pagination | null;
    requestPagination: HttpParams | null;
    loading: boolean | null;
    error: string | null;
}
//setear los valores
export const initialState: ListState = {
    pagination: null,
    requestPagination: null,
    loading: null,
    error: null
}

export function reducer(state: ListState = initialState, action: fromActions.All | any) {

    switch (action.type) {
        case fromActions.Types.READ: {
            return { ...state, loading: true, error: null, requestPagination: action.paginationRequest };
        }
        case fromActions.Types.READ_SUCCES: {
            return { ...state, loading: false, error: null, pagination: action.pagination };
        }
        case fromActions.Types.READ_ERROR: {
            return { ...state, loading: false, error: action.error };
        }
        default: {
            return state;
        }
    }

}