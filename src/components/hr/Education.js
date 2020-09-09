import React from "react";
import styles from "./hr.module.scss";
import trainingProgramTextImage from "../../static/images/training-program-text.png";
import hrSectionFirstTextBg from "../../static/svg/hr-section1-text-bg.svg";
import hrNEPSVG from "../../static/svg/hr-nep.svg";
import hrCUPSVG from "../../static/svg/hr-cup.svg";
import hrPCPSVG from "../../static/svg/hr-pcp.svg";
import hrHPPSVG from "../../static/svg/hr-hpp.svg";
import hrSASVG from "../../static/svg/hr-sa.svg";

function Education() {
    return (
        <section className={styles.educationSection}>
            <div className="text-center" style={{ marginBottom: "37px" }}>
                <img src={trainingProgramTextImage} alt="training program" />
            </div>
            <div className={styles.educationSubTitle}>
                체계적인 육성제도를 통한 성장경로 제시 및 경력개발지원
            </div>
            <div className={styles.educationContainer}>
                <div className={styles.educationContainerImageWrapper}>
                    <img src={hrSectionFirstTextBg} alt="HR Section First BG" />
                </div>
                <div className={styles.educationFlexWrapper}>
                    <div>
                        <div className={styles.educationTrainingImageWrapper}>
                            <img src={hrNEPSVG} alt="HR NEP" />
                        </div>
                        <div className={styles.eudcationTrainingTitle}>NEP</div>
                        <div className={styles.eudcationTrainingParagraph}>
                            New Employee Program
                        </div>
                        <div className={styles.educationTrainingDescription}>
                            신입사원 조기전략 교육
                        </div>
                    </div>
                    <div>
                        <div className={styles.educationTrainingImageWrapper}>
                            <img src={hrCUPSVG} alt="HR CUP" />
                        </div>
                        <div className={styles.eudcationTrainingTitle}>CUP</div>
                        <div className={styles.eudcationTrainingParagraph}>
                            Competency Upgrade Program
                        </div>
                        <div className={styles.educationTrainingDescription}>
                            직무역량 향상을 위한 직급교육
                        </div>
                    </div>
                    <div>
                        <div className={styles.educationTrainingImageWrapper}>
                            <img src={hrPCPSVG} alt="HR PCP" />
                        </div>
                        <div className={styles.eudcationTrainingTitle}>PCP</div>
                        <div className={styles.eudcationTrainingParagraph}>
                            Promotion Candidate Program
                        </div>
                        <div className={styles.educationTrainingDescription}>
                            진급자 역량강화을 위한 교육
                        </div>
                    </div>
                    <div>
                        <div className={styles.educationTrainingImageWrapper}>
                            <img src={hrHPPSVG} alt="HR HPP" />
                        </div>
                        <div className={styles.eudcationTrainingTitle}>HPP</div>
                        <div className={styles.eudcationTrainingParagraph}>
                            High Performer Program
                        </div>
                        <div className={styles.educationTrainingDescription}>
                            고성과자 역량강화 교육
                        </div>
                    </div>
                    <div>
                        <div className={styles.educationTrainingImageWrapper}>
                            <img src={hrSASVG} alt="HR SA" />
                        </div>
                        <div className={styles.eudcationTrainingTitle}>SA</div>
                        <div className={styles.eudcationTrainingParagraph}>
                            Service Academy
                        </div>
                        <div className={styles.educationTrainingDescription}>
                            서비스 경쟁력 강화 전사공통 교육
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
