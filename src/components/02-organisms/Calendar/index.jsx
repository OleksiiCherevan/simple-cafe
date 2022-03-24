import "./index.scss";

import React from "react";

import SALAD from "./../../../assets/img/salad.png";
import CALENDAR from './../../../assets/img/calendar.png'
import Header2Underline from "../../00-atoms/01-headers/Header2Underline";
import CalendarEvent from "../../00-atoms/04-cards/CardCalendarEvent";
import CalendarEvents from "../../01-molecules/01-bars/BarCalendarEvents";

const EVENTS = [
    {
        time: "10:00",
        header: "Детский мастер-класс",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        views: "275",
        comments: "12",
        image: SALAD,
    },
    {
        time: "19:00",
        header: "Джазовый концерт",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        views: "5",
        comments: "1",
    },
];

const Calendar = () => {
    return (
        <div className="calendar">
            <div className="calendar-body">
                <div className="calendar-calendar">
                    <img src={CALENDAR}></img>

                </div>
                <div className="calendar-events">
                    <CalendarEvents items={EVENTS}></CalendarEvents>
                    <a className="calendar__all-events" href="">
                        {"Все ближайшие события"}
                        <svg
                            width="15"
                            height="12"
                            viewBox="0 0 15 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 1.29977V0.122124C0 0.0200516 0.120313 -0.0363169 0.201562 0.0261454L7.24529 5.39028C7.30514 5.43566 7.35356 5.49377 7.38687 5.56017C7.42018 5.62657 7.4375 5.69952 7.4375 5.77344C7.4375 5.84736 7.42018 5.9203 7.38687 5.9867C7.35356 6.05311 7.30514 6.11121 7.24529 6.15659L0.201562 11.5207C0.11875 11.5832 0 11.5268 0 11.4248V10.2471C0 10.1725 0.0359373 10.1009 0.0953121 10.0552L5.7203 5.7742L0.0953121 1.49172C0.0359373 1.44602 0 1.37442 0 1.29977Z"
                                fill="#34C759"
                            />
                            <path
                                d="M7 1.29977V0.122124C7 0.0200516 7.12031 -0.0363169 7.20156 0.0261454L14.2453 5.39028C14.3051 5.43566 14.3536 5.49377 14.3869 5.56017C14.4202 5.62657 14.4375 5.69952 14.4375 5.77344C14.4375 5.84736 14.4202 5.9203 14.3869 5.9867C14.3536 6.0531 14.3051 6.11121 14.2453 6.15659L7.20156 11.5207C7.11875 11.5832 7 11.5268 7 11.4248V10.2471C7 10.1725 7.03594 10.1009 7.09531 10.0552L12.7203 5.7742L7.09531 1.49172C7.03594 1.44602 7 1.37442 7 1.29977Z"
                                fill="#34C759"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
