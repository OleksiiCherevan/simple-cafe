import "./index.scss";

import React from "react";
import Header2Underline from "../../00-atoms/01-headers/Header2Underline";
import BarCardDishes from "../../01-molecules/01-bars/BarCardDishes";

const PopularDishes = () => {
    return (
        <div className="popular-dishes">
            <BarCardDishes></BarCardDishes>
        </div>
    );
};

export default PopularDishes;
