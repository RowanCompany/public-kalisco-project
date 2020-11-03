import React, { useEffect } from "react";
import Swiper from "swiper";
import styles from "./mobile_main_vertical_list.module.scss";
import mainImage1 from "../../../static/images/mobile/img-main-1@2x.png";
import mainImage2 from "../../../static/images/mobile/img-main-2@2x.png";

export default function MobileMainVerticalList() {
  useEffect(() => {
    new Swiper(`.${styles.swiperContainer}`, {
      direction: "vertical",
      allowTouchMove: true,
      spaceBetween: 0,
      slidesPerView: 1,
      speed: 650,
      loop: false,
      wrapperClass: styles.swiperWrapper,
      slideClass: styles.swiperSlide,
      pagination: {
        clickable: true,
        el: `.${styles.swiperPagination}`,
      },
    });
  }, []);

  return (
    <div className={styles.swiperContainer}>
      <div className={styles.swiperWrapper}>
        <div className={styles.swiperSlide}>
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.firstSlideFlexWrapper}>
              <h1 className={styles.firstSlideTitle}>
                맛을 아는 사람들 캘리스코
              </h1>
              <div className={styles.firstSlideDescription}>
                우리는 맛을 압니다.
              </div>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage1} alt="main" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.firstSlideFlexWrapper}>
              <div className={styles.secondSlideEnglishTitle}>
                We believe that
                <br />
                Good food is a source
                <br />
                for tasty lifeness
              </div>
              <div className={styles.secondSlideKoreanTitle}>
                좋은 음식은 건강하고 행복한 일상의
                <br />
                맛과 멋을 향유하기 위한 원칙
              </div>
              <div className={styles.slideVerticalDivider} />
              <div className={styles.secondSlideTextList}>
                <div className={styles.secondSlideTextWrapper}>
                  <div className={styles.secondSlideText}>Trust</div>
                </div>
                <div className={styles.secondSlideListDot} />
                <div className={styles.secondSlideTextWrapper}>
                  <div className={styles.secondSlideText}>Sincerity</div>
                </div>
                <div className={styles.secondSlideListDot} />
                <div className={styles.secondSlideTextWrapper}>
                  <div className={styles.secondSlideText}>Connectivity</div>
                </div>
              </div>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage2} alt="main 2" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className="wh-100">
            <img src={mainImage2} alt="main 2" className="img-fill" />
          </div>
        </div>
      </div>
      <div className={styles.swiperPagination} />
    </div>
  );
}
