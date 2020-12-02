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
import EventForm from "./EventForm";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function EventContent() {
  const match = useRouteMatch();
  let query = useQuery();
  const type = query.get("type");
  const [contentType, setContentType] = useState("all");
  useEffect(() => {
    if (type) {
      setContentType(type);
    }
  }, [type]);

  return (
    <section className={eventContentWrapper}>
      <div className="container">
        <Switch>
          <Route path={`${match.path}/admin/create`}>
            <EventForm />
          </Route>
          <Route path={`${match.path}/:event`}>
            <EventCategoryList contentType={contentType} />
            <EventDetailContent />
          </Route>
          <Route path={match.path}>
            <EventCategoryList contentType={contentType} />
            <div className={styles.eventAddButtonWrapper}>
              <Link
                to="/supports/events/admin/create"
                className={styles.eventAddButton}
              >
                이벤트&프로모션 생성
              </Link>
            </div>
            <EventList type={contentType} />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default EventContent;
