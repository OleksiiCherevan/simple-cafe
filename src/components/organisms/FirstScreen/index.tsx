import React from "react";
import { MainHeader } from "../../atoms/MainHeader";
import { Chunks } from "../Chunks";

import "./index.scss";

export const FirstScreen = () => {
    return (
        <div className="first-screen">
            <div className="first-screen-header">
                <MainHeader></MainHeader>
            </div>
            <div className="first-screen-chunks">
                <Chunks></Chunks>
            </div>
            <div className="first-screen-lunch">

            </div>
        </div>
    );
};
