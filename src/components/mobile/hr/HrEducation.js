import React from "react";
import styles from "./mobile_hr.module.scss";
import NEPIcon from "../../../static/svg/mobile/edu-nep.svg";
import CUPIcon from "../../../static/svg/mobile/edu-cup.svg";
import PCPIcon from "../../../static/svg/mobile/edu-pcp.svg";
import HPPIcon from "../../../static/svg/mobile/edu-hpp.svg";
import SAIcon from "../../../static/svg/mobile/edu-sa.svg";

export default function HrEducation() {
  return (
    <section className={styles.educationSection}>
      <h2 className={styles.educationTitle}>Training Program</h2>
      <p className={styles.educationDescription}>
        체계적인 육성제도를 통한 성장경로 제시 및 경럭개발지원
      </p>
      <div className={styles.educationBox}>
        <div className={styles.educationBoxFlexWrapper}>
          <div className={styles.educationIconWrapper}>
            <img src={NEPIcon} alt="nep icon" />
          </div>
          <div>
            <div className={styles.educationBoxListTitle}>NEP</div>
            <div className={styles.educationBoxListSubTitle}>
              New Employee Program
            </div>
            <div className={styles.educationBoxListDescription}>
              신입사원 조기전략 교육
            </div>
          </div>
        </div>
        <div className={styles.educationBoxFlexWrapper}>
          <div className={styles.educationIconWrapper}>
            <img src={CUPIcon} alt="cup icon" />
          </div>
          <div>
            <div className={styles.educationBoxListTitle}>CUP</div>
            <div className={styles.educationBoxListSubTitle}>
              Competency Upgrade Program
            </div>
            <div className={styles.educationBoxListDescription}>
              직무역량 향상을 위한 직급교육
            </div>
          </div>
        </div>
        <div className={styles.educationBoxFlexWrapper}>
          <div className={styles.educationIconWrapper}>
            <img src={PCPIcon} alt="pcp icon" />
          </div>
          <div>
            <div className={styles.educationBoxListTitle}>PCP</div>
            <div className={styles.educationBoxListSubTitle}>
              Promotion Candidate Program
            </div>
            <div className={styles.educationBoxListDescription}>
              점장, DM 후보자 역량강화 교육
            </div>
          </div>
        </div>
        <div className={styles.educationBoxFlexWrapper}>
          <div className={styles.educationIconWrapper}>
            <img src={HPPIcon} alt="hpp icon" />
          </div>
          <div>
            <div className={styles.educationBoxListTitle}>HPP</div>
            <div className={styles.educationBoxListSubTitle}>
              High Performer Program
            </div>
            <div className={styles.educationBoxListDescription}>
              고성과자 역량강화 교육
            </div>
          </div>
        </div>
        <div className={styles.educationBoxFlexWrapper}>
          <div className={styles.educationIconWrapper}>
            <img src={SAIcon} alt="sa icon" />
          </div>
          <div>
            <div className={styles.educationBoxListTitle}>SA</div>
            <div className={styles.educationBoxListSubTitle}>
              Service Academy
            </div>
            <div className={styles.educationBoxListDescription}>
              서비스 경쟁력 강화 전사공통 교육
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
