import React from "react";
import {
  Redirect,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import ProductKatsu from "./ProductKatsu";
import ProductSauce from "./ProductSauce";
import ProductSauceDetail from "./ProductSauceDetail";

function ProductDetailCaseRenderer({ content, match }) {
  switch (content) {
    case "katsu":
      return <ProductKatsu content={content} />;
    case "sauce":
      return (
        <Switch>
          <Route path={`${match.path}/:sauce`}>
            <ProductSauceDetail content={content} />
          </Route>
          <Route path={match.path}>
            <ProductSauce content={content} />
          </Route>
        </Switch>
      );
    default:
      return <Redirect to="/products/homemade/katsu" />;
  }
}

export default function ProductDetailContent() {
  const { content } = useParams();
  const match = useRouteMatch();
  return <ProductDetailCaseRenderer content={content} match={match} />;
}
