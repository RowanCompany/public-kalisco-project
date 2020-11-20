import React from "react";
import styles from "./mobile_hibarin.module.scss";
import { newData, newBannerData } from "../../../brand/HibarinMenuData";

export default function HibarinMenuTable({ menu }) {
  return (
    <section className={styles.menuTableSection}>
      <div className={styles.bannerImageWrapper}>
        <img src={newBannerData[menu]} alt="banner" className="img-fill" />
      </div>
      <div className={styles.menuTableWrapper}>
        {newData[menu].map((d, i) => (
          <div
            key={i}
            className={`${styles.menuTable} animate__animated animate__fadeInUp`}
            style={{
              animationDelay: `${0.25 * (i + 1)}s`,
            }}
          >
            <div className={styles.menuNumber}>{d.no}</div>
            <div className={styles.menuImageWrapper}>
              <img src={d.image} alt="food" className="img-fill" />
            </div>
            <div className={styles.menuEnTitle}>{d.enTitle}</div>
            <div className={styles.menuTitle}>{d.title}</div>
            <div className={styles.menuDescription}>{d.description}</div>
            <div className={styles.menuPrice}>{d.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
