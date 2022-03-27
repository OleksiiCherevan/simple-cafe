import "./index.scss";

import React from "react";

import PIZZA from "./../../../../assets/img/pizza.png";
import PORRIDGE from "./../../../../assets/img/porridgeWithChocolate.png";
import SALAD from "./../../../../assets/img/hotMenu.jpg";

import Carousel from './../../../01-molecules/02-elements/Carousel'
import Header2 from "../../../00-atoms/01-headers/Header2";
import Button from "../../../00-atoms/00-buttons/Button";

const Maker = () => {
    const HEIGTH = '564px'

    return (
        <div className="maker-container">
            <Carousel heigth ={HEIGTH} images={[PIZZA, PORRIDGE, SALAD]} color="#34C759" >

                 <div className="maker"
                //   style={{height: HEIGTH, marginTop: `-${HEIGTH}`}}
                  >
                <div className="maker-body">
                    <div className="maker__left-side"></div>
                    <div className="maker__right-side">
                        <div className="maker__header">
                            <Header2 text={"СТВОРІТЬ СВОЮ ПІЦУ"}></Header2>
                        </div>
                        <div className="maker__description">
                            Ми приготуємо для вас піцу з вашими улюбленими
                            інгрідієнтами
                        </div>
                        <Button text="Замовити"></Button>
                    </div>
                </div>
            </div>
            </Carousel>
            
        </div>
    );
};

export default Maker;
