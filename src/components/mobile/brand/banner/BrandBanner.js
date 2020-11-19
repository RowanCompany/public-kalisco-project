import React from "react";
import styles from "./mobile_brand_banner.module.scss";
import { Link } from "react-router-dom";

export default function BrandBanner({ image, titleLogo, url }) {
  const brandSegment = url.split("/")[2];
  const brandNavigationLink = `/brand/${brandSegment}`;
  let brandStyle = "";
  switch (brandSegment) {
    case "hibarin":
      brandStyle = styles.hibarin;
      break;
    case "saboten":
      brandStyle = styles.saboten;
      break;
    default:
      break;
  }

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerImageWrapper}>
        <div className={styles.bannerLogoWrapper}>
          <img src={titleLogo} alt="title logo" width="100px" height="20px" />
        </div>
        <img src={image} alt="banner" />
      </div>
      <div className={styles.bannerNavigationWrapper}>
        <nav>
          <ul className={styles.bannerNavigationFlexWrapper}>
            <li className={styles.bannerNavigation}>
              <Link
                to={`${brandNavigationLink}/story`}
                className={`${styles.bannerNavigationLink} ${
                  `${brandNavigationLink}/story` === url
                    ? styles.bannerNavigationLinkActive
                    : ""
                } ${brandStyle}`}
              >
                Story
              </Link>
            </li>
            <li className={styles.bannerNavigation}>
              <Link
                to={`${brandNavigationLink}/menu`}
                className={`${styles.bannerNavigationLink} ${
                  `${brandNavigationLink}/menu` === url
                    ? styles.bannerNavigationLinkActive
                    : ""
                } ${brandStyle}`}
              >
                Menu
              </Link>
            </li>
            <li className={styles.bannerNavigation}>
              <Link
                to={`${brandNavigationLink}/store`}
                className={`${styles.bannerNavigationLink} ${
                  `${brandNavigationLink}/store` === url
                    ? styles.bannerNavigationLinkActive
                    : ""
                } ${brandStyle}`}
              >
                Store
              </Link>
            </li>
            <li className={styles.bannerNavigation}>
              <Link
                to={`${brandNavigationLink}/news-and-events`}
                className={`${styles.bannerNavigationLink} ${
                  `${brandNavigationLink}/news-and-events` === url
                    ? styles.bannerNavigationLinkActive
                    : ""
                } ${brandStyle}`}
              >
                News & Events
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
