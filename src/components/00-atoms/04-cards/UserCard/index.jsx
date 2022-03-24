import "./index.scss";

import React from "react";

const UserCard = (props) => {
    const {
        image,
        user = "John Doe",
        position = "Front-end developer",
    } = props;

    return (
        <div className="user-card">
            <img className="user-card__image" src={image}></img>
            <div className="user-card__body">
                <div className="user-card__user">{user}</div>
                <div className="user-card__position">{position}</div>
            </div>
        </div>
    );
};

export default UserCard;
