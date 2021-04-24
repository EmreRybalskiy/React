import React from "react";
import { Route, Link, Switch, useLocation } from "react-router-dom";

import { SignIn } from "./SignIn/SignIn.jsx";
import { SignUp } from "./SignUp/SignUp.jsx";

import "./form.css";

export function Form({ setIsAuthenticated, isAuthenticated }) {
  const location = useLocation();
  return (
    <div className="form">
      {location.pathname === "/" && <Link to="/signin">Авторизоваться</Link>}
      <Switch>
        <Route
          path="/signin"
          render={(renderprops) => (
            <SignIn
              {...renderprops}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            />
          )}
        />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}
