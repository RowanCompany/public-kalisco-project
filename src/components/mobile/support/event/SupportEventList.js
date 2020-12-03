import React, { useEffect, useState } from "react";
import styles from "../mobile_support.module.scss";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { url } from "../../../../utils/server";
import noImage from "../../../../static/images/no_image.jpg";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SupportEventList() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get(`${url}/events`).then((res) => {
      setEvents(res.data.data[0]);
    });
  }, []);

  const query = useQuery();
  let type = query.get("type");
  if (type === "" || type === null) {
    type = "all";
  }

  return (
    <>
      <section className={styles.supportEventSection}>
        <div className={styles.supportEventWrapper}>
          <div className={styles.supportEventPanels}>
            {events
              .map((data, index) => (
                <Link key={index} to={`/supports/events/${data.id}`}>
                  <div className={styles.supportEventPanel}>
                    <img
                      src={data.image !== "" ? data.image : noImage}
                      className={styles.supportEventPanelImage}
                      alt="img"
                    />
                    <div className={styles.supportEventPanelDesc}>
                      <div className={styles.supportEventPanelTitle}>
                        {data.title}
                      </div>
                      <div className={styles.supportEventPanelDate}>
                        {data["created_at"]}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
              .reverse()}
          </div>
        </div>
      </section>
    </>
  );
}
