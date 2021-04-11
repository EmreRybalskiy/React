import React from "react";

import "./input.css";

export function Input({ type, value, setValue, place }) {
    return (
        <div>
            <input
                className="form-input"
                type={type}
                value={value}
                onChange={setValue}
                placeholder={place}
            />
        </div>
    );
}
