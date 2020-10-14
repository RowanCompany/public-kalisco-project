import React, { useState } from "react";
import styles from "./hibarin.module.scss";
import textMenuImage from "../../static/images/text-hibarin-menu.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
// import menu1 from "../../static/images/img-p-hibarin-menu1.png";
// import menu2 from "../../static/images/img-p-hibarin-menu2.png";
// import menu3 from "../../static/images/img-p-hibarin-menu3.png";
// import menu4 from "../../static/images/img-p-hibarin-menu4.png";
// import menu5 from "../../static/images/img-p-hibarin-menu5.png";
// import menu6 from "../../static/images/img-p-hibarin-menu6.png";
import menu1 from "../../static/images/img-hibarin-event-1.jpg";
import menu2 from "../../static/images/img-hibarin-event-2.jpg";
import menu3 from "../../static/images/img-hibarin-event-3.jpg";
import menu4 from "../../static/images/img-hibarin-event-4.jpg";
import menu5 from "../../static/images/img-hibarin-event-5.jpg";
import hibarinTitleText from "../../static/images/text-hibarin-special.png";
// import katsuImage from "../../static/images/img-ormenu-katsu.png";
// import donburiImage from "../../static/images/img-ormenu-donburi.png";
// import noodleImage from "../../static/images/img-ormenu-noodle.png";
// import sideImage from "../../static/images/img-ormenu-side.png";
import katsuImage from "../../static/images/img-hibarin-special1.jpg";
import donburiImage from "../../static/images/img-hibarin-special3.jpg";
import noodleImage from "../../static/images/img-hibarin-special4.jpg";
import sideImage from "../../static/images/img-hibarin-special2.jpg";

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
    noodles: {
      sectionStyle: styles.noodleSection,
      image: noodleImage,
    },
    side: {
      sectionStyle: styles.sideSection,
      image: sideImage,
    },
  };

  /* <section
        className={`${styles.menuListSection} ${
          menuData[menu] && menuData[menu]["sectionStyle"]
        }`}
      > */
  return (
    <>
      <section className={styles.menuFirstSection}>
        <div className={styles.menuTitleTextWrapper}>
          <img src={textMenuImage} alt="instagram" />
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
              <Link to="/supports/events/6">
                <div className="text-center">
                  <img src={menu1} alt="Menu 1" className="img-fill" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="menu-slide">
              <Link to="/supports/events/7">
                <div className="text-center">
                  <img src={menu2} alt="Menu 2" className="img-fill" />
                </div>
              </Link>
            </SwiperSlide>
            {/*<SwiperSlide className="menu-slide">
                            <Link to="/supports/events/8">
                                <div className="text-center">
                                    <img
                                        src={menu3}
                                        alt="Menu 3"
                                        className="img-fill"
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>*/}
            <SwiperSlide className="menu-slide">
              <Link to="/supports/events/9">
                <div className="text-center">
                  <img src={menu4} alt="Menu 4" className="img-fill" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="menu-slide">
              <Link to="/supports/events/10">
                <div className="text-center">
                  <img src={menu5} alt="Menu 5" className="img-fill" />
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className={styles.menuListSection}>
        <div className={styles.menuListTitleWrapper}>
          <img src={hibarinTitleText} alt="ordinary menu" />
        </div>
        <div className={`row ${styles.menuListGridWrapper}`}>
          {/* <div className="col">
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
                    </div> */}
          <Link
            className="d-block col"
            onMouseEnter={() => setMenu("katsu")}
            to={`/brand/hibarin/${subject}/katsu`}
          >
            <div>
              <img
                src={katsuImage}
                alt="katsu"
                className={`img-fill ${menu === "katsu" ? styles.active : ""}`}
              />
            </div>
          </Link>
          {/* <Link
                        className="d-block col"
                        onMouseEnter={() => setMenu("donburi")}
                        to={`/brand/hibarin/${subject}/donburi`}
                    >
                        <div>
                            <img
                                src={donburiImage}
                                alt="donburi"
                                className={`img-fill ${
                                    menu === "donburi" ? styles.active : ""
                                }`}
                            />
                        </div>
                    </Link> */}
          <Link
            className="d-block col"
            onMouseEnter={() => setMenu("friends")}
            to={`/brand/hibarin/${subject}/friends`}
          >
            <div>
              <img
                src={noodleImage}
                alt="noodle"
                className={`img-fill ${
                  menu === "friends" ? styles.active : ""
                }`}
              />
            </div>
          </Link>
          <Link
            className="d-block col"
            onMouseEnter={() => setMenu("drink")}
            to={`/brand/hibarin/${subject}/drink`}
          >
            <div>
              <img
                src={sideImage}
                alt="side"
                className={`img-fill ${menu === "drink" ? styles.active : ""}`}
              />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default HibarinMenu;
