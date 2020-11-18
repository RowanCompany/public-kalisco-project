import React from "react";
import Nav from "../../components/mobile/nav/MobileNav";
import Footer from "../../components/mobile/footer/Footer";
import { Route, Switch } from "react-router-dom";
import BrandList from "../../components/mobile/brand/BrandLIst";

export default function Brand({ match }) {
  return (
    <>
      <Nav />
      <Switch>
        <Route path={`${match.path}/saboten/:subject/:menu`} />
        <Route path={`${match.path}/saboten/:subject`} />
        <Route path={`${match.path}/saboten`} />
        <Route path={`${match.path}/hibarin/:subject/:menu`} />
        <Route path={`${match.path}/hibarin/:subject`} />
        <Route path={`${match.path}/hibarin`} />
        <Route path={match.path} component={BrandList} />
      </Switch>
      <Footer />
    </>
  );
}
