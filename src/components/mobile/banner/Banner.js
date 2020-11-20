import React from "react";
import styles from "./mobile_banner.module.scss";
import { Link } from "react-router-dom";

export default function Banner({ image, links, title, altLinks }) {
  const pathname = window.location.pathname;
  const isScrollable = pathname.includes("supports");
  const isBgDark = pathname.includes("supports");
  console.log(altLinks, pathname);

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerImageWrapper}>
        <div
          className={`${styles.bannerTitleWrapper} ${
            isBgDark ? styles.bannerTitleBgDark : ""
          }`}
        >
          {title}
        </div>
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
                    pathname.includes(d.link) ? styles.active : ""
                  } ${isScrollable ? styles.scrollableNavigation : ""} ${
                    altLinks &&
                    altLinks.includes(d.link) &&
                    altLinks.includes(pathname)
                      ? styles.active
                      : ""
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
