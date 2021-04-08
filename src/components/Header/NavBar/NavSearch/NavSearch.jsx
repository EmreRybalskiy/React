import React, { Component } from "react";
import './navsearch.css'
class NavSearch extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Поиск..." className="nav-search"/>
            </div>
        );
    }
}

export default NavSearch;
