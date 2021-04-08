import React, { Component } from "react";

import "./input.css";
class Input extends Component {
    render() {
        return (
            <div>
                <input type={this.props.type} className='form-input'/>
            </div>
        );
    }
}

export default Input;
