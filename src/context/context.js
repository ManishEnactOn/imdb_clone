import React from "react";
import { getAuth } from "firebase/auth";
import { createContext } from "react";

const auth = getAuth();
const AppContext = createContext();

function AppProvider({ children }) {
  return <AppContext.Provider value={auth}>{children}</AppContext.Provider>;
}
export { AppProvider, AppContext };
