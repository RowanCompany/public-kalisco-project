import React from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/Footer";
import ProductContent from "../../components/product/ProductContent";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";

function Product() {
    const match = useRouteMatch();
    return (
        <>
            <Nav />
            <Switch>
                <Route
                    path={`${match.path}/:subject`}
                    component={ProductContent}
                />
                <Route path={match.path}>
                    <Redirect to="/products/homemade" />
                </Route>
            </Switch>
            <Footer />
        </>
    );
}

export default Product;
