import React, { Component } from "react";

class InputRange extends Component {
    render() {
        return (
            <div>
                <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default InputRange;
