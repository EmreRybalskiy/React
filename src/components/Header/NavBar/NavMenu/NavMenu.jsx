import React from "react";
import { NavItem } from "./NavItem/NavItem.jsx";

import "./navmenu.css";
export function NavMenu() {
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
