import React from "react";
import styles from "./mobile_banner.module.scss";
import { Link } from "react-router-dom";

export default function Banner({ image, links, title }) {
  const pathname = window.location.pathname;

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerImageWrapper}>
        <div className={styles.bannerTitleWrapper}>{title}</div>
        <div>
          <img src={image} alt="banner main" className={styles.bannerImage} />
        </div>
      </div>
      <div className={styles.bannerNavigationWrapper}>
        <nav>
          <ul className={styles.bannerNavigationFlexWrapper}>
            {links &&
              links.map((d, i) => (
                <li
                  className={`${styles.bannerNavigation} ${
                    d.link === pathname ? styles.active : ""
                  }`}
                  key={i}
                >
                  <Link to={d.link} className={styles.bannerNavigationLink}>
                    {d.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
