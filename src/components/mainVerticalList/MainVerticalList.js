import React, { useState, useEffect } from "react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import introFirst from "../../static/images/intro-1.png";
import introSecond from "../../static/images/intro-2.png";
import introThrid from "../../static/images/intro-3.png";
import hrImage from "../../static/images/hr.png";
import brandImage from "../../static/images/brand.png";
import sabotonLogo from "../../static/svg/logo-saboten.svg";
import hibarinLogo from "../../static/svg/logo-hibarin.svg";
import tacobellLogo from "../../static/svg/logo-tacobell.svg";
import centralkcLogo from "../../static/svg/logo-centralkc.svg";
import banjooLogo from "../../static/images/logo-banjoo.png";
import productIntroImage from "../../static/images/product-intro.png";
import kaliscoFamilyText from "../../static/images/kalisco-family-text.png";
import joinUsImage from "../../static/images/joinus.png";
import joinUsTextImage from "../../static/images/join-us-text.png";
import beyondTasteApronImage from "../../static/images/beyond-taste-apron.png";
import beyondTasteText from "../../static/images/beyond-taste.png";
import MainBusinessIntro from "../mainBusinessIntro/MainBusinessIntro";
import MainBanner from "../mainBanner/MainBanner";
import SupportCircle from "../mainFooterCircle/SupportCircle";
import NoticeCircle from "../mainFooterCircle/NoticeCircle";
import EventCircle from "../mainFooterCircle/EventCircle";
import RecruitCircle from "../mainFooterCircle/RecruitCircle";
import Footer from "../Footer";
import { Link, useLocation } from "react-router-dom";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "./main_vertical_list.scss";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function MainVerticalList() {
    SwiperCore.use([Mousewheel, Pagination]);
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

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
        }
    }, [controlledSwiper, queryActiveIndex]);

    return (
        <>
            <Swiper
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
                {/* <SwiperSlide>
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
                </SwiperSlide> */}
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
                            <a href="" className="kalisco-button">
                                캘리스코 멤버십 신청하기
                            </a>
                        </div>
                    </div>
                    <div className="wh-100">
                        <img
                            src={hrImage}
                            alt="hr Banner"
                            className="img-fill"
                        />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="main-bg-wrapper">
                        <div className="brand-list-wrapper">
                            <Link
                                className="d-inline-block brand-circle-wrapper saboten"
                                to="/brand/saboten"
                            >
                                <div className="brand-logo-wrapper">
                                    <img src={sabotonLogo} alt="saboten logo" />
                                </div>
                                <div className="brand-title">사보텐</div>
                            </Link>
                            <Link
                                className="d-inline-block brand-circle-wrapper hibarin"
                                to="/brand/hibarin"
                            >
                                <div className="brand-logo-wrapper">
                                    <img src={hibarinLogo} alt="hibarin logo" />
                                </div>
                                <div className="brand-title">히바린</div>
                            </Link>
                            <div className="brand-circle-wrapper tacobell">
                                <div className="brand-logo-wrapper">
                                    <img
                                        src={tacobellLogo}
                                        alt="taco bell logo"
                                    />
                                </div>
                                <div className="brand-title">타코벨</div>
                            </div>
                            <div className="brand-circle-wrapper centralkc">
                                <div className="brand-logo-wrapper">
                                    <img
                                        src={centralkcLogo}
                                        alt="central kitchen logo"
                                    />
                                </div>
                                <div className="brand-title">센트럴키친</div>
                            </div>
                            <div className="brand-circle-wrapper banjoo">
                                <div className="brand-logo-wrapper">
                                    <img src={banjooLogo} alt="banjoo logo" />
                                </div>
                                <div className="brand-title">반주</div>
                            </div>
                        </div>
                    </div>
                    <div className="wh-100">
                        <img
                            src={brandImage}
                            alt="brand bg"
                            className="img-fill"
                        />
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <div className="main-bg-wrapper">
                        <div className="first-main-banner-title-wrapper">
                            <div className="product-intro-title">제품소개</div>
                            <div className="product-intro-paragraph">
                                레스토랑에서 먹던 그 맛 그대로-
                            </div>
                            <div className="vertical-hr membership-hr" />
                            {/* TODO: Link to React Route Link */}
                            <a href="" className="kalisco-button">
                                홈메이드 제품 보러가기
                            </a>
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
                                <img
                                    src={joinUsTextImage}
                                    alt="Join Us text logo"
                                />
                            </div>
                            <div className="product-intro-paragraph">
                                맛을 아는 사람들은 모이세요.
                            </div>
                            <div className="vertical-hr membership-hr" />
                            {/* TODO: Link to React Route Link */}
                            <a href="" className="kalisco-button">
                                교육 / 복지 바로가기
                            </a>
                        </div>
                    </div>
                    <div className="wh-100">
                        <img
                            src={joinUsImage}
                            alt="Join Us banner"
                            className="img-fill"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-bg-wrapper">
                        <div className="first-main-banner-title-wrapper">
                            <div style={{ marginBottom: "46px" }}>
                                <img
                                    src={beyondTasteText}
                                    alt="Beyond taste text"
                                />
                            </div>
                            <div className="product-intro-paragraph">
                                20년간 최고의 맛을 지켜온 외식 전문 기업의
                                자부심
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
                {/* TODO: Scroll navigator 추가해야 됨 */}
            </Swiper>
        </>
    );
}

export default MainVerticalList;
