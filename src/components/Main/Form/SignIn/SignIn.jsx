import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../../Input/Input.jsx";
import { Button } from "../../../Button/Button.jsx";

import "./signin.css";


export function SignIn(props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const redirect = () => {
        const { history } = props;
        history.push("/signup");
    };

    const getFromLocalStorage = () => {
        if (localStorage.getItem("user") !== null) {
            const user = JSON.parse(
                localStorage.getItem(localStorage.key("user"))
            );
            if (user.userName === name && user.password === password) {
                user.isAuthenticated = 'true';
                localStorage.setItem("user", JSON.stringify(user));
                alert('Теперь вы можете перейти в свой профиль')
            } else {
                redirect();
            }
        }
    };

    return (
        <div className="signin">
             <Link to="/profile" className="link-to">
                Profile
            </Link>
            <h2>Sign in to Us!</h2>
            <div className="fields">
                <span className="name-field">Username</span>
                <Input
                    type="text"
                    value={name}
                    setValue={(e) => setName(e.target.value)}
                />
                <div className="field-password">
                    <span>Password</span>
                    <span className="forgot-pass">Forgot Password?</span>
                </div>
                <Input
                    type="password"
                    value={password}
                    setValue={(e) => setPassword(e.target.value)}
                />

                <Button btnText="Sign In" localStorage={getFromLocalStorage} />
            </div>
            <div className="link-create">
                <span>New with us? </span>
                <Link to="/signup" className="link-to">
                    Go to Sign Up
                </Link>
            </div>
        </div>
    );
}
