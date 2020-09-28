import React, { useState } from "react";
import styles from "./saboten.module.scss";
import textMenuImage from "../../static/images/text-saboten-menu.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import sabotenImage1 from "../../static/images/img-saboten-event-1.jpg";
import sabotenImage2 from "../../static/images/img-saboten-event-2.jpg";
import sabotenImage3 from "../../static/images/img-saboten-event-3.jpg";
import sabotenImage4 from "../../static/images/img-saboten-event-4.jpg";
import sabotenImage5 from "../../static/images/img-saboten-event-5.jpg";
import textOrdinaryImage from "../../static/images/text-saboten-ordinary.png";
import katsuImage from "../../static/images/img-saboten-menu-1.png";
import donburiImage from "../../static/images/img-saboten-menu-2.png";
import noodleImage from "../../static/images/img-saboten-menu-3.png";
import sideImage from "../../static/images/img-saboten-menu-4.png";
//import sabotenBackground from "../../static/images/img-p-saboten-background.png";

import { Link } from "react-router-dom";

import "swiper/components/navigation/navigation.scss";
import "./swiper_menu.scss";

function SabotenMenu({ subject }) {
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
                            <Link to="/supports/events/1">
                                <div className="text-center">
                                    <img
                                        src={sabotenImage1}
                                        alt="Menu 1"
                                        className="img-fill"
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="menu-slide">
                            <Link to="/supports/events/2">
                                <div className="text-center">
                                    <img
                                        src={sabotenImage2}
                                        alt="Menu 1"
                                        className="img-fill"
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="menu-slide">
                            <Link to="/supports/events/3">
                                <div className="text-center">
                                    <img
                                        src={sabotenImage3}
                                        alt="Menu 1"
                                        className="img-fill"
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="menu-slide">
                            <Link to="/supports/events/4">
                                <div className="text-center">
                                    <img
                                        src={sabotenImage4}
                                        alt="Menu 1"
                                        className="img-fill"
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="menu-slide">
                            <Link to="/supports/events/5">
                                <div className="text-center">
                                    <img
                                        src={sabotenImage5}
                                        alt="Menu 1"
                                        className="img-fill"
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section
                className={`${styles.menuListSection} ${
                    menuData[menu] && menuData[menu]["sectionStyle"]
                }`}
            >
                <div className={`row ${styles.menuListGridWrapper}`}>
                    <div className="col">
                        <div className={styles.menuListTitleWrapper}>
                            <img src={textOrdinaryImage} alt="ordinary menu" />
                        </div>
                        <div className={styles.MenuListFlexWrapper}>
                            <div
                                className={`${styles.menuBorderLine} ${styles.katsuBorderLine}`}
                            />
                            <Link
                                onMouseEnter={() => setMenu("katsu")}
                                className={styles.menuListLinkWrapper}
                                to={`/brand/saboten/${subject}/katsu`}
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
                                to={`/brand/saboten/${subject}/donburi`}
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
                                to={`/brand/saboten/${subject}/noodles`}
                            >
                                <div
                                    className={`${styles.menuListTitle} ${
                                        menu === "noodle" &&
                                        styles.menuListTitleActive
                                    }`}
                                >
                                    Noodle
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
                                to={`/brand/saboten/${subject}/side`}
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
                    <div className="d-flex">
                        <div className="text-right">
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

export default SabotenMenu;
