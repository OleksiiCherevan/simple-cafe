import style from "./index.module.css";

import React, { useEffect, useState } from "react";


import Dots from "../../01-bars/Dots";
import ButtonRound from "../../../00-atoms/00-buttons/ButtonRound";

const Carousel = (props) => {
    const {
        height = "554",
        color = "#34C759",
        images = [],
        children
    } = props;

    const [imageIndex, setImageIndex] = useState(
        // images.length > 1 ? images.length / 2 : 0
        0
    );

    const [image, setImage] = useState(null);

    useEffect(() => {
        setImage(images[imageIndex]);
    }, [imageIndex]);

    const IncreaseIndex = () => {
        setImageIndex(imageIndex < images.length - 1 ? imageIndex + 1 : 0);
    };

    const DecreaseIndex = () => {
        setImageIndex(imageIndex > 0 ? imageIndex - 1 : images.length - 1);
    };

    return (
        <>
            <div
                className={style["background"]}
                style={{
                    backgroundImage: `url(${image})`,
                    height: `${height}px`,
                }}
            ></div>

            <div
                className={style["carousel"]}
                style={{ height: `${height}px`, marginTop: `-${height}px` }}
            >
                <div
                    className={style["arrow-left"]}
                    onClick={() => DecreaseIndex()}
                >
                    <ButtonRound
                        color={color}
                        onClick={() => {
                            DecreaseIndex();
                        }}
                    >
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
                                    fill={color}
                                />
                            </g>
                        </svg>
                    </ButtonRound>
                </div>

                <div className={style["body"]}>
                    <div
                        className={style["top"]}
                        onClick={() => IncreaseIndex()}
                    >
                        {children}
                    </div>

                    <div className={style["dots"]}>
                        <Dots
                            onChange={setImageIndex}
                            count={images.length}
                            color={color}
                            activeIndex={imageIndex}
                        ></Dots>
                    </div>
                </div>

                <div
                    className={style["arrow-right"]}
                    onClick={() => IncreaseIndex()}
                >
                    <ButtonRound
                        color={color}
                        onClick={() => {
                            IncreaseIndex();
                        }}
                    >
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
                                    fill={color}
                                />
                            </g>
                        </svg>
                    </ButtonRound>
                </div>
            </div>
        </>
    );
};

export default Carousel;
