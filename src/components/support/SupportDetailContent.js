import React from "react";
import SupportBanner from "./SupportBanner";
import styles from "./support.module.scss";

function SupportDetailContent() {
    return (
        <>
            <SupportBanner />
            <div className={styles.tempDetailContent}>
                <div className={styles.tempDetailButtonWrapper}>
                    <button type="button" className={styles.tempDetailButton}>
                        조회하기
                    </button>
                </div>
            </div>
        </>
    );
}

export default SupportDetailContent;
