import React from "react";
import { NavMenu } from "./NavMenu/NavMenu.jsx";
import { NavSearch } from "./NavSearch/NavSearch.jsx";

import "./navbar.css";

export function NavBar() {
    return (
        <div className="nav">
            <NavMenu />
            <NavSearch />
        </div>
    );
}
