import { Action, State, LOADING } from "../modal";

export const todoReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                IsLoading: action.payload
            };
        default:
            return {
                ...state
            };
    }
}