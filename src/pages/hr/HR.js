import React, { useLayoutEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/Footer";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import HrContent from "../../components/hr/HrContent";
import Fab from "../../components/brand/fab/Fab";
import { useMobileCheck } from "../../utils/mobile";
import MobileHRComponent from "../mobile/HR";

function DesktopHRComponent({ match }) {
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
      <Fab />
    </>
  );
}

function HR() {
  const match = useRouteMatch();
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

  return useMobileCheck(width) ? (
    <DesktopHRComponent match={match} />
  ) : (
    <MobileHRComponent match={match} />
  );
}

export default HR;
