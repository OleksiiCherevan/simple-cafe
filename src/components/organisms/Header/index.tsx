import React from "react";
import "./index.scss";

import { HeaderLogo } from "../../atoms/HeaderLogo";
import { Navigation } from "../../molucules/Navigation";

export const Header = () => {
    return (
        <div className="header">
                <HeaderLogo></HeaderLogo>
                <Navigation></Navigation>
        </div>
    );
};
