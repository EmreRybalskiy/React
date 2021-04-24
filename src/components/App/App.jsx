import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button } from "../Button/Button.jsx";
import { Films } from "../Films/Films.jsx";

import { requestFilms } from "../../store/actions/films.js";

import "./App.css";

export const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="app">
      <BrowserRouter>
        <Button
          btnText="Получить фильмы"
          onClick={() => dispatch(requestFilms())}
        />
        <Films />
      </BrowserRouter>
    </div>
  );
};
