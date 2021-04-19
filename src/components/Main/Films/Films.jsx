import React from "react";
import { Link } from "react-router-dom";
import { Fetch } from "../../Fetch/Fetch.jsx";

export function Films() {
  return (
    <div>
      <h1>My Films!</h1>
      <Link to="/">Back</Link>
      <div>
        <Fetch />
      </div>
    </div>
  );
}
