import "./index.scss";

import React from "react";
import BarCardDishes from "../../../01-molecules/01-bars/BarCardDishes";

const PopularDishes = () => {
    return (
        <div className="popular-dishes">
            <BarCardDishes></BarCardDishes>
        </div>
    );
};

export default PopularDishes;
