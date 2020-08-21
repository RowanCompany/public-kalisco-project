import React, { useEffect, useState } from "react";
import firstBanner from "../../static/images/main-banner-1.png";
import bannerIdentityImage from "../../static/images/banner-identity.png";
import SwiperCore, { Autoplay, EffectFade, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import mainBannerTitleText from "../../static/images/main-banner-2-title-text.png";
import trustText from "../../static/images/trust.png";
import sincerityText from "../../static/images/sincerity.png";
import connectivityText from "../../static/images/connectivity.png";
import beyondTasteText from "../../static/images/beyond-taste.png";
import styles from "./main_banner.module.scss";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";

function MainBanner(props) {
    SwiperCore.use([Autoplay, EffectFade, Controller]);
    const verticalIndex = props.verticalIndex;
    const [controlledSwiper, setControlledSwiper] = useState(null);

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
                            <div className={styles.subBannerDot} />
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
                            <div className={styles.subBannerDot} />
                            <div>
                                <div
                                    style={{
                                        textAlign: "center",
                                    }}
                                >
                                    <img src={connectivityText} alt="Trust" />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <img
                                        src={beyondTasteText}
                                        alt="beyond taste"
                                    />
                                </div>
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
