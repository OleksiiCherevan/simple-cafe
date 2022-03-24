import React from "react";
import Logo from "../../../00-atoms/10-meta/Logo";
import BarNavigation from "../../../01-molecules/01-bars/BarNavigation";
import "./index.scss";



const ITEMS = ["Піцца", "Роли", "Бізнес-ланчі", "Закуски", "Десерти", "Напої"];

const Header = () => {
    return (
        <div className="header">
            <Logo></Logo>
            <BarNavigation items={ITEMS}></BarNavigation>
        </div>
    );
};

export default Header;
