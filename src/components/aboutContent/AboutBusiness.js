import React from "react";
import introFirst from "../../static/images/intro-1.png";
import introSecond from "../../static/images/intro-2.png";
import introThrid from "../../static/images/intro-3.png";
import MainBusinessIntro from "../mainBusinessIntro/MainBusinessIntro";
import { Swiper, SwiperSlide } from "swiper/react";

function AboutBusiness() {
    return (
        <Swiper>
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
        </Swiper>
    );
}

export default AboutBusiness;
