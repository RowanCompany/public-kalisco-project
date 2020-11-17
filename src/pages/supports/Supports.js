import React, { useState, useLayoutEffect } from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/Footer";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import SupportDetailContent from "../../components/support/SupportDetailContent";
import SupportContent from "../../components/support/SupportContent";
import Fab from "../../components/brand/fab/Fab";
import MobileSupportComponent from "../mobile/Support";
import { useMobileCheck } from "../../utils/mobile";

function DesktopSupportComponent({ match }) {
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

function Supports() {
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
        useMobileCheck(width) ? <DesktopSupportComponent match={match} /> : <MobileSupportComponent match={match} />
    );
}

export default Supports;
