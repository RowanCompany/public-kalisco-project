import React from "react";
import SupportBanner from "./SupportBanner";
import styles from "./support.module.scss";

function SupportDetailContent() {
    return (
        <>
            <SupportBanner />
            <div className={styles.tempDetailContent}></div>
        </>
    );
}

export default SupportDetailContent;
