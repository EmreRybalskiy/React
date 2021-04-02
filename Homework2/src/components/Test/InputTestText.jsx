import React, { Component } from "react";

class InputTestText extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.value2} readOnly />
            </div>
        );
    }
}

export default InputTestText;
