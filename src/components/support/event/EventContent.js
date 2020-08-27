import React from "react";
import EventCategoryList from "./EventCategoryList";
import EventList from "./EventList";
import { eventContentWrapper } from "./event.module.scss";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import EventDetailContent from "./EventDetailContent";

// TODO: Route 넣어야 됨
function EventContent() {
    const match = useRouteMatch();

    return (
        <section className={eventContentWrapper}>
            <div className="container">
                <EventCategoryList />
                <Switch>
                    <Route
                        path={`${match.path}/:event`}
                        component={EventDetailContent}
                    />
                    <Route path={match.path} component={EventList} />
                </Switch>
            </div>
        </section>
    );
}

export default EventContent;
