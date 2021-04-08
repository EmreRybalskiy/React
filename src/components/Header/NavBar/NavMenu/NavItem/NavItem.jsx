import React, { Component } from "react";
import "./navitem.css";
class NavItem extends Component {
    render() {
        return (
            <div className="nav-item">
                <li>{this.props.text}</li>
            </div>
        );
    }
}

export default NavItem;
