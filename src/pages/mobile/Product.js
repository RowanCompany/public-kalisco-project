import React from "react";
import Nav from "../../components/mobile/nav/MobileNav";
import Footer from "../../components/mobile/footer/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductContent from "../../components/mobile/product/ProductContent";
import Fab from "../../components/brand/fab/Fab";

export default function Product({ match }) {
  return (
    <>
      <Nav />
      <Switch>
        <Route path={`${match.path}/:subject`} component={ProductContent} />
        <Route path={match.path}>
          <Redirect to="/products/homemade" />
        </Route>
      </Switch>
      <Footer />
      <Fab />
    </>
  );
}
