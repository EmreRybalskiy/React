import React, { Component } from "react";
import InputTestButton from "./InputTestButton.jsx";
import InputTestText from "./InputTestText.jsx";
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: "",
        };
    }
    static getDerivedStateFromProps(props) {
        if (props.value2 <= props.trigger) {
            return {
                currentValue: props.value2,
            };
        }
        return null;
    }
    render() {
        return (
            <div>
                <InputTestText value2={this.state.currentValue} />
                <InputTestButton handleClick={this.props.handleClick} />
            </div>
        );
    }
}

export default Test;
