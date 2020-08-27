import React from "react";
import EventPanel from "./EventPanel";
import { eventListWrapper } from "./event.module.scss";

function EventList() {
    return (
        <div className={eventListWrapper}>
            <EventPanel />
            <EventPanel />
            <EventPanel />
            <EventPanel />
            <EventPanel />
        </div>
    );
}

export default EventList;
