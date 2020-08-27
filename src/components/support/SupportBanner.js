import React from "react";
import styles from "./support.module.scss";
import SupportDetailBannerImage from "../../static/images/support-detail-img-mar-Support.png";
import SupportTextImage from "../../static/images/support-text.png";
import { Link } from "react-router-dom";

function SupportBanner({ subject }) {
    return (
        <div className="position-relative">
            <div className={styles.supportDetailBackgroundWrapper}>
                <div className={styles.supportDetailLayoutWrapper}>
                    <div className={styles.supportDetailTitle}>
                        <img src={SupportTextImage} alt="Support text" />
                    </div>
                    <div>
                        <ul className={styles.supportDetailMenuList}>
                            <li className={styles.supportDetailMenu}>
                                <Link
                                    to="/supports/membership"
                                    className={`${
                                        styles.supportDetailMenuLink
                                    } ${
                                        subject === "membership"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    멤버십
                                </Link>
                            </li>
                            <li className={styles.supportDetailMenu}>
                                <Link
                                    to="/supports/giveaway"
                                    className={`${
                                        styles.supportDetailMenuLink
                                    } ${
                                        subject === "giveaway"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    상품권
                                </Link>
                            </li>
                            <li className={styles.supportDetailMenu}>
                                <Link
                                    to="/supports/partnership"
                                    className={`${
                                        styles.supportDetailMenuLink
                                    } ${
                                        subject === "partnership"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    제휴
                                </Link>
                            </li>
                            <li className={styles.supportDetailMenu}>
                                <Link
                                    to="/supports/kakaotalk-friends"
                                    className={`${
                                        styles.supportDetailMenuLink
                                    } ${
                                        subject === "kakaotalk-friends"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    카카오톡 친구
                                </Link>
                            </li>
                            <li className={styles.supportDetailMenu}>
                                <Link
                                    to="/supports/events"
                                    className={`${
                                        styles.supportDetailMenuLink
                                    } ${
                                        subject === "events"
                                            ? styles.active
                                            : ""
                                    }`}
                                >
                                    이벤트&amp;프로모션
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <img
                    src={SupportDetailBannerImage}
                    alt="Support Detail Banner"
                    className="img-fill"
                />
            </div>
        </div>
    );
}

export default SupportBanner;
