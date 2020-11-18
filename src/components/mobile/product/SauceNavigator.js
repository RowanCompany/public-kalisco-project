import React from "react";
import styles from "./mobile_product.module.scss";
import { Link } from "react-router-dom";

function SauceNavigator({ sauce }) {
  return (
    <nav>
      <ul className={styles.sauceNavigatorWrapper}>
        <li className={sauce === "citron" ? styles.sauceNavigatorActive : ""}>
          <Link
            to="/products/homemade/sauce/citron"
            className={`${styles.sauceNavigator} ${
              sauce === "citron" ? styles.sauceNavigatorActive : ""
            }`}
          >
            Citron
          </Link>
        </li>
        <li className={sauce === "donkatsu" ? styles.sauceNavigatorActive : ""}>
          <Link
            to="/products/homemade/sauce/donkatsu"
            className={`${styles.sauceNavigator} ${
              sauce === "donkatsu" ? styles.sauceNavigatorActive : ""
            }`}
          >
            DonKatsu
          </Link>
        </li>
        <li
          className={sauce === "rice-bowl" ? styles.sauceNavigatorActive : ""}
        >
          <Link
            to="/products/homemade/sauce/rice-bowl"
            className={`${styles.sauceNavigator} ${
              sauce === "rice-bowl" ? styles.sauceNavigatorActive : ""
            }`}
          >
            Rice bowl
          </Link>
        </li>
      </ul>
      <ul className={styles.sauceNavigatorWrapper}>
        <li className={sauce === "sesame" ? styles.sauceNavigatorActive : ""}>
          <Link
            to="/products/homemade/sauce/sesame"
            className={`${styles.sauceNavigator} ${
              sauce === "sesame" ? styles.sauceNavigatorActive : ""
            }`}
          >
            Sesame
          </Link>
        </li>
        <li className={sauce === "curry" ? styles.sauceNavigatorActive : ""}>
          <Link
            to="/products/homemade/sauce/curry"
            className={`${styles.sauceNavigator} ${
              sauce === "curry" ? styles.sauceNavigatorActive : ""
            }`}
          >
            Curry
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SauceNavigator;
