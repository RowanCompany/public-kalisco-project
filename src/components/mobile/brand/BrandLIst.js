import React from "react";
import styles from "./mobile_brand.module.scss";
import sabotenLogo from "../../../static/svg/logo-saboten.svg";
import hibarinLogo from "../../../static/svg/logo-hibarin.svg";
import tacobellLogo from "../../../static/svg/logo-tacobell-2.svg";

export default function BrandList() {
  return (
    <section className={styles.brandListSection}>
      <div className={styles.brandListFlexWrapper}>
        <div className={`${styles.brandCircle} ${styles.saboten}`}>
          <div className={styles.brandCircleContent}>
            <div className={styles.brandCircleLogoWrapper}>
              <img src={sabotenLogo} alt="saboten" className="wh-100" />
            </div>
            <div className={styles.brandCircleDescription}>사보텐</div>
          </div>
        </div>
        <div className={`${styles.brandCircle} ${styles.hibarin}`}>
          <div className={styles.brandCircleContent}>
            <div className={styles.brandCircleLogoWrapper}>
              <img src={hibarinLogo} alt="hibarin" className="wh-100" />
            </div>
            <div className={styles.brandCircleDescription}>히바린</div>
          </div>
        </div>
        <div className={`${styles.brandCircle} ${styles.tacobell}`}>
          <div className={styles.brandCircleContent}>
            <div className={styles.brandCircleLogoWrapper}>
              <img src={tacobellLogo} alt="tacobell" className="wh-100" />
            </div>
            <div className={styles.brandCircleDescription}>타코벨</div>
          </div>
        </div>
        {/*<div className={`${styles.brandCircle} ${styles.centralKitchen}`}></div>
        <div className={`${styles.brandCircle} ${styles.reperk}`}></div>*/}
      </div>
    </section>
  );
}
