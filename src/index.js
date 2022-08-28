import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createContext } from "react";
import { Crumbs } from "./store/CrumbStore";
import { Category } from "./store/CategoryStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        BreadCrumbs: new Crumbs(),
        Categories: new Category(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
