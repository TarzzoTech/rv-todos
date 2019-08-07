import { State, Dispatch } from "./state";

export interface mapStateToProps {
    [key: string]: any;
}

export interface mapDispatchToProps {
    [key: string]: Function;
}

export type mapStateToPropsFn = () => mapStateToProps;
export type mapDispatchToPropsFn = () => mapDispatchToProps;