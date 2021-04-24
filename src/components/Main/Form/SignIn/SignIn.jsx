import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../../Input/Input.jsx";
import { Button } from "../../../Button/Button.jsx";

import "./signin.css";

export function SignIn(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signin">
      {props.isAuthenticated && (
        <Link to="/films" className="link-to films">
          Go to Films
        </Link>
      )}
      <h2>Sign in to Us!</h2>
      <div className="fields">
        <span className="name-field">Username</span>
        <Input
          type="text"
          value={name}
          setValue={(e) => setName(e.target.value)}
        />
        <div className="name-field">
          <span>Password</span>
        </div>
        <Input
          type="password"
          value={password}
          setValue={(e) => setPassword(e.target.value)}
        />
        <Button btnText="Sign In" />
      </div>
      <div className="link-create">
        <span>New with us? </span>
        <Link to="/form/signup" className="link-to">
          Go to Sign Up
        </Link>
      </div>
    </div>
  );
}
