import React from "react";
import EventCategoryList from "./EventCategoryList";
import EventList from "./EventList";
import { eventContentWrapper } from "./event.module.scss";

function EventContent() {
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
