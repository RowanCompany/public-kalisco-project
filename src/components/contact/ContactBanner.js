import React from "react";
import bannerImage from "../../static/images/cuscomm-header-back.png";
import styles from "./banner.module.scss";
import { Link } from "react-router-dom";

function ContactBanner({ subject }) {
    return (
        <div className="position-relative">
            <div className={styles.backgroundWrapper}>
                <div className={styles.layoutWrapper}>
                    <div
                        className={`${styles.title} animate__animated animate__fadeInDown`}
                    >
                        고객소통
                    </div>
                    <div>
                        <ul className={styles.menuList}>
                            {/* <li className={styles.menu}>
                                <Link
                                    to="/notices"
                                    className={`${styles.menuLink} ${
                                        subject === "notices"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    공지사항
                                </Link>
                            </li>
                            <li className={styles.menu}>
                                <Link
                                    to="/faq"
                                    className={`${styles.menuLink} ${
                                        subject === "faq" ? styles.active : ""
                                    }`}
                                >
                                    FAQ
                                </Link>
                            </li> */}
                            <li className={styles.menu}>
                                <Link
                                    to="/contact"
                                    className={`${styles.menuLink} ${
                                        subject === "contact"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    문의하기
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

export default ContactBanner;
