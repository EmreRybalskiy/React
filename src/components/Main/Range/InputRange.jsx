import React from "react";

export function InputRange(props) {
    return (
        <div>
            <input
                type="range"
                step="1"
                min="1"
                max="100"
                onChange={props.onChange}
            />
        </div>
    );
}
