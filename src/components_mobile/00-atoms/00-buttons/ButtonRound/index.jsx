import React from "react";
import style from "./index.module.css";

const ButtonRound = (props) => {
    const { children = "o", color, url, onClick } = props;

    return (
        <a
            className={style["button"]}
            href={url}
            onClick={(event) => {
                onClick(event);
            }}
            style={{ borderColor: color }}
        >
            <div className={style["image"]}>{children}</div>
        </a>
    );
};

export default ButtonRound;
