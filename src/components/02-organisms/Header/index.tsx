import React from "react";
import "./index.scss";

import Logo from "../../00-atoms/10-meta/Logo";
import BarNavigation from "../../01-molecules/01-bars/BarNavigation";

const ITEMS = ["Пицца", "Роллы", "Бизнес-ланчи", "Закуски", "Десерти", "Напитки"];

const Header = () => {
    return (
        <div className="header">
            <Logo></Logo>
            <BarNavigation items={ITEMS}></BarNavigation>
        </div>
    );
};

export default Header;
