import React from "react";
import bannerImage from "../../static/images/img-saboten-top.png";
import textImage from "../../static/svg/logo-saboten-banner.svg";
import styles from "./banner.module.scss";
import { Link } from "react-router-dom";

function SabotenBanner({ subject }) {
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
                                    to="/brand/saboten/story"
                                    className={`${styles.menuLink} ${
                                        subject === "story" ? styles.active : ""
                                    }`}
                                >
                                    Story
                                </Link>
                            </li>
                            <li className={styles.menu}>
                                <Link
                                    to="/brand/saboten/menu"
                                    className={`${styles.menuLink} ${
                                        subject === "menu" ? styles.active : ""
                                    }`}
                                >
                                    Menu
                                </Link>
                            </li>
                            {/* <li className={styles.menu}>
                                <Link
                                    to="/brand/saboten/gift-card"
                                    className={`${styles.menuLink} ${
                                        subject === "gift-card"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    Gift Card
                                </Link>
                            </li> */}
                            <li className={styles.menu}>
                                <Link
                                    to="/brand/saboten/store"
                                    className={`${styles.menuLink} ${
                                        subject === "store" ? styles.active : ""
                                    }`}
                                >
                                    Store
                                </Link>
                            </li>
                            <li className={styles.menu}>
                                <Link
                                    to="/brand/saboten/news-and-events"
                                    className={`${styles.menuLink} ${
                                        subject === "news-and-events"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    News &amp; Events
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

export default SabotenBanner;
