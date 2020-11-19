import React, { useEffect, useState } from "react";
import styles from "./mobile_brand.module.scss";
import sabotenLogo from "../../../static/svg/logo-saboten.svg";
import hibarinLogo from "../../../static/svg/logo-hibarin.svg";
import tacobellLogo from "../../../static/svg/logo-tacobell-2.svg";
import ModalProvider from "../../brand/modal/modal-provider";
import BrandModal from "../../brand/modal/BrandModal";
import CentralKitchenCircle from "./circle/CentralKitchenCircle";
import { Link, useLocation } from "react-router-dom";
import ReperkCircle from "./circle/ReperkCircle";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function BrandList() {
  const query = useQuery();
  const [parameter, setParameter] = useState("");
  useEffect(() => {
    const urlParameter = query.get("modal");
    setParameter(urlParameter);
  }, [query]);

  return (
    <ModalProvider>
      <section className={styles.brandListSection}>
        <div className={styles.brandListFlexWrapper}>
          <div
            className={`${styles.brandCircle} ${styles.saboten} animate__animated animate__rotateIn`}
          >
            <div className={styles.brandCircleContent}>
              <div className={styles.brandCircleLogoWrapper}>
                <img src={sabotenLogo} alt="saboten" className="wh-100" />
              </div>
              <div className={styles.brandCircleDescription}>사보텐</div>
            </div>
          </div>
          <Link
            to="/brand/hibarin/story"
            className={`${styles.brandCircle} ${styles.hibarin} animate__animated animate__rotateIn`}
          >
            <div className={styles.brandCircleContent}>
              <div className={styles.brandCircleLogoWrapper}>
                <img src={hibarinLogo} alt="hibarin" className="wh-100" />
              </div>
              <div className={styles.brandCircleDescription}>히바린</div>
            </div>
          </Link>
          <a
            href="https://koreatacobell.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.brandCircle} ${styles.tacobell} animate__animated animate__rotateIn`}
          >
            <div className={styles.brandCircleContent}>
              <div className={styles.brandCircleLogoWrapper}>
                <img src={tacobellLogo} alt="tacobell" className="wh-100" />
              </div>
              <div className={styles.brandCircleDescription}>타코벨</div>
            </div>
          </a>
          <CentralKitchenCircle parameter={parameter} />
          <ReperkCircle parameter={parameter} />
          {/*<div className={`${styles.brandCircle} ${styles.centralKitchen}`}></div>
        <div className={`${styles.brandCircle} ${styles.reperk}`}></div>*/}
        </div>
      </section>
      <BrandModal />
    </ModalProvider>
  );
}
