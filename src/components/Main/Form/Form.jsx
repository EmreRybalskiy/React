import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { SignIn } from "./SignIn/SignIn.jsx";
import { SignUp } from "./SignUp/SignUp.jsx";
import { Profile } from "../Profile/Profile.jsx";
import { PrivateRoute } from "../../PrivateRoute/PrivateRoute.jsx";

import "./form.css";

export function Form() {
    const checkAuthentificate = () => {
        if (localStorage.getItem("user") !== null) {
            const user = JSON.parse(
                localStorage.getItem(localStorage.key("user"))
            );
             if (user.isAuthenticated === 'true') {
                 return true; 
             } else {
                 return false;
             }
        }
    }
    return (
        <div className="form">
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <SignIn {...props} />}
                    />
                    <Route exact path="/signup" component={SignUp} />
                    <PrivateRoute
                        exact
                        path="/profile"
                        component={Profile}
                        isAuthenticated={checkAuthentificate()}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
