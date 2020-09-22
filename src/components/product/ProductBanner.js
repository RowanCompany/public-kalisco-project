import React from "react";
import bannerImage from "../../static/images/img-product-back.png";
import textImage from "../../static/images/product-text.png";
import styles from "./product.module.scss";
import { Link } from "react-router-dom";

function ProductBanner({ subject }) {
    return (
        <div className="position-relative">
            <div className={styles.backgroundWrapper}>
                <div className={styles.layoutWrapper}>
                    <div
                        className={`${styles.title} animate__animated animate__fadeInDown`}
                    >
                        <img src={textImage} alt="text" />
                    </div>
                    <div>
                        <ul className={styles.menuList}>
                            <li className={styles.menu}>
                                <Link
                                    to="/products/homemade"
                                    className={`${styles.menuLink} ${
                                        subject === "homemade"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    홈메이드 제품소개
                                </Link>
                            </li>
                            <li className={styles.menu}>
                                <Link
                                    to="/products/my-own-recipe"
                                    className={`${styles.menuLink} ${
                                        subject === "my-own-recipe"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    나만의 레시피
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <img src={bannerImage} alt="Banner" className="img-fill" />
            </div>
        </div>
    );
}

export default ProductBanner;
