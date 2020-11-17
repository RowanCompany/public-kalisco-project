import React from "react";
import styles from "./mobile_support.module.scss";
import ImgWarningThinking from "../../../static/images/mobile/img-thinking@2x.png";

export default function SupportMemberShip() {
    return (
        <>
            <section className={styles.supportWarningSection}>
                <div className={styles.supportWarningWrapper}>
                    <div className={styles.supportWarning}>
                        <div className={styles.supportWarningTitle}>조금만 기다려주세요!</div>
                        <img src={ImgWarningThinking} className={styles.supportWarningImage} alt="warning"/>
                        <div className={styles.supportWarningText}>고객님들을 위해</div>
                        <div className={styles.supportWarningText}>
                            <span className={styles.supportWarningTextBold}>어떤 서비스를</span> 제공할 수 있을까
                        </div>
                        <div className={styles.supportWarningText}>계속 고민 중에 있어요.</div>
                    </div>
                </div>
            </section>
        </>
    );
}