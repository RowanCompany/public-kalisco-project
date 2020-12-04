import React from "react";
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProductKatsu from "./ProductKatsu";
import ProductSauce from "./ProductSauce";
import ProductSauceDetail from "./ProductSauceDetail";
import RecipeForm from "./recipe/RecipeForm";
import RecipeDetailContent from "./recipe/RecipeDetailContent";
import RecipeEditForm from "./recipe/RecipeEditForm";

function ProductDetailContent() {
  const { content } = useParams();
  const match = useRouteMatch();
  return <ProductDetailCaseRenderer content={content} match={match} />;
}

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
      const { subject } = match.params;
      if (subject === "recipes") {
        switch (content) {
          case "admin":
            return (
              <Switch>
                <Route
                  path={`${match.path}/form/:recipeId`}
                  component={RecipeEditForm}
                />
                <Route path={`${match.path}/form`} component={RecipeForm} />
                <Route>
                  <Redirect to="/products/recipes" />
                </Route>
              </Switch>
            );
          default:
            return <RecipeDetailContent />;
        }
      }
      return <Redirect to="/products/homemade/katsu" />;
  }
}

export default ProductDetailContent;
