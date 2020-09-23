import React, { useState, useEffect } from "react";
import EventCategoryList from "./EventCategoryList";
import EventList from "./EventList";
import { eventContentWrapper } from "./event.module.scss";
import { useLocation, useRouteMatch, Route, Switch } from "react-router-dom";
import EventDetailContent from "./EventDetailContent";

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
        <EventCategoryList contentType={contentType} />
        <Switch>
          <Route path={`${match.path}/:event`} component={EventDetailContent} />
          <Route path={match.path}>
            <EventList type={contentType} />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default EventContent;
