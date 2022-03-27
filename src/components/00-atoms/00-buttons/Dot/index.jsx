import styles from "./index.module.css";

import React from "react";

const Dot = (props) => {
    const { color = "black", isActive } = props;

    const isActiveStyle = {
        backgroundColor: color,
    };

    return (
        <div
            className={styles.dot}
            style={{
                ...(isActive ? isActiveStyle : null),
                border: `solid ${color} 1px`,
            }}
        ></div>
    );
};

export default Dot;
