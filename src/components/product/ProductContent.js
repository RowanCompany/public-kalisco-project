import React from "react";
import ProductBanner from "./ProductBanner";
import {
    useParams,
    useRouteMatch,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import ProductHomemade from "./ProductHomemade";
import ProductDetailContent from "./ProductDetailContent";

function ProductContent() {
    const { subject } = useParams();
    const match = useRouteMatch();
    return (
        <>
            <ProductBanner subject={subject} />
            <Switch>
                <Route
                    path={`${match.path}/:content`}
                    component={ProductDetailContent}
                />
                <Route path={match.path}>
                    <ProductCaseRenderer subject={subject} />
                </Route>
            </Switch>
        </>
    );
}

function ProductCaseRenderer({ subject }) {
    switch (subject) {
        case "homemade":
            return <ProductHomemade />;
        case "my-own-recipe":
            return <Redirect to="/products/homemade" />;
        default:
            return <Redirect to="/products/homemade" />;
    }
}

export default ProductContent;
