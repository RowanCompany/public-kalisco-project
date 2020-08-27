import React from "react";
import EventCategoryList from "./EventCategoryList";
import { eventContentWrapper } from "./event.module.scss";

function EventContent() {
    return (
        <section className={eventContentWrapper}>
            <div className="container">
                <EventCategoryList />
            </div>
        </section>
    );
}

export default EventContent;
