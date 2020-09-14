import React from "react";
import bannerImage from "../../static/images/cuscomm-header-back.png";
import styles from "./banner.module.scss";

function ContactBanner() {
    return (
        <div className="position-relative">
            <div className={styles.backgroundWrapper}>
                <div className={styles.layoutWrapper}>
                    <div className={styles.title}>고객소통</div>
                </div>
            </div>
            <div>
                <img src={bannerImage} alt="Banner" className="img-fill" />
            </div>
        </div>
    );
}

export default ContactBanner;
