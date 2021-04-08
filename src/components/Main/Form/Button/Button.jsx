import React, { Component } from "react";

import "./button.css";
class button extends Component {
    render() {
        return (
            <div>
                <button className="form-btn">{this.props.btnText}</button>
            </div>
        );
    }
}

export default button;
