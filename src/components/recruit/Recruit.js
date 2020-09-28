import React from "react";
import styles from "../hr/hr.module.scss";
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

function Recruit() {
    return (
        <section className={styles.welfareSecondSection}>
            <div className={styles.systemTitle}>
                회사의 성장과 함께 전문가가 되고 싶으신 분들 지원하세요.
            </div>
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
            {/* <div className={styles.contact}>
                ㈜캘리스코 경력사원모집(2019.03.01~)
                <br />
                문의 : 02-6966-9467,9471
            </div> */}
            <div style={{ textAlign: "center" }}>
                <Link className={styles.kaliscoButton} to="/recruit">
                    지원하기
                </Link>
            </div>
            <div className={styles.contact}>채용문의: 02-6956-4617,4618</div>
        </section>
    );
}

export default Recruit;
