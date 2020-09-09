import React from "react";
import styles from "./product.module.scss";
import { Link } from "react-router-dom";

function SauceNavigator({ sauce }) {
    return (
        <nav>
            <ul className={styles.sauceNavigatorWrapper}>
                {/* <li>
                    <Link
                        to="/products/homemade/sauce/spicy-creem"
                        className={`${styles.sauceNavigator} ${
                            sauce === "spicy-creem"
                                ? styles.sauceNavigatorActive
                                : ""
                        }`}
                    >
                        Spicy Creem
                    </Link>
                </li>
                <li>
                    <Link
                        to="/products/homemade/sauce/green-onion"
                        className={`${styles.sauceNavigator} ${
                            sauce === "green-onion"
                                ? styles.sauceNavigatorActive
                                : ""
                        }`}
                    >
                        Green Onion
                    </Link>
                </li> */}
                <li>
                    <Link
                        to="/products/homemade/sauce/citron"
                        className={`${styles.sauceNavigator} ${
                            sauce === "citron"
                                ? styles.sauceNavigatorActive
                                : ""
                        }`}
                    >
                        Citron
                    </Link>
                </li>
                <li>
                    <Link
                        to="/products/homemade/sauce/donkatsu"
                        className={`${styles.sauceNavigator} ${
                            sauce === "donkatsu"
                                ? styles.sauceNavigatorActive
                                : ""
                        }`}
                    >
                        DonKatsu
                    </Link>
                </li>
                <li>
                    <Link
                        to="/products/homemade/sauce/rice-bowl"
                        className={`${styles.sauceNavigator} ${
                            sauce === "rice-bowl"
                                ? styles.sauceNavigatorActive
                                : ""
                        }`}
                    >
                        Rice bowl
                    </Link>
                </li>
                <li>
                    <Link
                        to="/products/homemade/sauce/sesame"
                        className={`${styles.sauceNavigator} ${
                            sauce === "sesame"
                                ? styles.sauceNavigatorActive
                                : ""
                        }`}
                    >
                        Sesame
                    </Link>
                </li>
                <li>
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
