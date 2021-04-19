import React from "react";

import { Main } from "../Main/Main.jsx";
import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";

import "./App.css";

export function App() {
    return (
        <div className="app">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
