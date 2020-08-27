import React from "react";
import SupportBanner from "./SupportBanner";
import { useParams, Route, Switch } from "react-router-dom";
import styles from "./support.module.scss";

function SupportDetailContent() {
    const { subject } = useParams();
    console.log(subject);

    return (
        <>
            <SupportBanner subject={subject} />
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
