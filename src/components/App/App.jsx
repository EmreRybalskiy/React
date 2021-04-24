import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Main } from "../Main/Main.jsx";

import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/" component={Main} />
      </BrowserRouter>
    </div>
  );
};
