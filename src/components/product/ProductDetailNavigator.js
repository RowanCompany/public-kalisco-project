import React from "react";
import styles from "./product.module.scss";
import { Link } from "react-router-dom";

function ProductDetailNavigator({ content }) {
    return (
        <nav>
            <ul className={styles.navigatorWrapper}>
                <li>
                    <Link
                        to="/products/homemade/katsu"
                        className={`${styles.navigator} ${
                            styles.darkThemeNavigator
                        } ${
                            content === "katsu" ? styles.darkThemeNavActive : ""
                        }`}
                    >
                        Katsu
                    </Link>
                </li>
                <li>
                    <Link
                        to="/products/homemade/sauce"
                        className={`${styles.navigator} ${
                            styles.darkThemeNavigator
                        } ${
                            content === "sauce" ? styles.darkThemeNavActive : ""
                        }`}
                    >
                        Sauce
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default ProductDetailNavigator;
