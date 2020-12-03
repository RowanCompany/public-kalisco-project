import React from "react";
import {
  Redirect,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import BannerImage from "../../../static/images/mobile/img-product-back@2x.png";
import Banner from "../banner/Banner";
import ProductHomemade from "./ProductHomemade";
import ProductDetailContent from "./ProductDetailContent";

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

export default function ProductContent() {
  const { subject } = useParams();
  const match = useRouteMatch();
  const links = [
    {
      title: "홈페이드 제품소개",
      link: "/products/homemade",
    },
    {
      title: "레시피",
      link: "/products/recipes",
    },
  ];

  return (
    <>
      <Banner image={BannerImage} title="Product" links={links} />
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
