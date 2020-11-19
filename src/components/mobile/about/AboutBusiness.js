import React from "react";
import styles from "./mobile_about.module.scss";

import FirstToggle from "./AboutBusinessToggle/FirstToggle";
import SecondToggle from "./AboutBusinessToggle/SecondToggle";
import ThirdToggle from "./AboutBusinessToggle/ThirdToggle";

export default function AboutBusiness() {
    return (
        <>
            <section className={styles.aboutBusinessSection}>
                <div className={styles.aboutBusinessWrapper}>
                    <div className={styles.aboutBusinessTitle}>
                        <div className={styles.aboutBusinessTitleText}>사업소개</div>
                    </div>
                    <div className={styles.aboutBusinessIntros}>
                        <FirstToggle />
                        <SecondToggle />
                        <ThirdToggle />
                    </div>
                </div>
            </section>
        </>
    );
}