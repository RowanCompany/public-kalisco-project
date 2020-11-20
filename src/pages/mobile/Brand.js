import React from "react";
import Nav from "../../components/mobile/nav/MobileNav";
import Footer from "../../components/mobile/footer/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import BrandList from "../../components/mobile/brand/BrandList";
import HibarinContent from "../../components/mobile/brand/hibarin/HibarinContent";
import Fab from "../../components/brand/fab/Fab";
import HibarinMenuContent from "../../components/mobile/brand/hibarin/HibarinMenuContent";

export default function Brand({ match }) {
  return (
    <>
      <Nav />
      <Switch>
        <Route path={`${match.path}/saboten/:subject/:menu`} />
        <Route path={`${match.path}/saboten/:subject`} />
        <Route path={`${match.path}/saboten`}>
          <Redirect to="/brand/saboten/story" />
        </Route>
        <Route
          path={`${match.path}/hibarin/:subject/:menu`}
          component={HibarinMenuContent}
        />
        <Route path={`${match.path}/hibarin/:subject`}>
          <HibarinContent match={match} />
          <Fab subject="hibarin" />
        </Route>
        <Route path={`${match.path}/hibarin`}>
          <Redirect to="/brand/hibarin/story" />
        </Route>
        <Route path={match.path} component={BrandList} />
      </Switch>
      <Footer />
    </>
  );
}
