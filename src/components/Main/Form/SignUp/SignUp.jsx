import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../../Input/Input.jsx";
import { Button } from "../../../Button/Button.jsx";

import "./signup.css";

export function SignUp(props) {
  const [secondPassword, setSecondPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState(true);
  const [signUpData, setSignUpData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const addUserToLocalStorage = () => {
    localStorage.setItem("user", JSON.stringify(signUpData));
  };

  const checkPassword = () => {
    if (signUpData.password === secondPassword) {
      alert("Succeful");
      setRepeatPassword(true);
      addUserToLocalStorage();
    } else if (signUpData.password !== secondPassword) {
      setRepeatPassword(false);
    }
  };

  const checkValidFields = () => {
    if (signUpData !== "") {
      checkPassword();
    }
  };

  return (
    <div className="signup">
      <h2>Create your account</h2>
      <div className="fields">
        <span className="name-field">Username</span>
        <Input
          type="text"
          value={signUpData.userName}
          setValue={(e) => {
            setSignUpData((data) => ({ ...data, userName: e.target.value }));
          }}
        />
        <span className="name-field">Email adress</span>
        <Input
          type="email"
          value={signUpData.email}
          setValue={(e) => {
            setSignUpData((data) => ({ ...data, email: e.target.value }));
          }}
        />
        <span className="name-field">
          Password{" "}
          {!repeatPassword && (
            <span className="repeat-pass"> Password mismatch</span>
          )}
        </span>
        <Input
          type="password"
          value={signUpData.password}
          setValue={(e) => {
            setSignUpData((data) => ({ ...data, password: e.target.value }));
          }}
        />
        <Input
          type="password"
          place="Повторите пароль"
          value={secondPassword}
          setValue={(e) => setSecondPassword(e.target.value)}
        />

        <Button btnText="Create Account" localStorage={checkValidFields} />
      </div>
      <div className="link-create">
        <span>Have account? </span>
        <Link to="/form/signin" className="link-to">
          Go to Sign In
        </Link>
      </div>
    </div>
  );
}
