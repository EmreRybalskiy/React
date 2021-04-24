import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Input } from "../../Input/Input.jsx";
import { Button } from "../../Button/Button.jsx";
import { createSetSignUpDataAction } from "../../../store/actions/signUpActions.js";

import "./signup.css";

export function SignUp(props) {
  const [secondPassword, setSecondPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState(true);
  const [signUpData, setSignUpData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [showResultSignUp, setShowResultSignUp] = useState(false);

  const dispatch = useDispatch();
  const signUpDataStore = useSelector(({ signUp }) => signUp);
  const resultSignUp = Object.entries(signUpDataStore);

  const checkPassword = () => {
    if (signUpData.password === secondPassword) {
      alert("Succeful");
      setRepeatPassword(true);
    } else if (signUpData.password !== secondPassword) {
      setRepeatPassword(false);
    }
  };

  const checkValidFields = () => {
    if (signUpData.userName && signUpData.email && signUpData.password) {
      checkPassword();
    } else {
      alert("введите данные");
    }
  };

  return (
    <div className="signup">
      {showResultSignUp &&
        signUpData.userName &&
        signUpData.email &&
        signUpData.password && (
          <div>
            {resultSignUp.map(([key, value]) => (
              <div key={key}>
                <span> {key + ":"}</span>
                <span> {value}</span>
              </div>
            ))}
          </div>
        )}
      <h2>Create your account</h2>
      <div className="fields">
        <span className="name-field">Username</span>
        <Input
          type="text"
          value={signUpData.userName}
          setValue={(e) => {
            setSignUpData((data) => ({ ...data, userName: e.target.value }));
          }}
          className={showResultSignUp && !signUpData.userName ? "error" : ""}
        />
        <span className="name-field">Email adress</span>
        <Input
          type="email"
          value={signUpData.email}
          setValue={(e) => {
            setSignUpData((data) => ({ ...data, email: e.target.value }));
          }}
          className={showResultSignUp && !signUpData.email ? "error" : ""}
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
          className={showResultSignUp && !signUpData.password ? "error" : ""}
        />
        <Input
          type="password"
          place="Повторите пароль"
          value={secondPassword}
          setValue={(e) => setSecondPassword(e.target.value)}
          className={showResultSignUp && !signUpData.password ? "error" : ""}
        />

        <Button
          btnText="Create Account"
          onClick={() => {
            checkValidFields();
            dispatch(createSetSignUpDataAction(signUpData));
            setShowResultSignUp(true);
          }}
        />
      </div>
      <div className="link-create">
        <span>Have account? </span>
        <Link to="/signin" className="link-to">
          Go to Sign In
        </Link>
      </div>
    </div>
  );
}
