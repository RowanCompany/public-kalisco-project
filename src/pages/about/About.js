import React from "react";
import Nav from "../../components/nav/Nav";
import AboutContent from "../../components/aboutContent/AboutContent";
import Footer from "../../components/Footer";
import { Route, Switch, useRouteMatch } from "react-router-dom";

function About() {
    const match = useRouteMatch();
    return (
        <>
            <Nav />
            <Switch>
                <Route path={`${match.path}/history`}>
                    <div>hi</div>
                </Route>
                <Route path={match.path} component={AboutContent} />
            </Switch>
            <Footer />
        </>
    );
}

export default About;
