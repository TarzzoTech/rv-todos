export interface Action {
    type: string;
    payload: any;
}

export const LOADING = 'LOADING';