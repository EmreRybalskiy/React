import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../../Input/Input.jsx";
import { Button } from "../../../Button/Button.jsx";

import "./signup.css";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");

    const addUserToLocalStorage = () => {
        localStorage.setItem("user", JSON.stringify(obj));
    };

    const checkPassword = () => {
        if (password === secondPassword) {
            addUserToLocalStorage();
        }
        return false;
    };

    const obj = {
        userName: name,
        email: email,
        password: password,
        isAuthenticated : false
    };

    return (
        <div className="signup">
            <h2>Create your account</h2>
            <div className="fields">
                <span className="name-field">Username</span>
                <Input
                    type="text"
                    value={name}
                    setValue={(e) => setName(e.target.value)}
                />
                <span className="name-field">Email adress</span>
                <Input
                    type="email"
                    value={email}
                    setValue={(e) => setEmail(e.target.value)}
                />
                <span className="name-field">Password</span>

                <Input
                    type="password"
                    value={password}
                    setValue={(e) => setPassword(e.target.value)}
                />
                <Input
                    type="password"
                    place="Повторите пароль"
                    value={secondPassword}
                    setValue={(e) => setSecondPassword(e.target.value)}
                />
                <Button btnText="Create Account" localStorage={checkPassword} />
            </div>
            <div className="link-create">
                <span>Have account? </span>
                <Link to="/" className="link-to">
                    Go to Sign In
                </Link>
            </div>
        </div>
    );
}
