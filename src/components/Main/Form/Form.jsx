import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { SignIn } from "./SignIn/SignIn.jsx";
import { SignUp } from "./SignUp/SignUp.jsx";
import { Profile } from "../Profile/Profile.jsx";
import { PrivateRoute } from "../../PrivateRoute/PrivateRoute.jsx";

import "./form.css";

export function Form() {
    const [isAuthenticated, setisAuthenticated] = useState(false)

    return (
        <div className="form">
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <SignIn {...props} setisAuthenticated = {setisAuthenticated}/>}
                    />
                    <Route exact path="/signup" component={SignUp} />
                    <PrivateRoute
                        exact
                        path="/profile"
                        component={Profile}
                        isAuthenticated={isAuthenticated}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
