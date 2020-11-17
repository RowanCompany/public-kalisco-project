import React from "react";
import styles from "./mobile_support.module.scss";
import ImgWarningThinking from "../../../static/images/mobile/img-thinking@2x.png";

export default function SupportMemberShip() {
    return (
        <>
            <section className={styles.supportMemberShipSection}>
                <div className={styles.supportMemberShipWrapper}>
                    <div className={styles.supportMemberShipWarning}>
                        <div className={styles.supportMemberShipWarningTitle}>조금만 기다려주세요!</div>
                        <img src={ImgWarningThinking} className={styles.supportMemberShipWarningImage} alt="warning"/>
                        <div className={styles.supportMemberShipWarningText}>고객님들을 위해</div>
                        <div className={styles.supportMemberShipWarningText}>
                            <span className={styles.supportMemberShipWarningTextBold}>어떤 서비스를</span> 제공할 수 있을까
                        </div>
                        <div className={styles.supportMemberShipWarningText}>계속 고민 중에 있어요.</div>
                    </div>
                </div>
            </section>
        </>
    );
}