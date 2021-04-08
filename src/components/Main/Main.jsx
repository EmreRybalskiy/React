import React, { Component } from "react";
import Form from "./Form/Form.jsx";
import Table from "../Table/Table.jsx";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Form />
                <Table />
            </div>
        );
    }
}

export default Main;
