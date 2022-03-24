import "./index.scss";

import React from "react";
import Logo from "../../../00-atoms/10-meta/Logo";
import BarInfo from "../../../01-molecules/01-bars/BarInfo";
import BarSocial from "../../../01-molecules/01-bars/BarSocial";

const ITEMS = [
    {
        text: "Про нас",
        url: "",
    },
    {
        text: "Меню",
        url: "",
    },
    {
        text: "Доставка",
        url: "",
    },
    {
        text: "Оплата",
        url: "",
    },
    {
        text: "Франшиза",
        url: "",
    },
    {
        text: "Вакансії",
        url: "",
    },
];
const Footer = () => {
    return (
        <div className="footer">
            <Logo></Logo>
            <BarInfo items={ITEMS}></BarInfo>
            <div className="footer__spliter"></div>
            <BarSocial></BarSocial>
        </div>
    );
};

export default Footer;
