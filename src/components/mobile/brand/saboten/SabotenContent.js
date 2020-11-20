import React from "react";
import { Redirect, useParams, useRouteMatch } from "react-router-dom";
import BrandBanner from "../banner/BrandBanner";
import BannerImage from "../../../../static/images/mobile/img-saboten-p-banner@2x.png";
import BannerLogoIcon from "../../../../static/svg/mobile/banner-logo-saboten.svg";
import SabotenStore from "./SabotenStore";

function SabotenCaseRenderer({ subject }) {
  switch (subject) {
    case "story":
      return <React.Fragment />;
    /*case "menu":
      return <HibarinMenu subject={subject} />;*/
    case "store":
      return <SabotenStore />;
    case "news-and-events":
      return <Redirect to="/supports/events?type=saboten" />;
    default:
      return <Redirect to="/brand/saboten/story" />;
  }
}

export default function SabotenContent({ match }) {
  const { subject } = useParams();
  const { url } = useRouteMatch();

  return (
    <>
      <BrandBanner image={BannerImage} titleLogo={BannerLogoIcon} url={url} />
      <SabotenCaseRenderer subject={subject} />
    </>
  );
}
