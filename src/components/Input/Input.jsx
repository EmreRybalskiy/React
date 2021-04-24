import React from "react";

import "./input.css";

export function Input({ type, value, setValue, place, className }) {
  return (
    <div>
      <input
        className={"form-input " + className}
        type={type}
        value={value}
        onChange={setValue}
        placeholder={place}
      />
    </div>
  );
}
