import React, { useState } from "react";
import styles from "./mobile_saboten.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import sabotenImage1 from "../../../../static/images/img-saboten-event-1.jpg";
import sabotenImage2 from "../../../../static/images/img-saboten-event-2.jpg";
import sabotenImage3 from "../../../../static/images/img-saboten-event-3.jpg";
import sabotenImage4 from "../../../../static/images/img-saboten-event-4.jpg";
import katsuImage from "../../../../static/images/img-saboten-menu2-1.jpg";
import donburiImage from "../../../../static/images/img-saboten-menu2-2.jpg";
import noodleImage from "../../../../static/images/img-saboten-menu2-3.jpg";
import sideImage from "../../../../static/images/img-saboten-menu2-4.jpg";
import { Link } from "react-router-dom";

export default function SabotenMenu() {
  const [menu, setMenu] = useState("katsu");
  const menuData = {
    katsu: {
      sectionStyle: styles.menuActive,
      image: katsuImage,
    },
    donburi: {
      sectionStyle: styles.menuActive,
      image: donburiImage,
    },
    noodle: {
      sectionStyle: styles.menuActive,
      image: noodleImage,
    },
    side: {
      sectionStyle: styles.menuActive,
      image: sideImage,
    },
  };

  return (
    <>
      <section className={styles.sabotenMenuSection}>
        <div className={styles.menuTitle}>Instagram</div>
        <div style={{ padding: "0 20px" }}>
          <Swiper
            className={styles.menuSwiper}
            slidesPerView={1.5}
            spaceBetween={10}
            loop={true}
            style={{ height: "auto" }}
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
          </Swiper>
        </div>
        <div className={styles.menuTitle} style={{ paddingTop: "40px" }}>
          Ordinary Menu
        </div>
        <div className={`${styles.menuTextListWrapper}`}>
          <div
            className={`${styles.menuText} ${
              menu === "katsu" ? menuData[menu]["sectionStyle"] : ""
            }`}
            onClick={() => setMenu("katsu")}
          >
            Katsu
          </div>
          <div
            className={`${styles.menuText} ${
              menu === "donburi" ? menuData[menu]["sectionStyle"] : ""
            }`}
            onClick={() => setMenu("donburi")}
          >
            Donburi
          </div>
          <div
            className={`${styles.menuText} ${
              menu === "noodle" ? menuData[menu]["sectionStyle"] : ""
            }`}
            onClick={() => setMenu("noodle")}
          >
            Noodle
          </div>
          <div
            className={`${styles.menuText} ${
              menu === "side" ? menuData[menu]["sectionStyle"] : ""
            }`}
            onClick={() => setMenu("side")}
          >
            Side
          </div>
        </div>
        <Link to={`/brand/saboten/menu/${menu}`}>
          <div className={styles.menuImageWrapper}>
            <img
              src={menuData[menu]["image"]}
              className="img-fill"
              alt="menu"
            />
          </div>
        </Link>
      </section>
    </>
  );
}
