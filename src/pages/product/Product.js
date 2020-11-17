import React, { useLayoutEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/Footer";
import ProductContent from "../../components/product/ProductContent";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import Fab from "../../components/brand/fab/Fab";
import { useMobileCheck } from "../../utils/mobile";
import MobileProductComponent from "../mobile/Product";

function DekstopProductComponent({ match }) {
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

function Product() {
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
    <DekstopProductComponent match={match} />
  ) : (
    <MobileProductComponent match={match} />
  );
}

export default Product;
