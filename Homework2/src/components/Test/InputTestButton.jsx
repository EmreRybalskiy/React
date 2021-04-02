import React, { Component } from "react";

class InputTestButton extends Component {
    render() {
        return (
            <div>
                <button type="submit" onClick={this.props.handleClick}>
                    Add + 1
                </button>
            </div>
        );
    }
}

export default InputTestButton;
