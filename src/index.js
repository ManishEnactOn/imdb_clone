import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { AppProvider } from "./context/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AppProvider>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </AppProvider>
  // </React.StrictMode>
);

reportWebVitals();