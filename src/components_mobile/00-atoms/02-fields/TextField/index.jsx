import "./index.scss";

import React from "react";

const TextField = (props) => {
    const { prompt, text, onChange } = props;

    return (
        <div className="text-field">
            <input
                className="text-field__text"
                type="text"
                placeholder={text}
                defaultValue=''
                prompt={prompt}
                onChange={(e) => onChange(e)}
            ></input>
        </div>
    );
};

export default TextField;
