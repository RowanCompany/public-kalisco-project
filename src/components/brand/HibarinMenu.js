import React, { useState, useEffect } from "react";
import styles from "./hibarin.module.scss";
import textMenuImage from "../../static/images/text-hibarin-menu.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import menu1 from "../../static/images/img-p-hibarin-menu1.png";
import menu2 from "../../static/images/img-p-hibarin-menu2.png";
import menu3 from "../../static/images/img-p-hibarin-menu3.png";
import menu4 from "../../static/images/img-p-hibarin-menu4.png";
import menu5 from "../../static/images/img-p-hibarin-menu5.png";
import menu6 from "../../static/images/img-p-hibarin-menu6.png";
import textOrdinaryImage from "../../static/images/text-hibrain-ordinary.png";

import "swiper/components/navigation/navigation.scss";
import "./swiper_menu.scss";

function HibarinMenu() {
    SwiperCore.use([Navigation]);
    const [menu, setMenu] = useState("katsu");
    const [menuSectionStyle, setMenuSectionStyle] = useState(
        styles.katsuSection
    );
    // TODO: 오브젝트로 바꿔야 함
    useEffect(() => {
        switch (menu) {
            case "side":
                setMenuSectionStyle(styles.sideSection);
                break;
            case "noodle":
                setMenuSectionStyle(styles.noodleSection);
                break;
            case "donburi":
                setMenuSectionStyle(styles.donburiSection);
                break;
            case "katsu":
            default:
                setMenuSectionStyle(styles.katsuSection);
                break;
        }
    }, [menu, menuSectionStyle]);

    return (
        <>
            <section className={styles.menuFirstSection}>
                <div className={styles.menuTitleTextWrapper}>
                    <img src={textMenuImage} alt="new menu" />
                </div>
                <div>
                    <Swiper
                        className={styles.menuSwiper}
                        slidesPerView="auto"
                        spaceBetween={10}
                        loop={true}
                        centeredSlides={true}
                        navigation
                    >
                        <SwiperSlide className="menu-slide">
                            <div className="text-center">
                                <img
                                    src={menu1}
                                    alt="Menu 1"
                                    className="img-fill"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="menu-slide">
                            <div className="text-center">
                                <img
                                    src={menu2}
                                    alt="Menu 2"
                                    className="img-fill"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="menu-slide">
                            <div className="text-center">
                                <img
                                    src={menu3}
                                    alt="Menu 3"
                                    className="img-fill"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="menu-slide">
                            <div className="text-center">
                                <img
                                    src={menu4}
                                    alt="Menu 4"
                                    className="img-fill"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="menu-slide">
                            <div className="text-center">
                                <img
                                    src={menu5}
                                    alt="Menu 5"
                                    className="img-fill"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="menu-slide">
                            <div className="text-center">
                                <img
                                    src={menu6}
                                    alt="Menu 6"
                                    className="img-fill"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section
                className={`${styles.menuListSection} ${menuSectionStyle}`}
            >
                <div className="text-center">
                    <img src={textOrdinaryImage} alt="ordinary menu" />
                </div>
            </section>
        </>
    );
}

export default HibarinMenu;
