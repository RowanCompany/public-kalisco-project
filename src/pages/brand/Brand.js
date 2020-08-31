import React from "react";
import Nav from "../../components/nav/Nav";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import HibarinBanner from "../../components/brand/HibrainBanner";

// path={`${match.path}/history`}
// component={AboutHistory}
function Brand() {
    const match = useRouteMatch();
    console.log(match);
    return (
        <>
            <Nav />
            <Switch>
                <Route
                    path={`${match.path}/hibarin`}
                    component={HibarinBanner}
                />
                <Route path={match.path}>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );
}

export default Brand;
