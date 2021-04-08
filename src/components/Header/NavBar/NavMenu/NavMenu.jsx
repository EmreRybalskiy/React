import React, { Component } from "react";
import NavItem from "./NavItem/NavItem.jsx";

import "./navmenu.css";
class NavMenu extends Component {
    render() {
        return (
            <div>
                <ul className="nav-list">
                    <NavItem text="Menu" />
                    <NavItem text="Price" />
                    <NavItem text="Gallery" />
                    <NavItem text="About" />
                </ul>
            </div>
        );
    }
}

export default NavMenu;
