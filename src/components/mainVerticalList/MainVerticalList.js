import React, { useState, useEffect } from "react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import hrImage from "../../static/images/hr.png";
import productIntroImage from "../../static/images/product-intro.png";
import kaliscoFamilyText from "../../static/images/kalisco-family-text.png";
import joinUsImage from "../../static/images/joinus.png";
import joinUsTextImage from "../../static/images/join-us-text.png";
import beyondTasteApronImage from "../../static/images/beyond-taste-apron.png";
import beyondTasteText from "../../static/images/beyond-taste.png";
import MainBanner from "../mainBanner/MainBanner";
import SupportCircle from "../mainFooterCircle/SupportCircle";
import NoticeCircle from "../mainFooterCircle/NoticeCircle";
import EventCircle from "../mainFooterCircle/EventCircle";
import RecruitCircle from "../mainFooterCircle/RecruitCircle";
import Footer from "../Footer";
import { Link, useLocation } from "react-router-dom";
import productText from "../../static/images/product.png";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "./main_vertical_list.scss";
import mouseScrollIcon from "../../static/svg/icon-mousescroll.svg";
import Fab from "./fab/Fab";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MainVerticalList() {
  SwiperCore.use([Mousewheel, Pagination]);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  let query = useQuery();
  const queryActiveIndex = query.get("activeIndex");
  useEffect(() => {
    if (controlledSwiper) {
      if (queryActiveIndex) {
        setActiveIndex(Number(queryActiveIndex));
        controlledSwiper.activeIndex = queryActiveIndex;
      } else {
        setActiveIndex(0);
        controlledSwiper.activeIndex = 0;
      }
      controlledSwiper.update();
    }
  }, [controlledSwiper, queryActiveIndex]);

  return (
    <>
      <Swiper
        slidesPerView={1}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          setIsEnd(swiper.isEnd);
          setIsBeginning(swiper.isBeginning);
          swiper.update();
        }}
        direction="vertical"
        mousewheel
        pagination={{ clickable: true }}
        loop={false}
        spaceBetween={0}
        speed={650}
        breakpoints={{
          0: {
            allowTouchMove: true,
          },
          992: {
            allowTouchMove: false,
          },
        }}
        onSwiper={setControlledSwiper}
        controller={{ control: controlledSwiper }}
        className="swiper-container-vertical"
      >
        <SwiperSlide role="banner">
          <MainBanner verticalIndex={activeIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-bg-wrapper">
            <div className="first-main-banner-title-wrapper">
              <div className="kalisco-membership-title-wrapper">
                <img src={kaliscoFamilyText} alt="kalisco family text" />
              </div>
              <div className="kalisco-membership-paragraph">
                ?????? ?????? ????????? ?????? ??????????????? ????????? ??????.
              </div>
              <div className="vertical-hr membership-hr" />
              <Link to="/supports" className="kalisco-button">
                ?????? ????????????
              </Link>
            </div>
          </div>
          <div className="wh-100">
            <img src={hrImage} alt="hr Banner" className="img-fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-bg-wrapper">
            <div className="first-main-banner-title-wrapper">
              {/* <div className="product-intro-title">????????????</div> */}
              <div className="product-intro-title">
                <img src={productText} alt="product text" />
              </div>
              <div className="product-intro-paragraph">
                ?????????????????? ?????? ??? ??? ?????????-
              </div>
              <div className="vertical-hr membership-hr" />
              {/* TODO: Link to React Route Link */}
              <Link to="/products/homemade" className="kalisco-button">
                ???????????? ?????? ????????????
              </Link>
            </div>
          </div>
          <div className="wh-100">
            <img
              src={productIntroImage}
              alt="product introduction Banner"
              className="img-fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-bg-wrapper">
            <div className="first-main-banner-title-wrapper">
              <div style={{ marginBottom: "48px" }}>
                <img src={joinUsTextImage} alt="Join Us text logo" />
              </div>
              <div className="product-intro-paragraph">
                ?????? ?????? ???????????? ????????????.
              </div>
              <div className="vertical-hr membership-hr" />
              {/* TODO: Link to React Route Link */}
              <Link to="/hr/talent" className="kalisco-button">
                ?????? / ????????????
              </Link>
            </div>
          </div>
          <div className="wh-100">
            <img src={joinUsImage} alt="Join Us banner" className="img-fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-bg-wrapper">
            <div className="first-main-banner-title-wrapper">
              <div style={{ marginBottom: "46px" }}>
                <img src={beyondTasteText} alt="Beyond taste text" />
              </div>
              <div className="product-intro-paragraph">
                20?????? ????????? ?????? ????????? ?????? ?????? ????????? ?????????
              </div>
            </div>
          </div>
          <div className="wh-100">
            <img
              src={beyondTasteApronImage}
              alt="Beyond taste banner"
              className="img-fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-footer-wrapper">
            <div className="main-footer-info-wrapper">
              <div className="container">
                <div className="row">
                  <SupportCircle />
                  <NoticeCircle />
                  <EventCircle />
                  <RecruitCircle />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </SwiperSlide>
      </Swiper>
      {!isEnd && (
        <div className="scroll-guide animate__animated animate__fadeIn">
          <div className="scroll-guide-text">
            ????????? ???????????? ?????? ????????? ??? ??? ????????????
          </div>
          <div>
            <img src={mouseScrollIcon} alt="mouse scroll icon" />
          </div>
        </div>
      )}
      <Fab
        isFirst={isBeginning}
        clickEvent={() => {
          setActiveIndex(0);
          controlledSwiper.activeIndex = 0;
          controlledSwiper.update();
          setIsEnd(controlledSwiper.isEnd);
          setIsBeginning(controlledSwiper.isBeginning);
        }}
      />
    </>
  );
}

export default MainVerticalList;
