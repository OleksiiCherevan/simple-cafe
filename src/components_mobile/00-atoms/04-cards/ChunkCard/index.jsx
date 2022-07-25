import React from "react";
import './index.scss'

const ChunkCard = (props) => {
    const { svg, text, description } = props;

    return (
        <div className="chunk-card">
            <div className="chunk-card__svg">{svg}</div>
            <div className="chunk-card__label">{text}</div>
            <div className="chunk-card__description">{description}</div>
        </div>
    );
};

export default ChunkCard
