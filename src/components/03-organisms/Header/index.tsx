import React from "react";
import "./index.scss";

import Logo from "../../01-atoms/Logo";
import NavBar from "../../02-molecules/NavBar";

const Header = () => {
    return (
        <div className="header">
                <Logo></Logo>
                <NavBar></NavBar>
        </div>
    );
};

export default Header