import React, { Component } from "react";
import NavBar from "../Header/NavBar/NavBar.jsx";
import "./header.css";
class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavBar />
            </div>
        );
    }
}

export default Header;
