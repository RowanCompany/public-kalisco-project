import React, { useState } from "react";
import styles from "./mobile_saboten.module.scss";
import { useParams, useRouteMatch } from "react-router-dom";
import SabotenBanner from "../banner/BrandBanner";
import BannerImage from "../../../../static/images/mobile/img-saboten-p-banner@2x.png";
import BannerLogoIcon from "../../../../static/svg/mobile/banner-logo-saboten.svg";
import SabotenMenuNavigator from "./SabotenMenuNavigator";
import Fab from "../../../brand/fab/Fab";
import SabotenMenuData from "../../../brand/SabotenMenuData";
import ModalProvider from "../../../brand/modal/modal-provider";
import SabotenMenuPanel from "./SabotenMenuPanel";
import SabotenMenuModal from "./SabotenMenuModal";

export default function SabotenMenuContent() {
  const params = useParams();
  const filteredParameter = params.menu === "noodle" ? "noodles" : params.menu;
  const [category] = useState(filteredParameter ? filteredParameter : "katsu");
  const { url } = useRouteMatch();

  return (
    <>
      <ModalProvider>
        <SabotenBanner
          image={BannerImage}
          titleLogo={BannerLogoIcon}
          url={url}
        />
        <SabotenMenuNavigator category={category} />
        <div className={styles.menuDetailSection}>
          <div className={styles.menuDetailListWrapper}>
            {SabotenMenuData[category] &&
              SabotenMenuData[category].map((d, i) => (
                /*<div key={i} className={styles.menuDetailWrapper}>
                  {d.image && (
                    <div className={styles.menuDetailImageWrapper}>
                      <img src={d.image} alt="food" />
                    </div>
                  )}
                  <div className={styles.menuDetailDescriptionWrapper}>
                    <div className={styles.menuDetailEnTitle}>{d.enTitle}</div>
                    <div className={styles.menuDetailTitle}>{d.title}</div>
                    <div className={styles.menuDetailPrice}>{d.price}</div>
                  </div>
                </div>*/
                <SabotenMenuPanel key={i} {...d} />
              ))}
          </div>
        </div>
        <SabotenMenuModal />
      </ModalProvider>
      <Fab subject="saboten" />
    </>
  );
}
