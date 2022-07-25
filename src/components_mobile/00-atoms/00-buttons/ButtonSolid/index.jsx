import React from "react";
import "./index.scss";

const ButtonSolid = (props) => {
    const {text = ''} = props
    return <div className="button-solid">{text}</div>;
};

export default ButtonSolid;
