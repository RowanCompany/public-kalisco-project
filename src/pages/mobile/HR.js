import React from "react";
import Nav from "../../components/mobile/nav/MobileNav";
import Footer from "../../components/mobile/footer/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import HrContent from "../../components/mobile/hr/HrContent";

export default function HR({ match }) {
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
