import React from "react";
import EventPanel from "./EventPanel";
import {
    eventListWrapper,
    eventLoadMore,
    eventLoadMoreWrapper,
} from "./event.module.scss";
import iconArrowDown from "../../../static/svg/icon-arrow-down.svg";

function EventList() {
    return (
        <>
            <div className={eventListWrapper}>
                <EventPanel />
                <EventPanel />
                <EventPanel />
                <EventPanel />
                <EventPanel />
            </div>
            <div className={eventLoadMoreWrapper}>
                <button type="button" className={eventLoadMore}>
                    LOAD MORE&nbsp;
                    <img
                        src={iconArrowDown}
                        alt="arrow down icon"
                        style={{ paddingLeft: "8px" }}
                    />
                </button>
            </div>
        </>
    );
}

export default EventList;
