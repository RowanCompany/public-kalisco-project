import React from "react";
import { useParams, Redirect, useRouteMatch } from "react-router-dom";
import BrandBanner from "../banner/BrandBanner";
import BannerImage from "../../../../static/images/mobile/img-hibarin-top@2x.png";
import BannerLogoIcon from "../../../../static/svg/mobile/hibarin-logo-header-w.svg";
import HibarinStory from "./HibarinStory";

function HibarinCaseRenderer({ subject }) {
  switch (subject) {
    case "story":
      return <HibarinStory />;
    default:
      return <Redirect to="/brand/hibarin/story" />;
  }
}

export default function HibarinContent() {
  const { subject } = useParams();
  const { url } = useRouteMatch();
  return (
    <>
      <BrandBanner image={BannerImage} titleLogo={BannerLogoIcon} url={url} />
      <HibarinCaseRenderer subject={subject} />
    </>
  );
}
