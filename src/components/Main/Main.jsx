import React from "react";

import { Form } from "./Form/Form.jsx";
import { Range } from "../Main/Range/Range.jsx";

export function Main() {
    return (
        <div className="main">
            <Form />
            <Range />
        </div>
    );
}
