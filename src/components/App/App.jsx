import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Form } from "../Form/Form.jsx";

import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    </div>
  );
};
