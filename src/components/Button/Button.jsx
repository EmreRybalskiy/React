import React from "react";
import "./button.css";

export function Button({ btnText, onClick }) {
  return (
    <div>
      <button className="form-btn" onClick={onClick}>
        {btnText}
      </button>
    </div>
  );
}
