import React, { useEffect, useState, useRef } from "react";
import firstBanner from "../../static/images/main-banner-1.png";
import bannerIdentityImage from "../../static/images/banner-identity.png";
import SwiperCore, { Autoplay, EffectFade, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import mainBannerTitleText from "../../static/images/main-banner-2-title-text.png";
import trustText from "../../static/images/trust.png";
import sincerityText from "../../static/images/sincerity.png";
import connectivityText from "../../static/images/connectivity.png";
import beyondTasteText from "../../static/images/beyond-taste.png";
import identityFirstImage from "../../static/images/identity-1.png";
import wholesomenessText from "../../static/images/wholesomeness-text.png";
import identitySecondImage from "../../static/images/identity-2.png";
import sincerenessText from "../../static/images/sincereness-text.png";
import identityThirdImage from "../../static/images/identity-3.png";
import togethernessText from "../../static/images/togetherness-text.png";

import styles from "./main_banner.module.scss";
import { CSSTransition } from "react-transition-group";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "animate.css";

function MainBanner(props) {
    SwiperCore.use([Autoplay, EffectFade, Controller]);
    const verticalIndex = props.verticalIndex;
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const wholesomenessRef = useRef(null);
    const [wholesomenessState, setWholesomenessState] = useState(false);
    const sincerenessRef = useRef(null);
    const [sincerenessState, setSincerenessState] = useState(false);
    const togethernewssRef = useRef(null);
    const [togethernewssState, setTogethernewssState] = useState(false);

    useEffect(() => {
        if (verticalIndex > 0) {
            controlledSwiper.activeIndex = 0;
            if (controlledSwiper !== null) {
                controlledSwiper.autoplay.pause();
            }
        } else {
            if (controlledSwiper !== null) {
                controlledSwiper.autoplay.run();
            }
        }
    }, [verticalIndex, controlledSwiper]);

    return (
        <Swiper
            loop={false}
            spaceBetween={0}
            speed={1250}
            autoplay={{
                delay: 2250,
                disableOnInteraction: false,
                stopOnLastSlide: true,
            }}
            allowTouchMove={false}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            onSwiper={setControlledSwiper}
            controller={{ control: controlledSwiper }}
        >
            <SwiperSlide>
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
                    <div className="first-main-banner-title-wrapper">
                        <img
                            src={mainBannerTitleText}
                            alt="main banner 2 title text"
                        />
                        <p className={styles.subBannerParagraph}>
                            좋은 음식은 건강하고 행복한 일상의 맛과 멋을
                            향유하기 위한 원칙
                        </p>
                        <div className="vertical-hr membership-hr" />
                        <div className={styles.subBannerHoverList}>
                            <div
                                className={styles.subBannerHoverElement}
                                onMouseEnter={() => setWholesomenessState(true)}
                                onMouseLeave={() =>
                                    setWholesomenessState(false)
                                }
                            >
                                <div>
                                    <div
                                        style={{
                                            textAlign: "center",
                                        }}
                                    >
                                        <img src={trustText} alt="Trust" />
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <img
                                            src={beyondTasteText}
                                            alt="beyond taste"
                                        />
                                    </div>
                                </div>
                                <CSSTransition
                                    in={wholesomenessState}
                                    timeout={1000}
                                    nodeRef={wholesomenessRef}
                                    //appear={true}
                                    unmountOnExit={true}
                                    classNames={{
                                        enter:
                                            "animate__animated animate__fadeInUp",
                                        exit:
                                            "animate__animated animate__fadeOutDown",
                                    }}
                                >
                                    <div
                                        className={styles.subBannerHoverCard}
                                        ref={wholesomenessRef}
                                    >
                                        <div
                                            className={styles.cardImageWrapper}
                                        >
                                            <div
                                                className={
                                                    styles.cardBackgroundWrapper
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.cardTextWrapper
                                                    }
                                                >
                                                    <div>
                                                        <img
                                                            src={
                                                                wholesomenessText
                                                            }
                                                            alt="wholesomeness"
                                                        />
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.cardTextTitle
                                                        }
                                                    >
                                                        건강한 고집
                                                    </div>
                                                    <div className="vertical-hr sub-banner-hr" />
                                                    <div
                                                        className={
                                                            styles.cardTextSubTitle
                                                        }
                                                    >
                                                        맛을 아는 사람들
                                                        캘리스코는
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.cardTextParagraph
                                                        }
                                                    >
                                                        오랜시간 연구해온 고유의
                                                        레시피를 바탕으로
                                                        <br />
                                                        행복한 시간을 위해
                                                        오랜시간 레시피를
                                                        연구합니다.
                                                    </div>
                                                </div>
                                            </div>
                                            <img
                                                src={identityFirstImage}
                                                alt="identity first"
                                                className="w-100"
                                                style={{
                                                    verticalAlign: "bottom",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                            <div className={styles.subBannerDot} />
                            <div
                                className={styles.subBannerHoverElement}
                                onMouseEnter={() => setSincerenessState(true)}
                                onMouseLeave={() => setSincerenessState(false)}
                            >
                                <div>
                                    <div
                                        style={{
                                            textAlign: "center",
                                        }}
                                    >
                                        <img src={sincerityText} alt="Trust" />
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <img
                                            src={beyondTasteText}
                                            alt="beyond taste"
                                        />
                                    </div>
                                </div>
                                <CSSTransition
                                    in={sincerenessState}
                                    timeout={1000}
                                    nodeRef={sincerenessRef}
                                    appear={true}
                                    unmountOnExit={true}
                                    classNames={{
                                        enter:
                                            "animate__animated animate__fadeInUp",
                                        exit:
                                            "animate__animated animate__fadeOutDown",
                                    }}
                                >
                                    <div
                                        className={styles.subBannerHoverCard}
                                        ref={sincerenessRef}
                                    >
                                        <div
                                            className={styles.cardImageWrapper}
                                        >
                                            <div
                                                className={
                                                    styles.cardBackgroundWrapper
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.cardTextWrapper
                                                    }
                                                >
                                                    <div>
                                                        <img
                                                            src={
                                                                sincerenessText
                                                            }
                                                            alt="Sincereness"
                                                        />
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.cardTextTitle
                                                        }
                                                    >
                                                        일상의 미학
                                                    </div>
                                                    <div className="vertical-hr sub-banner-hr" />
                                                    <div
                                                        className={
                                                            styles.cardTextSubTitle
                                                        }
                                                    >
                                                        맛을 아는 당신을 위해
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.cardTextParagraph
                                                        }
                                                    >
                                                        좋은 재료와 맛있는
                                                        음식에 대한
                                                        <br />
                                                        건강한 고집을 지키며
                                                        <br />
                                                        소중한 사람들과 교감하는
                                                        일상의 풍미를
                                                        선사합니다.
                                                    </div>
                                                </div>
                                            </div>
                                            <img
                                                src={identitySecondImage}
                                                alt="identity second"
                                                className="w-100"
                                                style={{
                                                    verticalAlign: "bottom",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                            <div className={styles.subBannerDot} />
                            <div
                                className={styles.subBannerHoverElement}
                                onMouseEnter={() => setTogethernewssState(true)}
                                onMouseLeave={() =>
                                    setTogethernewssState(false)
                                }
                            >
                                <div>
                                    <div
                                        style={{
                                            textAlign: "center",
                                        }}
                                    >
                                        <img
                                            src={connectivityText}
                                            alt="Trust"
                                        />
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <img
                                            src={beyondTasteText}
                                            alt="beyond taste"
                                        />
                                    </div>
                                </div>
                                <CSSTransition
                                    in={togethernewssState}
                                    timeout={1000}
                                    nodeRef={togethernewssRef}
                                    appear={true}
                                    unmountOnExit={true}
                                    classNames={{
                                        enter:
                                            "animate__animated animate__fadeInUp",
                                        exit:
                                            "animate__animated animate__fadeOutDown",
                                    }}
                                >
                                    <div
                                        className={styles.subBannerHoverCard}
                                        ref={togethernewssRef}
                                    >
                                        <div
                                            className={styles.cardImageWrapper}
                                        >
                                            <div
                                                className={
                                                    styles.cardBackgroundWrapper
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.cardTextWrapper
                                                    }
                                                >
                                                    <div>
                                                        <img
                                                            src={
                                                                togethernessText
                                                            }
                                                            alt="Togetherness"
                                                        />
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.cardTextTitle
                                                        }
                                                    >
                                                        행복한 식탁
                                                    </div>
                                                    <div className="vertical-hr sub-banner-hr" />
                                                    <div
                                                        className={
                                                            styles.cardTextSubTitle
                                                        }
                                                    >
                                                        맛을 아는 당신에게
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.cardTextParagraph
                                                        }
                                                    >
                                                        식사를 통한 즐거움과
                                                        정을 나누는
                                                        <br />
                                                        시공간을 제공합니다.
                                                    </div>
                                                </div>
                                            </div>
                                            <img
                                                src={identityThirdImage}
                                                alt="identity third"
                                                className="w-100"
                                                style={{
                                                    verticalAlign: "bottom",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wh-100">
                    <img
                        src={bannerIdentityImage}
                        alt="identity Banner"
                        className="img-fill"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default MainBanner;
