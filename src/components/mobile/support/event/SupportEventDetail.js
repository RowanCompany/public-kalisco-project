import React, { useEffect, useState } from "react";
import styles from "../mobile_support.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../../../../utils/server";
import { format } from "date-fns";
import _ from "lodash";

export default function SupportEventDetail() {
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
      <section className={styles.supportEventDetailSection}>
        <div className={styles.supportEventDetailWrapper}>
          <div className={styles.supportEventDetailTitle}>{event.title}</div>
          <div className={styles.supportEventDetailDate}>
            {format(new Date(event["created_at"]), "yyyy-MM-dd")}
          </div>
          <div className={styles.supportEventDetailHorizen} />
          {event.image && (
            <img
              className={styles.supportEventDetailImage}
              src={event.image}
              alt="img"
            />
          )}
          <div className={styles.supportEventDetailDesc}>
            {event.description &&
              event.description.split("<br />").map((d, i) => (
                <React.Fragment key={i}>
                  {d}
                  <br />
                </React.Fragment>
              ))}
          </div>
          <div className={styles.supportEventDetailHorizen} />
        </div>
      </section>
    )
  );
}
