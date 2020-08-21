import React from "react";
import firstBanner from "../../static/images/main-banner-1.png";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";

// TODO: Swiper 추가해야 함
function MainBanner() {
    SwiperCore.use([Autoplay, EffectFade]);

    return (
        <Swiper
            loop={false}
            spaceBetween={0}
            speed={650}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                stopOnLastSlide: true,
            }}
            allowTouchMove={false}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
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
        </Swiper>
    );
}

export default MainBanner;
