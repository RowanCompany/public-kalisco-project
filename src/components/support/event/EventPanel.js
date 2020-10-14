import React from "react";
import { Link } from "react-router-dom";
import styles from "./event.module.scss";
import { useRouteMatch } from "react-router-dom";

// TODO: 데이터 연동해야 함
function EventPanel(props) {
  const match = useRouteMatch();
  return (
    <Link to={`${match.url}/${props.id}`} className={styles.eventLinkWrapper}>
      <div>
        <div>
          <img
            src={props.image}
            alt="Temp event"
            className={styles.panelImageFill}
          />
        </div>
        <div className={styles.eventLinkboxWrapper}>
          <div className={styles.eventLinkTitle}>{props.title}</div>
          <div className={styles.eventLinkDate}>{props.createdAt}</div>
          <div className={styles.eventLinkMore}>More &gt;</div>
        </div>
      </div>
    </Link>
  );
}

export default EventPanel;
