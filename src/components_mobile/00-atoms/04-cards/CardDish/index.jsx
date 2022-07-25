import "./index.scss";

import React from "react";


import DISH from "./../../../../assets/img/porridgeWithChocolate.png";
import ButtonSolid from "../../00-buttons/ButtonSolid";
import PriceLabel from "../../05-labels/LabelPrice";

const CardDish = (props) => {
    const {
        img = DISH,
        header = "Шоколадний десерт з овсянкою",
        description = "Дуже смачний десерт для хлопця або дівчини. Десерт має небагато калорій та дуже корисний для здоров'я ",
        price = "165",
    } = props;
    return (
        <div className="card-dish">
            <img className="card-dish__image" src={img} alt="" />
            <div className="card-dish-body">
                <div className="card-dish__label">{header}</div>
                <div className="card-dish__description">{description}</div>
                <div className="card-dish-buy">
                    <PriceLabel text={price}></PriceLabel>
                    <ButtonSolid text="Додати в корзину"></ButtonSolid>
                </div>
            </div>
        </div>
    );
};

export default CardDish;
