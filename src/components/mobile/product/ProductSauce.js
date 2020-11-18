import React, { useState } from "react";
import sauceTop51Image from "../../../static/images/sauce-top4-2.png";
import sauceTop52Image from "../../../static/images/sauce-top4-4.png";
import sauceTop53Image from "../../../static/images/sauce-top4-1.png";
import sauceTop54Image from "../../../static/images/sauce-top4-3.png";
import ProductDetailNavigator from "./ProductDetailNavigator";
import styles from "./mobile_product.module.scss";
import sauceImage1 from "../../../static/images/img-p-sauce-3-2.jpg";
import katsuSauceImage from "../../../static/images/mobile/icon-sauce-katsu@2x.png";
import citronSauceImage from "../../../static/images/mobile/icon-sauce-citron@2x.png";
import sesameSauceImage from "../../../static/images/mobile/icon-sauce-sesame@2x.png";
import iconSteak from "../../../static/svg/steak.svg";
import iconSesame from "../../../static/svg/sesame.svg";
import iconTangerine from "../../../static/svg/tangerine.svg";
import iconRice from "../../../static/svg/rice.svg";
import { Link } from "react-router-dom";
import curryImage from "../../../static/images/img-newari-curry.png";

export default function ProductSauce({ content }) {
  const [clickedSauce, setClickedSauce] = useState("citron");
  const sauceImageData = {
    "spicy-cream": {
      image: sauceTop51Image,
      link: "/products/homemade/sauce/spicy-creem",
    },
    "spring-onion": {
      image: sauceTop52Image,
      link: "/products/homemade/sauce/green-onion",
    },
    tonkatsu: {
      image: sauceTop51Image,
      link: "/products/homemade/sauce/donkatsu",
    },
    sesame: {
      image: sauceTop52Image,
      link: "/products/homemade/sauce/sesame",
    },
    citron: {
      image: sauceTop53Image,
      link: "/products/homemade/sauce/citron",
    },
    "rice-bowl": {
      image: sauceTop54Image,
      link: "/products/homemade/sauce/rice-bowl",
    },
  };

  return (
    <section className={styles.productSauceSection}>
      <ProductDetailNavigator content={content} />
      <h2 className={styles.productSauceTitle}>대표 3종소스</h2>
      <div>
        <img src={sauceImage1} alt="sauce" className="img-fill" />
      </div>
      <div>
        <div className={styles.mainSauceListWrapper}>
          <div className="text-center">
            <img
              src={katsuSauceImage}
              alt="katsu sauce"
              className="img-fluid"
              style={{ width: "132px", height: "76px" }}
            />
          </div>
          <div className={styles.mainSauceTitle}>돈카츠 소스</div>
          <div className={styles.mainSauceDescription}>
            과일 고유의 단 맛과 레드와인의 풍요로운 조화
          </div>
        </div>
        <div className={styles.mainSauceListWrapper}>
          <div className="text-center">
            <img
              src={citronSauceImage}
              alt="citron sauce"
              className="img-fluid"
              style={{ width: "111px", height: "76px" }}
            />
          </div>
          <div className={styles.mainSauceTitle}>유자 소스</div>
          <div className={styles.mainSauceDescription}>
            전남고흥 친환경 농법으로 비타민C 가득한 새콤한 맛
          </div>
        </div>
        <div className={styles.mainSauceListWrapper}>
          <div className="text-center">
            <img
              src={sesameSauceImage}
              alt="citron sauce"
              className="img-fluid"
              style={{ width: "116px", height: "76px" }}
            />
          </div>
          <div className={styles.mainSauceTitle}>참깨 소스</div>
          <div className={styles.mainSauceDescription}>
            영양만점 참깨의 고소함 가득 깊은 풍미
          </div>
        </div>
      </div>
      <div className={styles.newSauceListWrapper}>
        <h3 className={styles.newSauceTitle}>대표 4종 소스</h3>
        <p className={styles.newSauceDescription}>
          * 소스 이미지를 터치하면 소스 설명 페이지로 이동합니다
        </p>
        <div className={styles.newSauceButtonList}>
          <button
            type="button"
            className={`${styles.newSauceButton} ${
              clickedSauce === "citron" ? styles.newSauceButtonActive : ""
            }`}
            onClick={() => setClickedSauce("citron")}
          >
            <img src={iconTangerine} alt="tangerine" />
            유자소스
          </button>
          <button
            type="button"
            className={`${styles.newSauceButton} ${
              clickedSauce === "tonkatsu" ? styles.newSauceButtonActive : ""
            }`}
            onClick={() => setClickedSauce("tonkatsu")}
          >
            <img src={iconSteak} alt="steak" />
            돈카츠소스
          </button>
        </div>
        <div className={styles.newSauceButtonList}>
          <button
            type="button"
            className={`${styles.newSauceButton} ${
              clickedSauce === "rice-bowl" ? styles.newSauceButtonActive : ""
            }`}
            onClick={() => setClickedSauce("rice-bowl")}
          >
            <img src={iconRice} alt="rice" />
            덮밥소스
          </button>
          <button
            type="button"
            className={`${styles.newSauceButton} ${
              clickedSauce === "sesame" ? styles.newSauceButtonActive : ""
            }`}
            onClick={() => setClickedSauce("sesame")}
          >
            <img src={iconSesame} alt="sesame" />
            참깨소스
          </button>
        </div>
        <div className={styles.newSauceImageWrapper}>
          <Link
            className="d-inline-block"
            to={
              !!sauceImageData[clickedSauce] &&
              sauceImageData[clickedSauce]["link"]
            }
          >
            <img
              src={
                !!sauceImageData[clickedSauce] &&
                sauceImageData[clickedSauce]["image"]
              }
              alt="Sauce"
              className="img-fluid"
            />
          </Link>
        </div>
      </div>
      <Link to="/products/homemade/sauce/curry" className="d-inline-block">
        <div className={styles.curryImageWrapper}>
          <div className={styles.curryImageDescriptionWrapper}>
            <div className={styles.curryImageSubDescription}>신제품</div>
            <div className={styles.curryImageDescription}>
              ‘사보텐 커리 소스’
            </div>
          </div>
          <div style={{ height: "100px" }}>
            <img src={curryImage} alt="curry" className="img-fill" />
          </div>
        </div>
      </Link>
    </section>
  );
}
