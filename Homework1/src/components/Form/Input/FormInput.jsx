import React, { Component } from "react";
import "./FormInput.css";
class FormInput extends Component {
    render() {
        return (
            <div>
                <input
                    className="form-field"
                    type={this.props.type}
                    placeholder={this.props.place}
                />
            </div>
        );
    }
}

export default FormInput;
