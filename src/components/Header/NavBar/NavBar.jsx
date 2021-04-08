import React, { Component } from "react";
import NavMenu from "./NavMenu/NavMenu.jsx";
import NavSearch from "./NavSearch/NavSearch.jsx";

import './navbar.css'

class NavBar extends Component {
    render() {
        return (
            <div className="nav">
                <NavMenu />
                <NavSearch />
            </div>
        );
    }
}

export default NavBar;
