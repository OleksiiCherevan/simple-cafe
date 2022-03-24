import React from "react";
import "./scss/styles.scss";
import "./index.css";

import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import Home from "./components/04-pages/Home";

ReactDOM.render(
    <React.StrictMode>
        <div className="app">
            <Home />
        </div>
        <div className="app-background"></div>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
