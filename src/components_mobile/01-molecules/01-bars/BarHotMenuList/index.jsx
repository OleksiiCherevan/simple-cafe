import "./index.scss";

import React from "react";
import HotMenuItem from "../../../00-atoms/03-items/HotMenuItem";

const HotMenuList = (props) => {
    const {items =[]} = props
    return (
        <div className="hot-menu-list">
            {items.map((dish) => (
                <HotMenuItem key={dish.title} {...dish}></HotMenuItem>
            ))}
        </div>
    );
};

export default HotMenuList;
