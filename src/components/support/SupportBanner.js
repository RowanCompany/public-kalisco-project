import React from "react";
import styles from "./support.module.scss";
import SupportDetailBannerImage from "../../static/images/support-detail-img-mar-Support.png";
import SupportTextImage from "../../static/images/support-text.png";
import { Link } from "react-router-dom";

function SupportBanner() {
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
                                    className={`${styles.supportDetailMenuLink} ${styles.active}`}
                                >
                                    멤버십
                                </Link>
                            </li>
                            <li className={styles.supportDetailMenu}>
                                <Link className={styles.supportDetailMenuLink}>
                                    상품권
                                </Link>
                            </li>
                            <li className={styles.supportDetailMenu}>
                                <Link className={styles.supportDetailMenuLink}>
                                    제휴
                                </Link>
                            </li>
                            <li className={styles.supportDetailMenu}>
                                <Link className={styles.supportDetailMenuLink}>
                                    카카오톡 친구
                                </Link>
                            </li>
                            <li className={styles.supportDetailMenu}>
                                <Link className={styles.supportDetailMenuLink}>
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
