import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "../src/components/App/App.jsx";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store.js";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
