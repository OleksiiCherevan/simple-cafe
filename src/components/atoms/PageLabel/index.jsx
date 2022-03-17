import React from "react";
import "./index.scss";
export const PageLabel = (props) => {
    const { children } = props;

    return <div className="page-label">{children}</div>;
};
