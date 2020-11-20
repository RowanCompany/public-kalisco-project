import React from "react";
import styles from "./mobile_hibarin.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import menu1 from "../../../../static/images/img-hibarin-event-1.jpg";
import menu2 from "../../../../static/images/img-hibarin-event-2.jpg";
import menu4 from "../../../../static/images/img-hibarin-event-4.jpg";
import menu5 from "../../../../static/images/img-hibarin-event-5.jpg";
import "../../../brand/swiper_menu.scss";
import katsuImage from "../../../../static/images/img-hibarin-special1.jpg";
import noodleImage from "../../../../static/images/img-hibarin-special4.jpg";
import sideImage from "../../../../static/images/img-hibarin-special2.jpg";
import { Link } from "react-router-dom";

export default function HibarinMenu({ subject }) {
  return (
    <>
      <section className={styles.newMenuSection}>
        <div className={styles.newMenuTitle}>Instagram</div>
        <div>
          <Swiper
            className={styles.menuSwiper}
            slidesPerView={1.5}
            spaceBetween={10}
            loop={true}
            style={{ height: "auto" }}
          >
            <SwiperSlide className="menu-slide">
              <a
                href="https://www.instagram.com/p/CFGJMs7lRlb/?utm_source=ig_web_copy_link"
                rel="noreferrer noopener"
                target="_blank"
              >
                <div className="text-center">
                  <img src={menu1} alt="Menu 1" className="img-fill" />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="menu-slide">
              <a
                href="https://www.instagram.com/p/CE8vs1VFjNY/?utm_source=ig_web_copy_link"
                rel="noreferrer noopener"
                target="_blank"
              >
                <div className="text-center">
                  <img src={menu2} alt="Menu 2" className="img-fill" />
                </div>
              </a>
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
              <a
                href="https://www.instagram.com/p/CEVY83XFjjE/?utm_source=ig_web_copy_link"
                rel="noreferrer noopener"
                target="_blank"
              >
                <div className="text-center">
                  <img src={menu4} alt="Menu 4" className="img-fill" />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="menu-slide">
              <a
                href="https://www.instagram.com/p/CED0LQPFsqw/?utm_source=ig_web_copy_link"
                rel="noreferrer noopener"
                target="_blank"
              >
                <div className="text-center">
                  <img src={menu5} alt="Menu 5" className="img-fill" />
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className={styles.specialSection}>
        <div className={styles.specialTitle}>Hibarin Special</div>
        <div className={styles.specialMenuWrapper}>
          <Link to={`/brand/hibarin/${subject}/katsu`}>
            <div>
              <img src={katsuImage} alt="katsu" className="img-fill" />
            </div>
          </Link>
          <Link to={`/brand/hibarin/${subject}/friends`}>
            <div>
              <img src={noodleImage} alt="noodle" className="img-fill" />
            </div>
          </Link>
          <Link to={`/brand/hibarin/${subject}/drink`}>
            <div>
              <img src={sideImage} alt="side" className="img-fill" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
