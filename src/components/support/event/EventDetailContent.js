import React from "react";
import styles from "./event.module.scss";
import LeftArrow from "./svg/LeftArrow";
import RightArrow from "./svg/RightArrow";
import upArrow from "../../../static/svg/icon-arrow-up.svg";
import downArrow from "../../../static/svg/icon-arrow-down.svg";
import EventPanelData from "./EventPanelData";
import { useParams } from "react-router-dom";

// TODO: 데이터 연동해야 함
function EventDetailContent() {
  let { event } = useParams();
  event = window.parseInt(event);
  const filteredItem = EventPanelData.filter((d) => d.id === event)[0];
  return (
    <div className={styles.eventDetailWrapper}>
      <div className={styles.eventDetailTitle}>{filteredItem.title}</div>
      <div className={styles.eventDetailDate}>{filteredItem.createdAt}</div>
      <div className={styles.eventDetailNavigatorWrapper}>
        <div
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
        </div>
      </div>
      <div className={styles.eventDetailContentWrapper}>
        <div>
          <img src={filteredItem.image} alt="event temp" />
        </div>
        <div style={{ paddingTop: "50px" }}>{filteredItem.description}</div>
      </div>
      <div className={styles.eventDetailPostNavigatorWrapper}>
        <div className={styles.eventDetailPostNavigator}>
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
        </div>
      </div>
    </div>
  );
}

export default EventDetailContent;
