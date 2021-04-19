import React from "react";
import { Route } from "react-router-dom";

import { SignIn } from "./SignIn/SignIn.jsx";
import { SignUp } from "./SignUp/SignUp.jsx";

import "./form.css";

export function Form({ setIsAuthenticated, isAuthenticated }) {
  return (
    <div className="form">
      <Route
        path="/form/signin"
        render={(renderprops) => (
          <SignIn
            {...renderprops}
            setIsAuthenticated={setIsAuthenticated}
            isAuthenticated={isAuthenticated}
          />
        )}
      />
      <Route path="/form/signup" component={SignUp} />
    </div>
  );
}
