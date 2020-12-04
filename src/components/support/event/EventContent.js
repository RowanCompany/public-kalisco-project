import React, { useState, useEffect } from "react";
import EventCategoryList from "./EventCategoryList";
import EventList from "./EventList";
import styles, { eventContentWrapper } from "./event.module.scss";
import {
  useLocation,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import EventDetailContent from "./EventDetailContent";
import EventEditForm from "./EventEditForm";
import EventForm from "./EventForm";
import axios from "axios";
import { url } from "../../../utils/server";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function EventContent() {
  const match = useRouteMatch();
  let query = useQuery();
  const type = query.get("type");
  const [authorized, setAuthorized] = useState(false);
  const [contentType, setContentType] = useState("all");

  useEffect(() => {
    if (type) {
      setContentType(type);
    }
  }, [type]);

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

  return (
    <section className={eventContentWrapper}>
      <div className="container">
        <Switch>
          <Route path={`${match.path}/admin/form/:eventId`}>
            <EventEditForm />
          </Route>
          <Route path={`${match.path}/admin/form`}>
            <EventForm />
          </Route>
          <Route path={`${match.path}/:event`}>
            <EventCategoryList contentType={contentType} />
            <EventDetailContent />
          </Route>
          <Route path={match.path}>
            <EventCategoryList contentType={contentType} />
            {authorized && (
              <div className={styles.eventAddButtonWrapper}>
                <Link
                  to="/supports/events/admin/form"
                  className={styles.eventAddButton}
                >
                  이벤트&프로모션 생성
                </Link>
              </div>
            )}
            <EventList type={contentType} />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default EventContent;
