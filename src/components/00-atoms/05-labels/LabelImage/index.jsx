import "./index.scss";

import React from "react";

const ImageText = (props) => {
    const { image, text } = props;

    return (
    <div className="image-text">
            <div className="image-count__image">{image}</div>
            <div className="image-count__text">{text}</div>
        </div>
    );
};

export default ImageText;
