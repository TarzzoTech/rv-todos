import React, { createContext, Component, useContext } from "react";
import {
    mapStateToPropsFn, mapDispatchToPropsFn, mapStateToProps, mapDispatchToProps, Store
} from "./modal";

export const ContextAPI = createContext({} as Store);
export const Provider = ContextAPI.Provider;

export const connect = (mapStateToPropsFn: mapStateToPropsFn, mapDispatchToPropsFn?: mapDispatchToPropsFn) => {

    return (WrappedComponent: any) => {
        // const { state, dispatch }: Store = useContext(ContextAPI);
        const stateToProps: mapStateToProps = mapStateToPropsFn();
        let dispatchToProps: mapDispatchToProps = {} as mapDispatchToProps;
        if (typeof mapDispatchToPropsFn === "function") {
            dispatchToProps = mapDispatchToPropsFn();
        }
        const props = { ...stateToProps, ...dispatchToProps };
        return class WrapperComponent extends Component<any, any> {
            render() {
                return (<WrappedComponent {...{ ...props, ...this.props }} />);
            }
        }
    };
};
