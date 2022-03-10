import React, { useReducer } from "react";
import { firebaseReducer } from "./firebaseReducer";
import { firebaseContext } from "./firebaseContext";

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(firebaseReducer, initialState);
  return <firebaseContext.Provider>{children}</firebaseContext.Provider>;
};
