import React, { Component } from "react";
import { Link } from "react-router-dom";

import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

import "./signin.css";

class SignIn extends Component {
    render() {
        return (
            <div className="signin">
                <h2>Sign in to Us!</h2>
                <div className="fields">
                    <span className="name-field">Username</span>
                    <Input type="text" />
                    <div className="field-password">
                        <span>Password</span>
                        <span className="forgot-pass">Forgot Password?</span>
                    </div>
                    <Input type="password" />

                    <Button btnText="Sign In" />
                </div>
                <div className="link-create">
                    <span>New with us? </span>
                    <Link to="/signup" className="link-to">
                        Go to SignUp
                    </Link>
                </div>
            </div>
        );
    }
}
export default SignIn;
