import React from "react";
import Nav from "../../components/nav/Nav";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import HibarinLanding from "../../components/brand/HibrainLanding";

// path={`${match.path}/history`}
// component={AboutHistory}
function Brand() {
    const match = useRouteMatch();
    return (
        <>
            <Nav />
            <Switch>
                <Route
                    path={`${match.path}/hibarin`}
                    component={HibarinLanding}
                />
                <Route path={match.path}>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );
}

export default Brand;
