import React, { Context, useReducer } from "react";

type State = { open: boolean; close: boolean; modalData: any };
type Action = { type: string; payload: any };
type Dispatch = (action: Action) => void;
let ModalContext: Context<{ state: State; dispatch: Dispatch }>;
let { Provider } = (ModalContext = React.createContext<{
  state: State;
  dispatch: Dispatch;
}>({} as any));

function modalReducer(state: State, action: Action) {
  switch (action.type) {
    case "open": {
      return { ...state, open: true, close: false, modalData: action.payload };
    }
    case "close": {
      console.log("close", action.payload);
      return { ...state, open: false, close: true, modalData: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

let ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(modalReducer, {
    open: false,
    close: true,
    modalData: null,
  });
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { ModalContext, ModalContextProvider };
