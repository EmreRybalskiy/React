import "./App.css";
import React, { Component } from "react";
import Form from "../Form/Form.jsx";
import Circle from "../Circle/Circle.jsx";
class App extends Component {
    render() {
        return (
            <div>
                <Form />
                <Circle />
            </div>
        );
    }
}

export default App;
