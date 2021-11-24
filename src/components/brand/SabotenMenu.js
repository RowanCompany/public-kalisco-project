import React, { useState } from "react";
import styles from "./saboten.module.scss";
//import textMenuImage from "../../static/images/text-saboten-menu.png";
import textInstagramImage from "../../static/images/img-instagram-text.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import sabotenImage1 from "../../static/images/img-saboten-event-1.jpg";
import sabotenImage2 from "../../static/images/img-saboten-event-2.jpg";
import sabotenImage3 from "../../static/images/img-saboten-event-3.jpg";
import sabotenImage4 from "../../static/images/img-saboten-event-4.jpg";
//import sabotenImage5 from "../../static/images/img-saboten-event-5.jpg";
import textOrdinaryImage from "../../static/images/text-saboten-ordinary.png";
import katsuImage from "../../static/images/update/카츠1@2x.png"; // import katsuImage from "../../static/images/img-saboten-menu2-1.jpg";
import katsu2Image from "../../static/images/update/카츠2@2x.png";
import riceImage from "../../static/images/update/라이스정식1@2x.png"; //import donburiImage from "../../static/images/img-saboten-menu2-2.jpg";
import noodleImage from "../../static/images/img-saboten-menu2-3.jpg";
import sideImage from "../../static/images/update/side menu@2x.png"; //import sideImage from "../../static/images/img-saboten-menu2-4.jpg";
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
    katsu2: {
      sectionStyle: styles.katsu2Section,
      image: katsu2Image,
    },
    donburi: {
      sectionStyle: styles.donburiSection,
      image: riceImage,
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
          <img src={textInstagramImage} alt="instagram" />
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
              <a
                href="https://www.instagram.com/p/CFbPDrZj63E/?utm_source=ig_web_copy_link"
                rel="noreferrer noopener"
                target="_blank"
              >
                <div className="text-center">
                  <img src={sabotenImage1} alt="Menu 1" className="img-fill" />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="menu-slide">
              <a
                href="https://www.instagram.com/p/CFOYinzjIOk/?utm_source=ig_web_copy_link"
                rel="noreferrer noopener"
                target="_blank"
              >
                <div className="text-center">
                  <img src={sabotenImage2} alt="Menu 1" className="img-fill" />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="menu-slide">
              <a
                href="https://www.instagram.com/p/CE_Ct3YD0ZZ/?utm_source=ig_web_copy_link"
                rel="noreferrer noopener"
                target="_blank"
              >
                <div className="text-center">
                  <img src={sabotenImage3} alt="Menu 1" className="img-fill" />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="menu-slide">
              <a
                href="https://www.instagram.com/p/CE0uVSKBH2F/?utm_source=ig_web_copy_link"
                rel="noreferrer noopener"
                target="_blank"
              >
                <div className="text-center">
                  <img src={sabotenImage4} alt="Menu 1" className="img-fill" />
                </div>
              </a>
            </SwiperSlide>
            {/*<SwiperSlide className="menu-slide">
                            <Link to="/supports/events/5">
                                <div className="text-center">
                                    <img
                                        src={sabotenImage5}
                                        alt="Menu 1"
                                        className="img-fill"
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>*/}
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
                    menu === "katsu" && styles.menuListTitleActive
                  }`}
                >
                  Authentic Katsu Set
                </div>
              </Link>
            </div>
            <div className={styles.MenuListFlexWrapper}>
              <div
                className={`${styles.menuBorderLine} ${styles.katsu2BorderLine}`}
              />
              <Link
                onMouseEnter={() => setMenu("katsu2")}
                className={styles.menuListLinkWrapper}
                to={`/brand/saboten/${subject}/katsu2`}
              >
                <div
                  className={`${styles.menuListTitle} ${
                    menu === "katsu2" && styles.menuListTitleActive
                  }`}
                >
                  Special Katsu Set
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
                    menu === "donburi" && styles.menuListTitleActive
                  }`}
                >
                  Rice Set
                  {/* Donburi */}
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
                    menu === "noodle" && styles.menuListTitleActive
                  }`}
                >
                  Noodle Set
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
                    menu === "side" && styles.menuListTitleActive
                  }`}
                >
                  Side Menu
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
                style={{ maxWidth: "720px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SabotenMenu;
