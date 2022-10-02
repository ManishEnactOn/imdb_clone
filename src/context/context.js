import { getAuth } from "firebase/auth";
import React from "react";
import { createContext } from "react";

const AppContext = createContext();
const auth = getAuth();

function AppProvider({ children }) {
  return <AppContext.Provider value={{ auth }}>{children}</AppContext.Provider>;
}
export { AppProvider, AppContext };
