import React from "react";
import styles from "./mobile_recruit.module.scss";

export default function Recruit() {
  return (
    <section className={styles.mobileRecruitSection}>
      <h1 className={styles.mobileRecruitTitle}>지원절차</h1>
      <div className={styles.mobileRecruitCircleWrapper}></div>
    </section>
  );
}
