import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./banner.module.scss";
import sabotenBannerImage from "../../static/images/img-saboten-mainback.png";
import sabotenLogo from "../../static/svg/logo-saboten-landing.svg";
import bannerTitleImage from "../../static/images/text-brand-saboten.png";
import { Link } from "react-router-dom";

function SabotenLanding() {
    SwiperCore.use([Pagination]);
    return (
        <>
            <Swiper>
                <SwiperSlide>
                    <Link className="d-block" to="/brand/hibarin/story">
                        <div className={styles.bannerWrapper}>
                            <div className={styles.bannerTitleWrapper}>
                                <div>
                                    <img src={sabotenLogo} alt="saboten logo" />
                                </div>
                                <div
                                    className={`${styles.bannerTitle} ${styles.sabotenTitle}`}
                                >
                                    <img
                                        src={bannerTitleImage}
                                        alt="banner title"
                                    />
                                </div>
                                <div className={styles.sabotenDescription}>
                                    변하지 않는 카츠의 기준
                                </div>
                            </div>
                            <div>
                                <img
                                    src={sabotenBannerImage}
                                    alt="saboten Banner"
                                    className="img-fill"
                                />
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SabotenLanding;
