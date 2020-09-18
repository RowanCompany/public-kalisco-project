import React from "react";
import styles from "./product.module.scss";
import { Link } from "react-router-dom";

function ProductDetailNavigator({ content }) {
    const isContentKatsu = content === "katsu";
    const isContentSauce = content === "sauce";
    const themeStyle = isContentKatsu
        ? styles.darkThemeNavigator
        : isContentSauce
        ? styles.lightThemeNavigator
        : styles.lightThemeNavigator;
    const darkThemeActiveStyle = styles.darkThemeNavActive;
    const lightThemeActiveStyle = styles.lightThemeNavActive;
    return (
        <nav>
            <ul className={styles.navigatorWrapper}>
                <li>
                    <Link
                        to="/products/homemade/katsu"
                        className={`${styles.navigator} ${themeStyle} ${
                            isContentKatsu && darkThemeActiveStyle
                        }`}
                    >
                        Katsu
                    </Link>
                </li>
                <li>
                    <Link
                        to="/products/homemade/sauce"
                        className={`${styles.navigator} ${themeStyle} ${
                            isContentSauce && lightThemeActiveStyle
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
