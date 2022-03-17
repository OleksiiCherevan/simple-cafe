import React from "react";
import "./scss/styles.scss";
import "./index.css";
import ReactDOM from "react-dom";
import Home from "./components/pages/Home";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <div className="app">
            <div className="app-background"></div>
            <Home />
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
