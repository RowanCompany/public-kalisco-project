import React from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/Footer";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import SupportDetailContent from "../../components/support/SupportDetailContent";
import SupportContent from "../../components/support/SupportContent";
import Fab from "../../components/brand/fab/Fab";

function Supports() {
    const match = useRouteMatch();
    return (
        <>
            <Nav />
            <Switch>
                <Route
                    path={`${match.path}/:subject`}
                    component={SupportDetailContent}
                />
                <Route path={match.path} component={SupportContent} />
            </Switch>
            <Footer />
            <Fab />
        </>
    );
}

export default Supports;
