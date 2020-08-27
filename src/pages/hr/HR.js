import React from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/Footer";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import HrContent from "../../components/hr/HrContent";

function HR() {
    const match = useRouteMatch();
    return (
        <>
            <Nav />
            <Switch>
                <Route path={`${match.path}/:subject`} component={HrContent} />
                <Route path={match.path}>
                    <Redirect to="/hr/talent" />
                </Route>
            </Switch>
            <Footer />
        </>
    );
}

export default HR;
