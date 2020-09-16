import React from "react";
import styles from "./fab.module.scss";
import iconInstargram from "../../../static/svg/icon_insta.svg";
import iconFacebook from "../../../static/svg/icon_facebook.svg";
import iconSupport from "../../../static/svg/fab_support.svg";

function Fab() {
    return (
        <div className={styles.fabWrapper}>
            <div className={styles.supportIcon}>
                <img src={iconSupport} alt="instagram" />
            </div>
            <div className={styles.facebookIcon}>
                <img src={iconFacebook} alt="instagram" />
            </div>
            <div className={styles.instagramIcon}>
                <img src={iconInstargram} alt="instagram" />
            </div>
        </div>
    );
}

export default Fab;
