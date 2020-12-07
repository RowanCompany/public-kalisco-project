import React, { useEffect, useState } from "react";
import styles from "./event.module.scss";
import { Link, useParams } from "react-router-dom";
import { url } from "../../../utils/server";
import axios from "axios";
import { format } from "date-fns";
import _ from "lodash";

function EventDetailContent() {
  const [event, setEvent] = useState({});
  const [authorized, setAuthorized] = useState(false);
  const eventId = useParams().event;
  useEffect(() => {
    axios
      .get(`${url}/events/${eventId}`)
      .then((res) => {
        setEvent(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  }, [eventId]);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    axios
      .post(
        `${url}/admin/valid`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((res) => {
        const status = res.data.status;
        if (status === "OK") {
          setAuthorized(true);
        } else {
          setAuthorized(false);
          return Promise().reject("Not validated");
        }
      })
      .catch((err) => console.error(err));
  }, []);

  function handleEventRemove(e) {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken");
    if (
      window.confirm(
        "정말 해당 게시물을 삭제하시겠습니까? 다시는 되돌릴 수 없습니다."
      )
    ) {
      axios
        .delete(`${url}/events/${eventId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then(() => window.location.assign("/supports/events"))
        .catch((err) => {
          console.error(err);
          window.alert(
            "게시물 삭제에 실패했습니다, 동일현상 지속발생시 관리자에게 문의해주세요."
          );
          // window.location.reload();
        });
    }
  }

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
              <img src={event.image} alt={event.title} className="img-fill" />
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
        {authorized && (
          <div className={styles.eventEditButtonWrapper}>
            <Link
              to={`/supports/events/admin/form/${event.id}`}
              className={styles.eventEditButton}
            >
              이벤트&프로모션 수정
            </Link>
            <button
              type="button"
              className={styles.eventEditButton}
              onClick={handleEventRemove}
            >
              이벤트&프로모션 삭제
            </button>
          </div>
        )}
      </div>
    )
  );
}

export default EventDetailContent;
