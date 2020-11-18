import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import SupportEventMenu from './event/SupportEventMenu';
import SupportEventList from './event/SupportEventList';
import SupportEventDetail from './event/SupportEventDetail';

export default function SupportEvent() {
    const match = useRouteMatch();

    return (
        <>
            <SupportEventMenu />
            <Switch>
                <Route path={`${match.path}/:event`} component={SupportEventDetail} />
                <Route path={match.path}>
                    <SupportEventList />
                </Route>
            </Switch>
        </>
    );
}