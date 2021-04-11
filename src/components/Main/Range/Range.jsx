import React, { useState } from "react";

import { InputText } from "../Range/InputText.jsx";
import { InputRange } from "../Range/InputRange.jsx";

import "./range.css";

export function Range() {
    const [count, setCount] = useState(0);
    const onChange = (e) => {
        setCount(e.target.value);
    };
    return (
        <div className="range">
            <InputRange onChange={onChange} />
            <InputText value={count} />
        </div>
    );
}
