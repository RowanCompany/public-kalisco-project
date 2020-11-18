import React, { useLayoutEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import HibarinLanding from "../../components/brand/HibrainLanding";
import HibarinContent from "../../components/brand/HibarinContent";
import HibarinMenuContent from "../../components/brand/HibarinMenuContent";
import SabotenLanding from "../../components/brand/SabotenLanding";
import SabotenContent from "../../components/brand/SabotenContent";
import SabotenMenuContent from "../../components/brand/SabotenMenuContent";
import BrandList from "../../components/brand/BrandList";
import Fab from "../../components/brand/fab/Fab";
import { useMobileCheck } from "../../utils/mobile";
import MobileBrandComponent from "../mobile/Brand";

function DesktopBrandComponent({ match }) {
  return (
    <>
      <Nav />
      <Switch>
        <Route
          path={`${match.path}/saboten/:subject/:menu`}
          component={SabotenMenuContent}
        />
        <Route
          path={`${match.path}/saboten/:subject`}
          component={SabotenContent}
        />
        <Route path={`${match.path}/saboten`} component={SabotenLanding} />
        <Route
          path={`${match.path}/hibarin/:subject/:menu`}
          component={HibarinMenuContent}
        />
        <Route
          path={`${match.path}/hibarin/:subject`}
          component={HibarinContent}
        />
        <Route path={`${match.path}/hibarin`} component={HibarinLanding} />
        <Route path={match.path}>
          <BrandList />
          <Fab />
        </Route>
      </Switch>
    </>
  );
}

function Brand() {
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
    <DesktopBrandComponent match={match} />
  ) : (
    <MobileBrandComponent match={match} />
  );
}

export default Brand;
