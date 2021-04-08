import React, { Component } from "react";
import { Link } from "react-router-dom";

import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

import "./signup.css";

class SignUp extends Component {
    render() {
        return (
            <div className="signup">
                <h2>Create your account</h2>
                <div className="fields">
                    <span className="name-field">Username</span>
                    <Input type="text" />
                    <span className="name-field">Email adress</span>
                    <Input type="email" />
                    <span className="name-field">Password</span>
                    <Input type="password" />
                    <Button btnText="Create Account" />
                </div>
                <div className="link-create">
                    <span>Have account? </span>
                    <Link to="/" className="link-to">
                        Go to SignIn
                    </Link>
                </div>
            </div>
        );
    }
}
export default SignUp;
