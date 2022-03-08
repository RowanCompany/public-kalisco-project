import React, { useEffect, useState } from "react";
import EventPanel from "./EventPanel";
import styles from "./event.module.scss";
//import iconArrowDown from "../../../static/svg/icon-arrow-down.svg";
import axios from "axios";
import { url } from "../../../utils/server";

function EventList({ type }) {
  return (
    <>
      <div className={styles.eventListWrapper}>
        {/* {EventPanelData &&
          EventPanelData.map((d, i) => <RecipePanel key={i} {...d} />)} */}
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
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get(`${url}/events`).then((res) => {
      setEvents(res.data.data[0]);
    });
  }, []);

  switch (type) {
    case "all":
      return events.map((d, i) => <EventPanel key={i} {...d} />).reverse();
    default:
      return events
        .filter((d) => d.type === type)
        .map((d, i) => <EventPanel key={i} {...d} />)
        .reverse();
  }
}

export default EventList;
