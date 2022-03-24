import "./index.scss";

import React from "react";
import ImageText from "../../05-labels/LabelImage";

const CalendarEvent = (props) => {
    const {
        time = "",
        header = "",
        description = "",
        views = "",
        comments = "",
        image = "",
    } = props;

    return (
        <div
            className="calendar-event"
            style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center',  }}
        >
            <div className="calendar-background">
                <div className="calendar-event__info">
                    <div className="calendar-event__time">{time}</div>
                    <div className="calendar-event__label">{header}</div>
                    <div className="calendar-event__description">
                        {description}
                    </div>
                </div>
                <div className="calendar-event__discuss">
                    <div className="calendar-event__views">
                        <ImageText
                            image={
                                <svg
                                    width="19"
                                    height="13"
                                    viewBox="0 0 19 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.01639 0C4.91803 0 1.41803 2.59167 0 6.25C1.41803 9.90833 4.91803 12.5 9.01639 12.5C13.1148 12.5 16.6148 9.90833 18.0328 6.25C16.6148 2.59167 13.1148 0 9.01639 0ZM9.01639 10.4167C6.7541 10.4167 4.91803 8.55 4.91803 6.25C4.91803 3.95 6.7541 2.08333 9.01639 2.08333C11.2787 2.08333 13.1148 3.95 13.1148 6.25C13.1148 8.55 11.2787 10.4167 9.01639 10.4167ZM9.01639 3.75C7.65574 3.75 6.55738 4.86667 6.55738 6.25C6.55738 7.63333 7.65574 8.75 9.01639 8.75C10.377 8.75 11.4754 7.63333 11.4754 6.25C11.4754 4.86667 10.377 3.75 9.01639 3.75Z"
                                        fill="white"
                                    />
                                </svg>
                            }
                            text={views}
                        ></ImageText>
                    </div>
                    <div className="calendar-event__comments">
                        <ImageText
                            image={
                                <svg
                                    width="16"
                                    height="15"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M14.7953 2.93333H13.3138V9.53333H3.68415V11C3.68415 11.4033 4.01749 11.7333 4.4249 11.7333H12.573L15.536 14.6667V3.66667C15.536 3.26333 15.2027 2.93333 14.7953 2.93333V2.93333ZM11.8323 7.33333V0.733333C11.8323 0.33 11.499 0 11.0916 0H1.46193C1.05452 0 0.721191 0.33 0.721191 0.733333V11L3.68415 8.06667H11.0916C11.499 8.06667 11.8323 7.73667 11.8323 7.33333V7.33333Z"
                                        fill="white"
                                    />
                                </svg>
                            }
                            text={comments}
                        ></ImageText>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarEvent;
