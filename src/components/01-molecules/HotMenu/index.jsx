import React from "react";

import "./index.scss";

import hotMenuImg from "./../../../assets/img/hotMenu.jpg";
import Header2 from "../../00-atoms/01-headers/Header2";
import HotMenuList from "../01-bars/BarHotMenuList";
import Button from "../../00-atoms/00-buttons/Button";



const HotMenu = (props) => {
    const { text, orderBy, list=[] } = props;
    return (
        <div className="hot-menu">
            <div className="hot-menu-header">
                <Header2 text={text}></Header2>
            </div>
            <div className="hot-menu__sub-label">{orderBy}</div>
            <div className="hot-menu-body">
                <div className="hot-menu-list">
                    <HotMenuList items={list}></HotMenuList>
                </div>
                <img
                    className="hot-menu-image"
                    src={hotMenuImg}
                    alt="All dishes"
                />
            </div>
            <div className="hot-menu-button">
                <Button></Button>
            </div>
        </div>
    );
};

export default HotMenu;
