import React from "react";
import styles from "./mobile_recruit.module.scss";
import rightArrow from "../../../static/svg/mobile/recruit-right-arrow.svg";
import step1Icon from "../../../static/svg/mobile/recruit-step1.svg";
import step2Icon from "../../../static/svg/mobile/recruit-step2.svg";
import step3Icon from "../../../static/svg/mobile/recruit-step3.svg";
import step4Icon from "../../../static/svg/mobile/recruit-step4.svg";
import step5Icon from "../../../static/svg/mobile/recruit-step5.svg";

export default function Recruit() {
  return (
    <section className={styles.mobileRecruitSection}>
      <h1 className={styles.mobileRecruitTitle}>지원절차</h1>
      <div className={styles.mobileRecruitCircleListWrapper}>
        <div className={styles.mobileRecruitCircleWrapper}>
          <div className={styles.mobileRecruitStepText}>Step 01</div>
          <div className={styles.mobileRecruitCircle}>
            <div className={styles.mobileRecruitCircleContentWrapper}>
              <div className={styles.mobileRecruitIconWrapper}>
                <img src={step1Icon} alt="step1 icon" />
              </div>
              <div className={styles.mobileRecruitCircleContent}>
                지원서 접수
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobileRecruitRightArrowWrapper}>
          <img src={rightArrow} alt="right arrow" />
        </div>
        <div className={styles.mobileRecruitCircleWrapper}>
          <div className={styles.mobileRecruitStepText}>Step 02</div>
          <div className={styles.mobileRecruitCircle}>
            <div className={styles.mobileRecruitCircleContentWrapper}>
              <div className={styles.mobileRecruitIconWrapper}>
                <img src={step2Icon} alt="step2 icon" />
              </div>
              <div className={styles.mobileRecruitCircleContent}>서류전형</div>
            </div>
          </div>
        </div>
        <div className={styles.mobileRecruitRightArrowWrapper}>
          <img src={rightArrow} alt="right arrow" />
        </div>
        <div className={styles.mobileRecruitCircleWrapper}>
          <div className={styles.mobileRecruitStepText}>Step 03</div>
          <div className={styles.mobileRecruitCircle}>
            <div className={styles.mobileRecruitCircleContentWrapper}>
              <div className={styles.mobileRecruitIconWrapper}>
                <img src={step3Icon} alt="step3 icon" />
              </div>
              <div className={styles.mobileRecruitCircleContent}>인성검사</div>
            </div>
          </div>
        </div>
        <div className={styles.mobileRecruitCircleWrapper}>
          <div className={styles.mobileRecruitStepText}>Step 04</div>
          <div className={styles.mobileRecruitCircle}>
            <div className={styles.mobileRecruitCircleContentWrapper}>
              <div className={styles.mobileRecruitIconWrapper}>
                <img src={step4Icon} alt="step4 icon" />
              </div>
              <div className={styles.mobileRecruitCircleContent}>면접전형</div>
            </div>
          </div>
        </div>
        <div className={styles.mobileRecruitRightArrowWrapper}>
          <img src={rightArrow} alt="right arrow" />
        </div>
        <div className={styles.mobileRecruitCircleWrapper}>
          <div className={styles.mobileRecruitStepText}>Step 05</div>
          <div className={styles.mobileRecruitCircle}>
            <div className={styles.mobileRecruitCircleContentWrapper}>
              <div className={styles.mobileRecruitIconWrapper}>
                <img src={step5Icon} alt="step5 icon" />
              </div>
              <div className={styles.mobileRecruitCircleContent}>최종합격</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileRecruitButtonWrapper}>
        <a
          href="https://recruit.kalisco.co.kr:9443"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileRecruitButton}
        >
          지원하기
        </a>
      </div>
    </section>
  );
}
