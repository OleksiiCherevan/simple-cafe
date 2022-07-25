import React from "react";
import "./index.scss";

const CategoryItem = (props) => {
    const { image, label } = props;

    return (
        <div className="category-item">
            <div className="category-item__image">{image}</div>
            <div className="category-item__label">{label}</div>
        </div>
    );
};

export default CategoryItem
