import React from "react";
import Nav from "../../components/nav/Nav";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import HibarinLanding from "../../components/brand/HibrainLanding";
import HibarinContent from "../../components/brand/HibarinContent";
import HibarinMenuContent from "../../components/brand/HibarinMenuContent";
import SabotenLanding from "../../components/brand/SabotenLanding";
import SabotenContent from "../../components/brand/SabotenContent";

function Brand() {
    const match = useRouteMatch();
    return (
        <>
            <Nav />
            <Switch>
                <Route
                    path={`${match.path}/saboten/:subject`}
                    component={SabotenContent}
                />
                <Route
                    path={`${match.path}/saboten`}
                    component={SabotenLanding}
                />
                <Route
                    path={`${match.path}/hibarin/:subject/:menu`}
                    component={HibarinMenuContent}
                />
                <Route
                    path={`${match.path}/hibarin/:subject`}
                    component={HibarinContent}
                />
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
