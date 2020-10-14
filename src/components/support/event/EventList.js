import React from "react";
import EventPanel from "./EventPanel";
import { eventListWrapper } from "./event.module.scss";
//import iconArrowDown from "../../../static/svg/icon-arrow-down.svg";
import EventPanelData from "./EventPanelNewData";

function EventList({ type }) {
  return (
    <>
      <div className={eventListWrapper}>
        {/* {EventPanelData &&
          EventPanelData.map((d, i) => <EventPanel key={i} {...d} />)} */}
        <ConditionalEventRenderer type={type} />
      </div>
      {/* <div className={eventLoadMoreWrapper}>
                <button type="button" className={eventLoadMore}>
                    LOAD MORE&nbsp;
                    <img
                        src={iconArrowDown}
                        alt="arrow down icon"
                        style={{ paddingLeft: "8px" }}
                    />
                </button>
            </div> */}
    </>
  );
}

function ConditionalEventRenderer({ type }) {
  switch (type) {
    case "all":
      return EventPanelData.map((d, i) => <EventPanel key={i} {...d} />);
    default:
      return EventPanelData.filter((d) => d.type === type).map((d, i) => (
        <EventPanel key={i} {...d} />
      ));
      break;
  }
}

export default EventList;
