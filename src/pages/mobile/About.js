import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "../../components/mobile/nav/MobileNav";
import Footer from "../../components/mobile/footer/Footer";

import AboutMain from "../../components/mobile/about/About";
import AboutContent from "../../components/mobile/about/AboutContent";

export default function About({ match }) {
    return (
        <>
            <Nav />
            <Switch>
                <Route
                    path={`${match.path}/:subject`}                    
                    component={AboutContent}
                />
                <Route path={match.path} component={AboutMain} />
            </Switch>
            <Footer />
        </>
    );
}