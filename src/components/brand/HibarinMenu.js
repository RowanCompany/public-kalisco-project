import React, { useState } from "react";
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
import katsuImage from "../../static/images/img-ormenu-katsu.png";
import donburiImage from "../../static/images/img-ormenu-donburi.png";
import noodleImage from "../../static/images/img-ormenu-noodle.png";
import sideImage from "../../static/images/img-ormenu-side.png";

import "swiper/components/navigation/navigation.scss";
import "./swiper_menu.scss";
import { Link } from "react-router-dom";

function HibarinMenu({ subject }) {
    SwiperCore.use([Navigation]);
    const [menu, setMenu] = useState("katsu");
    const menuData = {
        katsu: {
            sectionStyle: styles.katsuSection,
            image: katsuImage,
        },
        donburi: {
            sectionStyle: styles.donburiSection,
            image: donburiImage,
        },
        noodle: {
            sectionStyle: styles.noodleSection,
            image: noodleImage,
        },
        side: {
            sectionStyle: styles.sideSection,
            image: sideImage,
        },
    };

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
                className={`${styles.menuListSection} ${
                    menuData[menu] && menuData[menu]["sectionStyle"]
                }`}
            >
                <div className={styles.menuListTitleWrapper}>
                    <img src={textOrdinaryImage} alt="ordinary menu" />
                </div>
                <div className={`row ${styles.menuListGridWrapper}`}>
                    <div className="col">
                        <div className={styles.MenuListFlexWrapper}>
                            <div
                                className={`${styles.menuBorderLine} ${styles.katsuBorderLine}`}
                            />
                            <Link
                                onMouseEnter={() => setMenu("katsu")}
                                className={styles.menuListLinkWrapper}
                                to={`/brand/hibarin/${subject}/katsu`}
                            >
                                <div
                                    className={`${styles.menuListTitle} ${
                                        menu === "katsu" &&
                                        styles.menuListTitleActive
                                    }`}
                                >
                                    Katsu
                                </div>
                            </Link>
                        </div>
                        <div className={styles.MenuListFlexWrapper}>
                            <div
                                className={`${styles.menuBorderLine} ${styles.donburiBorderLine}`}
                            />
                            <Link
                                onMouseEnter={() => setMenu("donburi")}
                                className={styles.menuListLinkWrapper}
                                to={`/brand/hibarin/${subject}/donburi`}
                            >
                                <div
                                    className={`${styles.menuListTitle} ${
                                        menu === "donburi" &&
                                        styles.menuListTitleActive
                                    }`}
                                >
                                    Donburi
                                </div>
                            </Link>
                        </div>
                        <div className={styles.MenuListFlexWrapper}>
                            <div
                                className={`${styles.menuBorderLine} ${styles.noodleBorderLine}`}
                            />
                            <Link
                                onMouseEnter={() => setMenu("noodle")}
                                className={styles.menuListLinkWrapper}
                                to={`/brand/hibarin/${subject}/noodles`}
                            >
                                <div
                                    className={`${styles.menuListTitle} ${
                                        menu === "noodle" &&
                                        styles.menuListTitleActive
                                    }`}
                                >
                                    Noodles
                                </div>
                            </Link>
                        </div>
                        <div className={styles.MenuListFlexWrapper}>
                            <div
                                className={`${styles.menuBorderLine} ${styles.sideBorderLine}`}
                            />
                            <Link
                                onMouseEnter={() => setMenu("side")}
                                className={styles.menuListLinkWrapper}
                                to={`/brand/hibarin/${subject}/side`}
                            >
                                <div
                                    className={`${styles.menuListTitle} ${
                                        menu === "side" &&
                                        styles.menuListTitleActive
                                    }`}
                                >
                                    Side
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-center">
                            <img
                                src={menuData[menu] && menuData[menu]["image"]}
                                alt="menu"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HibarinMenu;
