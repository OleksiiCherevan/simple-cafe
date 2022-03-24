import React from "react";
import "./index.scss";

const PROPS = {
    title: "First",
    description: "Description",
};

const HotMenuItem = (props = PROPS) => {
    const { title, description } = props;

    return (
        <div className="hot-menu-item">
            <div className="hot-menu-item__title">{title}</div>
            <div className="hot-menu-item__description">{description}</div>
        </div>
    );
};

export default HotMenuItem
