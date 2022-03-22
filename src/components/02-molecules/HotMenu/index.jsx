import React from "react";
import HotMenuItem from "../../01-atoms/HotMenuItem";
import Button from "../../01-atoms/Button";
// import { CardLabel } from "../../atoms/CardLabelLightGray";
// import { HotMenuItem } from "../../atoms/HotMenuItem";
// import { PageLabel } from "../../atoms/PageLabel";

import "./index.scss";

import hotMenuImg from "./../../../assets/img/hotMenu.jpg";


const HOT_MENU = {
    text: "БІЗНЕС-ЛАНЧ",
    orderBy: "замовлення до 15:00",
    list: [
        {
            title: "Перша страва:",
            description: "Cуп-лапша, борщ, солянка, сирний крем-суп з грибами",
        },
        {
            title: "Друга страва:",
            description:
                "Свинина  відбивна, паста з баклажанами,  стейк з мраморної телятини, куриця по-тайски, запечений картофель, ризотто",
        },
        {
            title: "Салати:",
            description: "Фунцоза, цезарь, весняний, ананасовий",
        },
        {
            title: "Напої:",
            description: "Кофе, чай фруктовий, морс, компот яблучно-вишньовий",
        },
    ],
};

const HotMenu = () => {
    const { text, orderBy, list } = HOT_MENU;
    return (
        <div className="hot-menu">
            <div className="hot-menu-header">
                {text}
            </div>
            <div className="hot-menu-label">{orderBy}</div>
            <div className="hot-menu-dishes">
                <div className="hot-menu-list">
                    {list.map((dish) => (
                        <HotMenuItem key={dish.title} {...dish}></HotMenuItem>
                    ))}
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
