export interface Action {
    type: string;
    payload: any;
}

export const LOADING = 'LOADING';
export const MODAL_CANCEL = 'MODAL_CANCEL';
export const MODAL_SUBMIT = 'MODAL_SUBMIT';
export const CREATE_MODAL_OPEN = 'CREATE_MODAL_OPEN';
export const UPDATE_MODAL_OPEN = 'UPDATE_MODAL_OPEN';