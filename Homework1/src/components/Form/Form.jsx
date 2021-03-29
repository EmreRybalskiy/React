import React, { Component } from "react";
import FormButton from "./Button/FormButton.jsx";
import FormInput from "./Input/FormInput.jsx";
import "./Form.css";
class Form extends Component {
    render() {
        return (
            <div>
                <div className="form">
                    <p className="formHeader">FORM</p>
                    <FormInput place="Name" type="text" />
                    <FormInput place="Email" type="email" />
                    <FormInput place="Password" type="password" />
                    <FormButton />
                </div>
            </div>
        );
    }
}

export default Form;
