import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({
  reducer,
  initialState,
  authReducer,
  children,
}) => {
  return (
    <StateContext.Provider
      value={useReducer(reducer, initialState, authReducer)}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
