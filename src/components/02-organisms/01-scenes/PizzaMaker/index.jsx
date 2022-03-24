import "./index.scss";

import React from "react";


import PIZZA from "./../../../../assets/img/pizza.png";
import ButtonRound from "../../../00-atoms/00-buttons/ButtonRound";
import Header2 from "../../../00-atoms/01-headers/Header2";
import Button from "../../../00-atoms/00-buttons/Button";

const Maker = () => {
    return (
        <div className="maker" style={{ backgroundImage: `url(${PIZZA})` }}>
        {/* <div className="maker"> */}
            {/* <div className="maker__image-container">
                <img className="maker__image" src={PIZZA}></img>
            </div> */}
            <div className="maker__left-arrow">
                <ButtonRound
                    image={
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask
                                id="mask0_132_17"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="16"
                                height="16"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                                    fill="white"
                                />
                            </mask>
                            <g mask="url(#mask0_132_17)">
                                <rect
                                    x="-5"
                                    y="-5"
                                    width="26"
                                    height="26"
                                    fill="#34C759"
                                />
                            </g>
                        </svg>
                    }
                ></ButtonRound>
            </div>
            <div className="maker-body">
                <div className="maker__left-side"></div>
                <div className="maker__right-side">
                    <div className="maker__header">
                        <Header2 text={"СТВОРІТЬ СВОЮ ПІЦУ"}></Header2>
                    </div>
                    <div className="maker__description">
                        Ми приготуємо для вас піцу з вашими улюбленими інгрідієнтами
                    </div>
                    <Button text="Замовити"></Button>
                </div>
            </div>
            <div className="maker__right-arrow">
                <ButtonRound
                    image={
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask
                                id="mask0_132_23"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="16"
                                height="16"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 9L12.17 9L6.58 14.59L8 16L16 8L8 0L6.59 1.41L12.17 7L0 7L0 9Z"
                                    fill="white"
                                />
                            </mask>
                            <g mask="url(#mask0_132_23)">
                                <rect
                                    x="21"
                                    y="21"
                                    width="26"
                                    height="26"
                                    transform="rotate(-180 21 21)"
                                    fill="#34C759"
                                />
                            </g>
                        </svg>
                    }
                ></ButtonRound>
            </div>
        </div>
    );
};

export default Maker;
