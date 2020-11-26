import React from "react";
import styles from "./mobile_product.module.scss";
import step1Icon from "../../../static/svg/mobile/grocery.svg";
import step2Icon from "../../../static/svg/mobile/ingredient.svg";
import step3Icon from "../../../static/svg/mobile/soup.svg";
import step4Icon from "../../../static/svg/mobile/tasty-emo.svg";
import productHome1Image from "../../../static/images/product-katsu-old-200917.jpg";
import productHome2Image from "../../../static/images/img-product-home-2-1.png";
import { Link } from "react-router-dom";
import naverIcon from "../../../static/svg/mobile/icon_naver.svg";
import kakaoIcon from "../../../static/svg/mobile/icon_kakaotalk_product.svg";
import ProductDetailNavigator from "./ProductDetailNavigator";

export default function ProductHomemade() {
  return (
    <>
      <section className={styles.productSectionOne}>
        <ProductDetailNavigator />
        <div className={styles.productCircleListWrapper}>
          <div className={styles.productCircle}>
            <div
              className={`${styles.productCircleContentWrapper} ${styles.first}`}
            >
              <div className={styles.productCircleImageWrapper}>
                <img src={step1Icon} alt="step1" />
              </div>
              <div className={styles.productCircleContentDescription}>
                셰프가
                <br />
                까다롭게 고른 재료
              </div>
            </div>
          </div>
          <div className={styles.productCircle}>
            <div
              className={`${styles.productCircleContentWrapper} ${styles.second}`}
            >
              <div className={styles.productCircleImageWrapper}>
                <img src={step2Icon} alt="step2" />
              </div>
              <div className={styles.productCircleContentDescription}>
                셰프가 제안하는
                <br />
                레시피
              </div>
            </div>
          </div>
          <div className={styles.productCircle}>
            <div
              className={`${styles.productCircleContentWrapper} ${styles.third}`}
            >
              <div className={styles.productCircleImageWrapper}>
                <img src={step3Icon} alt="step3" />
              </div>
              <div className={styles.productCircleContentDescription}>
                매장에서 먹던
                <br />
                감동, 그 맛 그대로
              </div>
            </div>
          </div>
          <div className={`${styles.productCircle} ${styles.lastCircle}`}>
            <div
              className={`${styles.productCircleContentWrapper} ${styles.fourth}`}
            >
              <div className={styles.productCircleImageWrapper}>
                <img src={step4Icon} alt="step4" />
              </div>
              <div className={styles.productCircleContentDescription}>
                맛을 아는 당신이
                <br />
                선택하는 제품
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <img src={productHome1Image} className="img-fill" alt="katsu" />
      </div>
      <section className={styles.productSectionTwo}>
        <div className={styles.productHomeMadeKatsuDescription}>
          캘리스코는 유명 돈카츠 브랜드인
          <br />
          사보텐의 돈카츠를 가정에서도 간편하게 즐기실 수 있도록
          <br />
          사보텐만의 노하우와 기술을 담아냈습니다.
        </div>
        <div className={styles.productHomemadeLinkWrapper}>
          <Link
            to="/products/homemade/katsu"
            className={styles.productHomemadeLink}
          >
            제품 보러가기
          </Link>
        </div>
      </section>
      <div>
        <img src={productHome2Image} alt="sauce" className="img-fill" />
      </div>
      <section className={styles.productSectionThree}>
        <div className={styles.productHomeMadeSauceDescription}>
          캘리스코는 사보텐 돈카츠 뿐만 아니라
          <br />
          사보텐 현지 매장에서 사용하는 소스도 제공하고 있습니다.
          <br />
          <br />
          돈카츠와 최상의 조화를 이루는 <b>돈카츠 소스</b>,
          <br />
          사보텐 매장에서 샐러드와 곁들여 먹는 <b>참깨소스, 유자소스</b>
          <br />
          뿐만 아니라 <b>베스트 메뉴에서 탄생한 커리소스, 일식덮밥소스</b> 등
          <br />
          고퀄리티의 다양한 소스를 즐겨보세요!
        </div>
        <div className={styles.productHomemadeLinkWrapper}>
          <Link
            to="/products/homemade/sauce"
            className={styles.productHomemadeLink}
          >
            제품 보러가기
          </Link>
        </div>
        <div className={styles.productHomeMadeStoreLinkWrapper}>
          <div className={styles.storeLinkWrapper}>
            <div className={styles.naverStoreLinkWrapper}>
              <div>
                <img src={naverIcon} alt="naver icon" />
              </div>
              <a
                href="https://smartstore.naver.com/saboten"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.storeLink}
              >
                네이버 스토어에서 구매하기
              </a>
            </div>
          </div>
          <div className={styles.storeLinkWrapper}>
            <div className={styles.kakaoStoreLinkWrapper}>
              <div>
                <img src={kakaoIcon} alt="kakao icon" />
              </div>
              <a
                href="https://store.kakao.com/sabotenkorea/products/68160429?ref=share"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.storeLink}
              >
                카카오 스토어에서 구매하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
