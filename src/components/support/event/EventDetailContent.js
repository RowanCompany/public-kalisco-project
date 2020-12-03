import React, { useEffect, useState } from "react";
import styles from "./event.module.scss";
import { useParams } from "react-router-dom";
import { url } from "../../../utils/server";
import axios from "axios";
import { format } from "date-fns";
import _ from "lodash";

function EventDetailContent() {
  const [event, setEvent] = useState({});
  const eventId = useParams().event;
  useEffect(() => {
    axios
      .get(`${url}/events/${eventId}`)
      .then((res) => {
        setEvent(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  }, [eventId]);

  return (
    !_.isEmpty(event) && (
      <div className={styles.eventDetailWrapper}>
        <div className={styles.eventDetailTitle}>{event.title}</div>
        <div className={styles.eventDetailDate}>
          {format(new Date(event["created_at"]), "yyyy-MM-dd")}
        </div>
        <div className={styles.eventDetailNavigatorWrapper}>
          {/*<div
          className={`${styles.eventDetailNavigator} ${styles.disabled}`}
          style={{ paddingRight: "15px" }}
        >
          <div>
            <LeftArrow />
          </div>
          <div style={{ paddingLeft: "8px" }}>이전글</div>
        </div>
        <div
          className={styles.eventDetailNavigator}
          style={{ paddingLeft: "15px" }}
        >
          <div style={{ paddingRight: "8px" }}>다음글</div>
          <div>
            <RightArrow />
          </div>
        </div>*/}
        </div>
        <div className={styles.eventDetailContentWrapper}>
          {event.image && (
            <div>
              <img src={event.image} alt={event.title} />
            </div>
          )}
          <div style={{ paddingTop: "50px" }}>
            {event.description &&
              event.description.split("<br />").map((d, i) => (
                <React.Fragment key={i}>
                  {d}
                  <br />
                </React.Fragment>
              ))}
          </div>
        </div>
        <div className={styles.eventDetailPostNavigatorWrapper}>
          {/*<div className={styles.eventDetailPostNavigator}>
          <div>
            <img src={upArrow} alt="Up Arrow" />
          </div>
          <div className={styles.eventDetailPostNavigatorText}>이전글</div>
          <div className={styles.eventDetailPostNavigatorTitle}>
            사보텐 벤또 출시!
          </div>
        </div>
        <div className={styles.eventDetailPostNavigator}>
          <div>
            <img src={downArrow} alt="Down Arrow" />
          </div>
          <div className={styles.eventDetailPostNavigatorText}>다음글</div>
          <div className={styles.eventDetailPostNavigatorTitle}>
            사보텐 벤또 출시!
          </div>
        </div>*/}
        </div>
      </div>
    )
  );
}

export default EventDetailContent;
