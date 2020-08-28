import React from "react";
import styles from "./hr.module.scss";
import benefitTextImage from "../../static/images/Benefit.png";
import welfareTextImage from "../../static/images/Welfare.png";
import singleRightArrow from "../../static/svg/icon-arrow-right-g.svg";
import step01TextImage from "../../static/images/step-01-text.png";
import step02TextImage from "../../static/images/step-02-text.png";
import step03TextImage from "../../static/images/step-03-text.png";
import step04TextImage from "../../static/images/step-04-text.png";
import step05TextImage from "../../static/images/step-05-text.png";
import iconForm from "../../static/svg/icon-form.svg";
import iconDocs from "../../static/svg/icon-docs.svg";
import iconPersonalityInterview from "../../static/svg/icon-personality-interview.svg";
import iconInterview from "../../static/svg/icon-interview.svg";
import iconOffer from "../../static/svg/icon-offer.svg";
import { Link } from "react-router-dom";

function Welfare() {
    return (
        <>
            <section className={styles.welfareFirstSection}>
                <div className={styles.systemTitle}>인사제도</div>
                <div className={styles.systemParagraph}>
                    임직원을 위한 복지/지원 정책
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
                                    연봉제 운영, 월 급여 형태 지급
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
                                    연장, 휴일, 야간 법적 수당 적용
                                </div>
                            </div>
                            <div className={styles.systemPanelFlexWrapper}>
                                <div className={styles.systemTitleButton}>
                                    진급제도
                                </div>
                                <div className={styles.systemDescription}>
                                    MBO평가 및 발탁 진급
                                </div>
                            </div>
                            <div className={styles.systemPanelFlexWrapper}>
                                <div className={styles.systemTitleButton}>
                                    포상제도
                                </div>
                                <div className={styles.systemDescription}>
                                    월/분기/반기/연간 단위 시상
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
                                    점포 20% 할인
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
            <section className={styles.welfareSecondSection}>
                <div className={styles.systemTitle}>지원절차</div>
                <div className={styles.systemFlowWrapper}>
                    <div>
                        <div className={styles.systemStepWrapper}>
                            <img src={step01TextImage} alt="step 01" />
                        </div>
                        <div className={styles.systemFlowCircle}>
                            <div className={styles.systemCircleIconWrapper}>
                                <img src={iconForm} alt="form icon" />
                            </div>
                            <div>지원서 접수</div>
                        </div>
                    </div>
                    <div className={styles.systemStepArrowWrapper}>
                        <img src={singleRightArrow} alt="right arrow" />
                    </div>
                    <div>
                        <div className={styles.systemStepWrapper}>
                            <img src={step02TextImage} alt="step 02" />
                        </div>
                        <div className={styles.systemFlowCircle}>
                            <div className={styles.systemCircleIconWrapper}>
                                <img src={iconDocs} alt="docs icon" />
                            </div>
                            <div>서류전형</div>
                        </div>
                    </div>
                    <div className={styles.systemStepArrowWrapper}>
                        <img src={singleRightArrow} alt="right arrow" />
                    </div>
                    <div>
                        <div className={styles.systemStepWrapper}>
                            <img src={step03TextImage} alt="step 03" />
                        </div>
                        <div className={styles.systemFlowCircle}>
                            <div className={styles.systemCircleIconWrapper}>
                                <img
                                    src={iconPersonalityInterview}
                                    alt="personality interview icon"
                                />
                            </div>
                            <div>인성검사</div>
                        </div>
                    </div>
                    <div className={styles.systemStepArrowWrapper}>
                        <img src={singleRightArrow} alt="right arrow" />
                    </div>
                    <div>
                        <div className={styles.systemStepWrapper}>
                            <img src={step04TextImage} alt="step 04" />
                        </div>
                        <div className={styles.systemFlowCircle}>
                            <div className={styles.systemCircleIconWrapper}>
                                <img src={iconInterview} alt="interview icon" />
                            </div>
                            <div>면접전형</div>
                        </div>
                    </div>
                    <div className={styles.systemStepArrowWrapper}>
                        <img src={singleRightArrow} alt="right arrow" />
                    </div>
                    <div>
                        <div className={styles.systemStepWrapper}>
                            <img src={step05TextImage} alt="step 05" />
                        </div>
                        <div className={styles.systemFlowCircle}>
                            <div className={styles.systemCircleIconWrapper}>
                                <img src={iconOffer} alt="offer icon" />
                            </div>
                            <div>최종합격</div>
                        </div>
                    </div>
                </div>
                <div className={styles.contact}>
                    ㈜캘리스코 경력사원모집(2019.03.01~)
                    <br />
                    문의 : 02-6966-9467,9471
                </div>
                <div style={{ textAlign: "center" }}>
                    <Link className={styles.kaliscoButton} to="/hr/welfare">
                        지원하기
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Welfare;
