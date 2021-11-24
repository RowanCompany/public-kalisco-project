import React, { useEffect } from "react";
import Swiper from "swiper";
import styles from "./mobile_main_vertical_list.module.scss";
import mainImage1 from "../../../static/images/mobile/img-main-1@2x.png";
import mainImage2 from "../../../static/images/mobile/img-main-2@2x.png";
import mainImage3_1 from "../../../static/images/mobile/img-main-3-1-noround.jpg";
import mainImage3_2 from "../../../static/images/mobile/img-main-3-2-noround.jpg";
import mainImage3_3 from "../../../static/images/mobile/img-main-3-3-noround.jpg";
import mainImage4 from "../../../static/images/mobile/img-main-4@2x.png";
import mainImage5 from "../../../static/images/mobile/img-main-5@2x.png";
import mainImage6 from "../../../static/images/mobile/img-main-6@2x.png";
import mainImage7 from "../../../static/images/mobile/img-main-7@2x.png";
import { Link } from "react-router-dom";
import MobileMainCircle from "./circle/MobileMainCircle";
import SupportIcon from "./circle/svg/SupportIcon";
import NoticeIcon from "./circle/svg/NoticeIcon";
import EventIcon from "./circle/svg/EventIcon";
import RecruitIcon from "./circle/svg/RecruitIcon";
import kaliscoWhiteLogo from "../../../static/svg/mobile/logo-header-wh-m.svg";

export default function MobileMainVerticalList({ rootHeight }) {
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
      /*pagination: {
        clickable: false,
        el: `.${styles.swiperPagination}`,
      },*/
    });
  }, []);

  return (
    <div
      className={styles.swiperContainer}
      style={{ height: `${rootHeight}px` }}
    >
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
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.thirdSlideFlexWrapper}>
              <div className={styles.thirdSlideColumn}>
                <div className={styles.thirdSlideColumnTextWrapper}>
                  <div className={styles.thirdSlideColumnEnglishTitle}>
                    Wholesomeness
                  </div>
                  <div className={styles.thirdSlideColumnTitle}>
                    건강한 고집
                  </div>
                  <div className={styles.thirdSlideColumnDescriptionTitle}>
                    맛을 아는 사람들 캘리스코는
                  </div>
                  <div className={styles.thirdSlideColumnDescription}>
                    오랜시간 연구해온 고유의 레시피를 바탕으로
                    <br />
                    행복한 시간을 위해 오랜시간 레시피를 연구합니다.
                  </div>
                </div>
                <div className="w-100">
                  <img src={mainImage3_1} alt="main 3_1" className="img-fill" />
                </div>
              </div>
              <div className={styles.thirdSlideColumn}>
                <div className={styles.thirdSlideColumnTextWrapper}>
                  <div className={styles.thirdSlideColumnEnglishTitle}>
                    Sincereness
                  </div>
                  <div className={styles.thirdSlideColumnTitle}>
                    일상의 미학
                  </div>
                  <div className={styles.thirdSlideColumnDescriptionTitle}>
                    맛을 아는 당신을 위해
                  </div>
                  <div className={styles.thirdSlideColumnDescription}>
                    좋은 재료와 맛있는 음식에 대한 건강한 고집을 지키며
                    <br />
                    소중한 사람들과 교감하는 일상의 풍미를 선사합니다.
                  </div>
                </div>
                <div className="w-100">
                  <img src={mainImage3_2} alt="main 3_2" className="img-fill" />
                </div>
              </div>
              <div className={styles.thirdSlideColumn}>
                <div className={styles.thirdSlideColumnTextWrapper}>
                  <div className={styles.thirdSlideColumnEnglishTitle}>
                    Togetherness
                  </div>
                  <div className={styles.thirdSlideColumnTitle}>
                    행복한 식탁
                  </div>
                  <div className={styles.thirdSlideColumnDescriptionTitle}>
                    맛을 아는 당신에게
                  </div>
                  <div className={styles.thirdSlideColumnDescription}>
                    식사를 통한 즐거움과 정을 나누는
                    <br />
                    시공간을 제공합니다.
                  </div>
                </div>
                <div className="w-100">
                  <img src={mainImage3_3} alt="main 3_3" className="img-fill" />
                </div>
              </div>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage2} alt="main 2" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.firstSlideFlexWrapper}>
              <div className={styles.slideEnTitle}>Kalisco Family</div>
              <div className={styles.slideDescription}>
                맛을 아는 당신을 위해
                <br />
                캘리스코가 준비한 선물
              </div>
              <div className={styles.slideDivider} />
              <Link to="/supports" className={styles.slideButton}>
                혜택 보러가기
              </Link>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage4} alt="main 4" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.firstSlideFlexWrapper}>
              <div className={styles.slideEnTitle}>Product</div>
              <div className={styles.slideDescription}>
                레스토랑에서 먹던 그 맛 그대로-
              </div>
              <div className={styles.slideDivider} />
              <Link to="/products/homemade" className={styles.slideButton}>
                홈메이드 제품 보러가기
              </Link>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage5} alt="main 5" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.firstSlideFlexWrapper}>
              <div className={styles.slideEnTitle}>Join Us</div>
              <div className={styles.slideDescription}>
                맛을 아는 사람들은 모이세요.
              </div>
              <div className={styles.slideDivider} />
              <Link to="/hr/talent" className={styles.slideButton}>
                교육 / 인사제도
              </Link>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage6} alt="main 6" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.firstSlideBackgroundWrapper}>
            <div className={styles.firstSlideFlexWrapper}>
              <div className={styles.slideEnTitle}>Beyond Taste</div>
              <div className={styles.slideDescription}>
                20년간 최고의 맛을 지켜온
                <br />
                외식 전문 기업의 자부심
              </div>
            </div>
          </div>
          <div className="wh-100">
            <img src={mainImage7} alt="main 7" className="img-fill" />
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.lastSlideBackgroundWrapper}>
            <div className={styles.lastSlideCircleWrapper}>
              <MobileMainCircle
                Logo={SupportIcon}
                link="/faq"
                text={
                  <>
                    고객센터
                    <br />
                    FAQ
                  </>
                }
              />
              <MobileMainCircle
                Logo={NoticeIcon}
                link="/notices"
                text={<>Notice</>}
              />
              <MobileMainCircle
                Logo={EventIcon}
                link="/supports/events"
                text={<>이벤트</>}
              />
              <MobileMainCircle
                Logo={RecruitIcon}
                link="/recruit"
                text={<>Recruit</>}
              />
            </div>
            {/*<div className={styles.lastSlideFooterWrapper}>
              <div className={styles.footerLogoWrapper}>
                <img src={kaliscoWhiteLogo} alt="kalisco white logo" />
              </div>
              <div>
                서울시 강남구 역삼로 115 2층 (우)06243
                <br />
                사업자등록번호 211-88-32153 | 대표이사 구지은
              </div>
            </div>*/}
          </div>
        </div>
        <div className={styles.swiperSlide}>
          <div className={styles.lastSlideBackgroundWrapper}>
            <footer className={styles.mobileFooterBackgroundWrapper}>
              <div>
                <img src={kaliscoWhiteLogo} alt="kalisco logo" />
              </div>
              <div>
                <div>서울시 강남구 역삼로 115 2층 (우)06243</div>
                <div>사업자등록번호 211-88-32153 | 대표이사 구지은</div>
              </div>
              <div>
                <div className={styles.mobileFooterEmailWrapper}>
                  <div className={styles.mobileFooterEmailFlexWrapper}>
                    <div>입점제안 및 가맹문의</div>
                    <div>
                      <a
                        href="mailto:chulkyun.jung@kalisco.co.kr"
                        className={styles.mobileFooterEmailLink}
                      >
                        chulkyun.jung@kalisco.co.kr
                      </a>
                    </div>
                  </div>
                  <div className={styles.mobileFooterEmailFlexWrapper}>
                    <div>Easy to cook(편의식) 상품구입 및 특판문의</div>
                    <div>
                      <a
                        href="mailto:heonchan.kim@kalisco.co.kr"
                        className={styles.mobileFooterEmailLink}
                      >
                        heonchan.kim@kalisco.co.kr
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>캘리스코 고객센터 : 1833-4550</div>
                <div>(평일 09:00 ~ 18:00, 공휴일 휴무)</div>
              </div>
              <div>COPYRIGHT © 2020 KALISCO. ALL RIGHTS RESERVED.</div>
            </footer>
          </div>
        </div>
      </div>
      {/*<div className={styles.swiperPagination} />*/}
    </div>
  );
}
