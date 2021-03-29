import React, { Component } from "react";
import "./Circle.css";
import MyCircle from "./MyCircle/MyCircle.jsx";
class Circle extends Component {
    render() {
        return (
            <div className="circle-block">
                <MyCircle />
            </div>
        );
    }
}

export default Circle;
