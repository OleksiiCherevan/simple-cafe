import "./index.scss";

import React from "react";

const TextArea = (props) => {
    const { text = "", prompt, onChange } = props;

    return (
        <div className="text-area">
            <textarea
                className="text-area__text"
                type="text"
                prompt={prompt}
                placeholder={text}
                onChange={(e) => onChange(e)}
            ></textarea>
         </div>
    );
};

export default TextArea;
