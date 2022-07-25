import "./index.scss";

import React from "react";
import CalendarEvent from "../../../00-atoms/04-cards/CardCalendarEvent";

const CalendarEvents = (props) => {
    const {items} = props 

    return (
        <div className="calendar-events">
            {items.map((event) => (
                <CalendarEvent key={event.header} {...event}></CalendarEvent>
            ))}
        </div>
    );
};

export default CalendarEvents;
