import "./index.scss";

import React from "react";

const Header2Underline = (props) => {
    const { text } = props;
    return (
        <div className="header2-underline">
            <div className="header2-underline__text">{text}</div>
            <div className="header2-underline__underline"></div>
        </div>
    );
};

export default Header2Underline;
