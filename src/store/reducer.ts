import {
  Action,
  State,
  LOADING,
  MODAL_CANCEL,
  MODAL_SUBMIT,
  CREATE_MODAL_OPEN,
  UPDATE_MODAL_OPEN,
  ERROR_OCCURRED,
  DELETE_TODO
} from "../modal";

export const todoReducer = (state: State, action: Action): State => {
  console.log(action);
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        IsLoading: action.payload
      };
    case MODAL_CANCEL:
      return {
        ...state,
        ...action.payload
      };
    case CREATE_MODAL_OPEN:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_MODAL_OPEN:
      return {
        ...state,
        ...action.payload
      };
    case MODAL_SUBMIT:
      return {
        ...state,
        ...action.payload
      };
    case DELETE_TODO:
      return {
        ...state,
        ...action.payload
      };
    case ERROR_OCCURRED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
