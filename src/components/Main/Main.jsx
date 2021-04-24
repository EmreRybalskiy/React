import React, { useState } from "react";
import { Route, Switch, Link, useLocation } from "react-router-dom";

import { Form } from "./Form/Form.jsx";
import { Films } from "../Main/Films/Films.jsx";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute.jsx";

import "./main.css";

export function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  return (
    <div className="main">
      {location.pathname === "/" && (
        <Link to="/form/signin">Авторизоваться</Link>
      )}
      <Switch>
        <Route path="/form">
          <Form
            setIsAuthenticated={setIsAuthenticated}
            isAuthenticated={isAuthenticated}
          />
        </Route>
        <PrivateRoute
          exact
          path="/films"
          component={Films}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </div>
  );
}
