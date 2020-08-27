import React from "react";
import EventCategoryList from "./EventCategoryList";
import EventList from "./EventList";
import { eventContentWrapper } from "./event.module.scss";
import { useRouteMatch } from "react-router-dom";

function EventContent() {
    const match = useRouteMatch();
    console.log(match);

    return (
        <section className={eventContentWrapper}>
            <div className="container">
                <EventCategoryList />
                <EventList />
            </div>
        </section>
    );
}

export default EventContent;
