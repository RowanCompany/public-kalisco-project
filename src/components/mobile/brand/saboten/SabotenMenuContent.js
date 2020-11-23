import React, { useState } from "react";
import styles from "./mobile_saboten.module.scss";
import { useParams, useRouteMatch } from "react-router-dom";
import SabotenBanner from "../banner/BrandBanner";
import BannerImage from "../../../../static/images/mobile/img-saboten-p-banner@2x.png";
import BannerLogoIcon from "../../../../static/svg/mobile/banner-logo-saboten.svg";
import SabotenMenuNavigator from "./SabotenMenuNavigator";
import Fab from "../../../brand/fab/Fab";

export default function SabotenMenuContent() {
  const params = useParams();
  const [category] = useState(params.menu ? params.menu : "katsu");
  const { url } = useRouteMatch();

  return (
    <>
      <SabotenBanner image={BannerImage} titleLogo={BannerLogoIcon} url={url} />
      <SabotenMenuNavigator category={category} />
      <div className={styles.menuDetailSection}></div>
      <Fab subject="saboten" />
    </>
  );
}
