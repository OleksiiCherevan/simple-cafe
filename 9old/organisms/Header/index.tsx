import React from "react";
import "./index.scss";

import { HeaderLogo } from "../../atoms/HeaderLogo";

export const Header = () => {
    return (
        <div className="header">
                <HeaderLogo></HeaderLogo>
        </div>
    );
};
