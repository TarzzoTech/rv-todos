export interface Action {
    type: string;
    payload: any;
}

export const LOADING = 'LOADING';
export const MODAL_CANCEL = 'MODAL_CANCEL';
export const MODAL_SUBMIT = 'MODAL_SUBMIT';
export const CREATE_MODAL_OPEN = 'CREATE_MODAL_OPEN';
export const UPDATE_MODAL_OPEN = 'UPDATE_MODAL_OPEN';
export const DELETE_TODO = 'DELETE_TODO';
export const ERROR_OCCURRED = 'ERROR_OCCURRED';