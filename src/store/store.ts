import { useReducer } from "react";
import { State, Store } from "../modal";
import { getInitialState } from "../utils";
import { todoReducer } from "./reducer";

// const initialState: State = getInitialState();

// const [state, dispatch] = useReducer(todoReducer, initialState);

// export const store: Store = {
//     state,
//     dispatch
// };