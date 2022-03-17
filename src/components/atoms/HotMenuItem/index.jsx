import React from "react";
import "./index.scss";

const PROPS = {
    title: "First",
    description: "Description",
};

export const HotMenuItem = (props = PROPS) => {
    const { title, description } = props;

    return (
        <div className="hot-menu-item">
            <div className="hot-menu-title">{title}</div>
            <div className="hot-menu-description">{description}</div>
        </div>
    );
};
