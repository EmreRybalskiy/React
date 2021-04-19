import React from "react";
// import { Main } from "../Main/Main.jsx";

import "./App.css";

export function App() {
  return (

      <header></header>,
      <main>
        {[[1], [2], [3]].map((item) => (
          <ul>
            <li>{item}</li>
          </ul>
        ))}
      </main>
      ,<footer></footer>,

  );
}
