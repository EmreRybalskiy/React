import React, { Component } from "react";

class InputText extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.value} readOnly />
            </div>
        );
    }
}

export default InputText;
