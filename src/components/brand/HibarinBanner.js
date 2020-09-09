import React from "react";
import bannerImage from "../../static/images/img-hibarin-top.png";
import textImage from "../../static/svg/logo-hibarin-big.svg";
import styles from "./banner.module.scss";
import { Link } from "react-router-dom";

function HibarinBanner({ subject }) {
    return (
        <div className="position-relative">
            <div className={styles.backgroundWrapper}>
                <div className={styles.layoutWrapper}>
                    <div className={styles.title}>
                        <img src={textImage} alt="text" />
                    </div>
                    <div>
                        <ul className={styles.menuList}>
                            <li className={styles.menu}>
                                <Link
                                    to="/brand/hibarin/story"
                                    className={`${styles.menuLink} ${
                                        subject === "story" ? styles.active : ""
                                    }`}
                                >
                                    Story
                                </Link>
                            </li>
                            <li className={styles.menu}>
                                <Link
                                    to="/brand/hibarin/menu"
                                    className={`${styles.menuLink} ${
                                        subject === "menu" ? styles.active : ""
                                    }`}
                                >
                                    Menu
                                </Link>
                            </li>
                            {/* <li className={styles.menu}>
                                <Link
                                    to="/brand/hibarin/gift-card"
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
                                    to="/brand/hibarin/store"
                                    className={`${styles.menuLink} ${
                                        subject === "store" ? styles.active : ""
                                    }`}
                                >
                                    Store
                                </Link>
                            </li>
                            <li className={styles.menu}>
                                <Link
                                    to="/brand/hibarin/news-and-events"
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

export default HibarinBanner;
