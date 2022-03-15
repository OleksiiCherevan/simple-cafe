import React from "react";
import { Description } from "../../atoms/Description";
import { Label } from "../../atoms/Label";
import './index.scss'

export const ChunkCard = (props) => {
    const { svg, text, description } = props;

    return (
        <div className="chunk-card">
            <div className="chunk-card-svg">{svg}</div>
            <div className="chunk-card-label"><Label>{text}</Label></div>
            <div className="chunk-card-description"><Description>{description}</Description></div>
        </div>
    );
};
