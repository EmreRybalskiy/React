import React, { Component } from "react";

import InputRange from "../Inputs/InputRange/InputRange.jsx";
import InputText from "../Inputs/InputText/InputText.jsx";
import Test from "../Test/Test.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: "",
            val2: 1,
        };
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    onChange(event) {
        this.setState({
            val: event.target.value,
        });
    }
    handleClick() {
        this.setState({
            val2: this.state.val2 + 1,
        });
    }
    render() {
        return (
            <div>
                <InputRange onChange={this.onChange} />
                <InputText value={this.state.val} />
                <Test
                    trigger={15}
                    value2={this.state.val2}
                    handleClick={this.handleClick}
                />
            </div>
        );
    }
}

export default App;
