import React from "react";
import { Link } from "react-router-dom";
import styles from "./mobile_about.module.scss";

import ImageMainBg from "../../../static/images/mobile/img-mar-stone@2x.png";
import ImageMenuBg1 from "../../../static/images/mobile/About1@2x.png";
import ImageMenuBg2 from "../../../static/images/mobile/About2@2x.png";

export default function About() {
    return (
        <>
            <div className={styles.aboutMainSection}>
                <img className={styles.aboutMainBackground} src={ImageMainBg} alt="bg"/>
                <div className={styles.aboutMainWrapper}>
                    <div className={styles.aboutMainTitle}>
                        <span>캘리스코에</span> 오신 것을<br /> 환영합니다
                    </div>
                    <div className={styles.aboutMainDesc}><span>캘리스코</span>는 2001년 사보텐 오픈을 시작으로</div>
                    <div className={styles.aboutMainDesc}>현재까지 다양한 사업을 진행하고 있습니다.</div>
                </div>
            </div>
            <div className={styles.aboutMenuSection}>
                <Link to="/about/history">
                <div className={styles.aboutMenuWrapper}>
                    <div className={styles.aboutMenuTitle}>기업 연혁</div>
                </div>
                </Link>
                <div>
                    <img className={styles.aboutMenuBackground} src={ImageMenuBg2} alt="bg" />
                </div>
            </div>
            <div className={styles.aboutMenuSection}>
                <Link to="/about/business">
                <div className={styles.aboutMenuWrapper}>
                    <div className={styles.aboutMenuTitle}>사업 소개</div>
                </div>
                </Link>
                <div>
                    <img className={styles.aboutMenuBackground} src={ImageMenuBg1} alt="bg" />
                </div>
            </div>
        </>
    );
}