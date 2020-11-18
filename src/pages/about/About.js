import React, { useState, useLayoutEffect } from "react";
import Nav from "../../components/nav/Nav";
import AboutHistory from "../../components/aboutContent/AboutHistory";
import AboutContent from "../../components/aboutContent/AboutContent";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AboutBusiness from "../../components/aboutContent/AboutBusiness";
import Fab from "../../components/brand/fab/Fab";
import MobileAboutComponent from "../mobile/About";
import { useMobileCheck } from "../../utils/mobile";

function DesktopAboutComponent({ match }) {
    return (
        <>
            <Nav />
            <Switch>
                <Route
                    path={`${match.path}/business`}
                    component={AboutBusiness}
                />
                <Route
                    path={`${match.path}/history`}
                    component={AboutHistory}
                />
                <Route path={match.path} component={AboutContent} />
            </Switch>
            <Fab />
        </>
    );
}

function About() {
    const [width, setWidth] = useState(window.innerWidth);
    useLayoutEffect(() => {
      window.addEventListener("resize", (e) => {
        setWidth(e.target.innerWidth);
      });
  
      return () => {
        window.addEventListener("resize", (e) => {
          setWidth(e.target.innerWidth);
        });
      };
    }, []);

    const match = useRouteMatch();
    return (
        useMobileCheck(width) ? <DesktopAboutComponent match={match} /> : <MobileAboutComponent match={match} />
    );
}

export default About;
