import React from "react";
import styles from "./hr.module.scss";
import bannerImage from "../../static/images/hr_top_back.png";
import textImage from "../../static/images/hr-text.png";
import { Link } from "react-router-dom";

function HrBanner({ subject }) {
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
                                    to="/hr/talent"
                                    className={`${styles.menuLink} ${
                                        subject === "talent"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    인재상
                                </Link>
                            </li>
                            <li className={styles.menu}>
                                <Link
                                    to="/hr/education"
                                    className={`${styles.menuLink} ${
                                        subject === "education"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    교육
                                </Link>
                            </li>
                            <li className={styles.menu}>
                                <Link
                                    to="/hr/welfare"
                                    className={`${styles.menuLink} ${
                                        subject === "welfare"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    복지
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

export default HrBanner;
