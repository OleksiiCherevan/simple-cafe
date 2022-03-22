import React from "react";
import "./index.scss";
export const CardLabel = (props) => {
    const { children } = props;

    return <div className="card-label">{children}</div>;
};
