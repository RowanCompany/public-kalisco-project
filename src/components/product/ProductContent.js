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
import Recipe from "./recipe/Recipe";

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
    case "recipes":
      return <Recipe />;
    default:
      return <Redirect to="/products/homemade" />;
  }
}

export default ProductContent;
