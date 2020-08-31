import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./banner.module.scss";
import hibarinBannerImage from "../../static/images/img-hibarin-mainback.png";
import hibarinLogo from "../../static/svg/hibarin-logo-header-w.svg";
import bannerTitleImage from "../../static/images/katsu-and-lounge-text.png";

function HibarinBanner() {
    SwiperCore.use([Pagination]);
    return (
        <Swiper>
            <SwiperSlide>
                <div className={styles.bannerWrapper}>
                    <div className={styles.bannerTitleWrapper}>
                        <div>
                            <img src={hibarinLogo} alt="hibarin logo" />
                        </div>
                        <div className={styles.bannerTitle}>
                            <img src={bannerTitleImage} alt="banner title" />
                        </div>
                    </div>
                    <div>
                        <img
                            src={hibarinBannerImage}
                            alt="Hibarin Banner"
                            className="img-fill"
                        />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default HibarinBanner;
