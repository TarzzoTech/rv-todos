import { createContext } from "react";
import { Store } from "./modal";

export const ContextAPI = createContext({} as Store);
export const Provider = ContextAPI.Provider;
