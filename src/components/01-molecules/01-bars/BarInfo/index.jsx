import "./index.scss";

import React from "react";

const BarInfo = (props) => {
    const { items=[] } = props;

    return (
        <div className="bar-info">
            {items.map((item) => (
                <a className="bar-info__item" href={item.url}>{item.text}</a>
            ))}
        </div>
    );
};

export default BarInfo;
