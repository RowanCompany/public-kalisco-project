import React from "react";
import styles from "./hr.module.scss";
import benefitTextImage from "../../static/images/Benefit.png";
import welfareTextImage from "../../static/images/Welfare.png";

function Welfare() {
    return (
        <>
            <section className={styles.welfareFirstSection}>
                <div className={styles.systemTitle}>인사제도</div>
                <div className={styles.systemParagraph}>
                    임직원을 위한 복지정책
                </div>
                <div className={styles.systemPanelWrapper}>
                    <div
                        className={`${styles.systemPanel} ${styles.systemFirstPanel}`}
                    >
                        <div className={styles.systenPanelDot} />
                        <div className={styles.systemTitleWrapper}>
                            <img src={benefitTextImage} alt="benefit text" />
                        </div>
                        <div className={styles.systemPanelContainer}>
                            <div className={styles.systemPanelFlexWrapper}>
                                <div className={styles.systemTitleButton}>
                                    급여
                                </div>
                                <div className={styles.systemDescription}>
                                    개인별 성과기반 연봉제 운영
                                </div>
                            </div>
                            <div className={styles.systemPanelFlexWrapper}>
                                <div className={styles.systemTitleButton}>
                                    인센티브
                                </div>
                                <div className={styles.systemDescription}>
                                    실적 기반 성과급 지급
                                </div>
                            </div>
                            <div className={styles.systemPanelFlexWrapper}>
                                <div className={styles.systemTitleButton}>
                                    법정제수당
                                </div>
                                <div className={styles.systemDescription}>
                                    연장, 휴일, 법정수당 적용
                                </div>
                            </div>
                            <div className={styles.systemPanelFlexWrapper}>
                                <div className={styles.systemTitleButton}>
                                    진급제도
                                </div>
                                <div className={styles.systemDescription}>
                                    정기승진급, 발탁진급
                                </div>
                            </div>
                            <div className={styles.systemPanelFlexWrapper}>
                                <div className={styles.systemTitleButton}>
                                    포상제도
                                </div>
                                <div className={styles.systemDescription}>
                                    우수매장포상,우수사원포상,즉포상,장기근속상
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${styles.systemPanel} ${styles.systemSecondPanel}`}
                    >
                        <div className={styles.systenPanelDot} />
                        <div className={styles.systemTitleWrapper}>
                            <img src={welfareTextImage} alt="welfare text" />
                        </div>
                        <div className={styles.systemPanelContainer}>
                            <div className={styles.systemPanelFlexWrapper}>
                                <div className={styles.systemTitleButton}>
                                    경조사
                                </div>
                                <div className={styles.systemDescription}>
                                    경조금 및 경조휴가 지급
                                </div>
                            </div>
                            <div className={styles.systemPanelFlexWrapper}>
                                <div className={styles.systemTitleButton}>
                                    건강검진
                                </div>
                                <div className={styles.systemDescription}>
                                    법정검진 외 의료비 보조
                                </div>
                            </div>
                            <div className={styles.systemPanelFlexWrapper}>
                                <div className={styles.systemTitleButton}>
                                    선물지급
                                </div>
                                <div className={styles.systemDescription}>
                                    명절 또는 기념일 선물 지급
                                </div>
                            </div>
                            <div className={styles.systemPanelFlexWrapper}>
                                <div className={styles.systemTitleButton}>
                                    직원할인
                                </div>
                                <div className={styles.systemDescription}>
                                    자사매장 20% 할인
                                </div>
                            </div>
                            <div className={styles.systemPanelFlexWrapper}>
                                <div className={styles.systemTitleButton}>
                                    기타지원
                                </div>
                                <div className={styles.systemDescription}>
                                    개별 법인카드 지급, 중식, 야간 교통비,
                                    교육비 제공
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Welfare;
