import {
  LOADING,
  Action,
  MODAL_CANCEL,
  Todo,
  MODAL_SUBMIT,
  CREATE_MODAL_OPEN,
  UPDATE_MODAL_OPEN
} from "../modal";

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

export const onModalSubmit = (todoList: Todo[]): Action => {
  return {
    type: MODAL_SUBMIT,
    payload: {
      showModal: false,
      TodoList: todoList
    }
  };
};
