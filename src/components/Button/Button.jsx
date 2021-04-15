import React from "react";

import "./button.css";

export function Button({ btnText, localStorage }) {
    return (
        <div>
            <button className="form-btn" onClick={localStorage}>
                {btnText}
            </button>
        </div>
    );
}
