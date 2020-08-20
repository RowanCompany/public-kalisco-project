import React from "react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import firstBanner from "../../static/images/main-banner-1.png";
import introFirst from "../../static/images/intro-1.png";
import introSecond from "../../static/images/intro-2.png";
import introThrid from "../../static/images/intro-3.png";
import hrImage from "../../static/images/hr.png";
import brandImage from "../../static/images/brand.png";
import sabotonLogo from "../../static/svg/logo-saboten.svg";
import hibarinLogo from "../../static/svg/logo-hibarin.svg";
import kaliscoFamilyText from "../../static/images/kalisco-family-text.png";
import MainBusinessIntro from "../mainBusinessIntro/MainBusinessIntro";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "./main_vertical_list.scss";

function MainVerticalList() {
    SwiperCore.use([Mousewheel, Pagination]);

    return (
        <Swiper
            slidesPerView={1}
            //onSlideChange={setActiveIndex}
            //onSwiper={(swiper) => console.log(swiper)}
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
        >
            <SwiperSlide role="banner">
                <div className="main-bg-wrapper">
                    <div className="first-main-banner-title-wrapper">
                        <h1 className="first-main-banner-title">
                            맛을 아는 사람들 캘리스코
                        </h1>
                        <p className="first-main-banner-sub-title">
                            우리는 맛을 압니다.
                        </p>
                    </div>
                </div>
                <div className="wh-100">
                    <img
                        src={firstBanner}
                        alt="First Banner"
                        className="img-fill"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-bg-wrapper">
                    <MainBusinessIntro />
                </div>
                <div className="main-business-intro-img-wrapper">
                    <div>
                        <div className="wh-100">
                            <img
                                src={introFirst}
                                alt="First intro"
                                className="img-fill"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="wh-100">
                            <img
                                src={introSecond}
                                alt="Second intro"
                                className="img-fill"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="wh-100">
                            <img
                                src={introThrid}
                                alt="Thrid intro"
                                className="img-fill"
                            />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-bg-wrapper">
                    <div className="first-main-banner-title-wrapper">
                        <div className="kalisco-membership-title-wrapper">
                            <img
                                src={kaliscoFamilyText}
                                alt="kalisco family text"
                            />
                        </div>
                        <div className="kalisco-membership-paragraph">
                            맛을 아는 당신을 위해 캘리스코가 준비한 선물.
                        </div>
                        <div className="vertical-hr membership-hr" />
                        {/* TODO: Link to React Route Link */}
                        <a href="#" className="kalisco-button">
                            캘리스코 멤버십 신청하기
                        </a>
                    </div>
                </div>
                <div className="wh-100">
                    <img src={hrImage} alt="hr Banner" className="img-fill" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-bg-wrapper">
                    <div className="brand-list-wrapper">
                        <div className="brand-circle-wrapper">
                            <div className="brand-logo-wrapper">
                                <img src={sabotonLogo} alt="saboten logo" />
                            </div>
                            <div className="brand-title">사보텐</div>
                        </div>
                        <div className="brand-circle-wrapper">
                            <div className="brand-logo-wrapper">
                                <img src={hibarinLogo} alt="hibarin logo" />
                            </div>
                            <div className="brand-title">히바린</div>
                        </div>
                    </div>
                </div>
                <div className="wh-100">
                    <img src={brandImage} alt="brand bg" className="img-fill" />
                </div>
            </SwiperSlide>
            {/* TODO: Scroll navigator 추가해야 됨 */}
        </Swiper>
    );
}

export default MainVerticalList;
