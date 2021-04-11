import React from "react";

export function InputText(props) {
    return (
        <div>
            <input type="text" value={props.value} readOnly />
        </div>
    );
}