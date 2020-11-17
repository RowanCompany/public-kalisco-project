import React from "react";
import { Redirect, useParams } from "react-router-dom";
import BannerImage from "../../../static/images/mobile/img-product-back@2x.png";
import Banner from "../banner/Banner";
import ProductHomemade from "./ProductHomemade";

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
  const links = [
    {
      title: "홈페이드 제품소개",
      link: "/products/homemade",
    },
  ];
  return (
    <>
      <Banner image={BannerImage} title="Product" links={links} />
      <ProductCaseRenderer subject={subject} />
    </>
  );
}
