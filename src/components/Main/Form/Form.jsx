import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignIn from "./SignIn/SignIn.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import "./form.css";

class Form extends Component {
    render() {
        return (
            <div className="form">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Form;
