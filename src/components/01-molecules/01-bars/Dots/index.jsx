import style from "./index.module.css";

import React from "react";
import Dot from "../../../00-atoms/00-buttons/Dot";

const Dots = (props) => {
    const { count, activeIndex, color, onChange } = props;

    return (
        <div className={style.dots}>
            {[...Array(count).keys()].map((item) => (
                <div className={style["dot"]} key={item} onClick = {() => {onChange(item)}}>
                    <Dot isActive={item === activeIndex} color={color}></Dot>
                </div>
            ))}
        </div>
    );
};

export default Dots;
