import {
  LOADING,
  Action,
  MODAL_CANCEL,
  Todo,
  MODAL_SUBMIT,
  CREATE_MODAL_OPEN,
  UPDATE_MODAL_OPEN,
  Dispatch
} from "../modal";
import { insertTodo } from "../files";

export const setLoader = (show: boolean): Action => {
  return {
    type: LOADING,
    payload: show
  };
};

export const openCreateModal = (): Action => {
  return {
    type: CREATE_MODAL_OPEN,
    payload: {
      showModal: true,
      selectedTodo: null
    }
  };
};

export const openUpdateModal = (todo: Todo): Action => {
  return {
    type: UPDATE_MODAL_OPEN,
    payload: {
      showModal: true,
      selectedTodo: todo
    }
  };
};

export const onModalCancel = (): Action => {
  return {
    type: MODAL_CANCEL,
    payload: {
      showModal: false,
      selectedTodo: null
    }
  };
};

export const onModalSubmit = (dispatch: Dispatch, todo: Todo): void => {
  insertTodo(todo)
    .then((todoList: Todo[]) => {
      dispatch({
        type: MODAL_SUBMIT,
        payload: {
          showModal: false,
          TodoList: todoList
        }
      });
    })
    .catch(() => {
      dispatch({
        type: MODAL_SUBMIT,
        payload: {
          showModal: false,
          TodoList: []
        }
      });
    });
};
