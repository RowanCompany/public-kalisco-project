import React, { useState } from "react";
import styles from "./product.module.scss";
import ProductDetailNavigator from "./ProductDetailNavigator";
import sauceImage1 from "../../static/images/img-p-sauce3-1.png";
import sauceSectionTextBG from "../../static/svg/sauce-section-text-bg.svg";
import iconKatsu from "../../static/images/icon-sauce-katsu.png";
import iconCitron from "../../static/images/icon-sauce-citron.png";
import iconSesame from "../../static/images/icon-sauce-sesame.png";
import iconChili from "../../static/svg/chili.svg";
import iconSpringOnion from "../../static/svg/spring-onion.svg";
import iconSteak from "../../static/svg/steak.svg";
import iconSesameSecond from "../../static/svg/sesame.svg";
import iconTangerine from "../../static/svg/tangerine.svg";
import sauceTop51Image from "../../static/images/sauce-top5-1.jpg";
import sauceTop52Image from "../../static/images/sauce-top5-2.jpg";
import sauceTop53Image from "../../static/images/sauce-top5-3.jpg";
import sauceTop54Image from "../../static/images/sauce-top5-4.jpg";
import sauceTop55Image from "../../static/images/sauce-top5-5.jpg";
import curryImage from "../../static/images/img-newari-curry.png";
import { Link } from "react-router-dom";

function ProductSauce({ content }) {
    const [clickedSauce, setClickedSauce] = useState("spicy-cream");
    // TODO: 링크 추가해야 함
    const sauceImageData = {
        "spicy-cream": {
            image: sauceTop51Image,
        },
        "spring-onion": {
            image: sauceTop52Image,
        },
        tonkatsu: {
            image: sauceTop53Image,
        },
        sesame: {
            image: sauceTop54Image,
        },
        citron: {
            image: sauceTop55Image,
        },
    };

    return (
        <>
            <section className={styles.sauceFirstSection}>
                <ProductDetailNavigator content={content} />
                <div className={styles.sauceTitle}>대표 3종 소스</div>
                <div className="row">
                    <div className="col">
                        <img
                            src={sauceImage1}
                            alt="sauce"
                            className="img-fill"
                        />
                    </div>
                    <div className={`col ${styles.sauceListWrapper}`}>
                        <div className={styles.sauceListBackgroundWrapper}>
                            <img
                                src={sauceSectionTextBG}
                                alt="background"
                                className="img-fluid"
                            />
                        </div>
                        <div className={styles.sauceList}>
                            <div className={styles.sauceBox}>
                                <div className={styles.sauceImageWrapper}>
                                    <img
                                        src={iconKatsu}
                                        alt="katsu icon"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className={styles.sauceTitle}>
                                    돈카츠 소스
                                </div>
                                <div className={styles.sauceDescription}>
                                    과일 고유의 단 맛과 레드와인의 풍요로운 조화
                                </div>
                            </div>
                            <div className={styles.sauceBox}>
                                <div className={styles.sauceImageWrapper}>
                                    <img
                                        src={iconCitron}
                                        alt="citron icon"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className={styles.sauceTitle}>
                                    유자 소스
                                </div>
                                <div className={styles.sauceDescription}>
                                    전남고흥 친환경 농법으로 비타민C 가득한
                                    새콤한 맛
                                </div>
                            </div>
                            <div className={styles.sauceBox}>
                                <div className={styles.sauceImageWrapper}>
                                    <img
                                        src={iconSesame}
                                        alt="sesame icon"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className={styles.sauceTitle}>
                                    참깨 소스
                                </div>
                                <div className={styles.sauceDescription}>
                                    영양만점 참깨의 고소함 가득 깊은 풍미
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.sauceSecondSection}>
                <div className={styles.sauceSecondTitle}>대표 5종 소스</div>
                <div className={styles.sauceSecondNavigatorWrapper}>
                    <button
                        type="button"
                        className={`${styles.sauceSecondNavigator} ${
                            clickedSauce === "spicy-cream"
                                ? styles.sauceSecondNavigatorActive
                                : ""
                        }`}
                        onClick={() => setClickedSauce("spicy-cream")}
                    >
                        <img
                            src={iconChili}
                            alt="Chili icon"
                            style={{ paddingRight: "6px" }}
                        />
                        매콤크림소스
                    </button>
                    <button
                        type="button"
                        className={`${styles.sauceSecondNavigator} ${
                            clickedSauce === "spring-onion"
                                ? styles.sauceSecondNavigatorActive
                                : ""
                        }`}
                        onClick={() => setClickedSauce("spring-onion")}
                    >
                        <img
                            src={iconSpringOnion}
                            alt="Spring Onion icon"
                            style={{ paddingRight: "6px" }}
                        />
                        파소스
                    </button>
                    <button
                        type="button"
                        className={`${styles.sauceSecondNavigator} ${
                            clickedSauce === "tonkatsu"
                                ? styles.sauceSecondNavigatorActive
                                : ""
                        }`}
                        onClick={() => setClickedSauce("tonkatsu")}
                    >
                        <img
                            src={iconSteak}
                            alt="Steak icon"
                            style={{ paddingRight: "6px" }}
                        />
                        돈카츠소스
                    </button>
                    <button
                        type="button"
                        className={`${styles.sauceSecondNavigator} ${
                            clickedSauce === "sesame"
                                ? styles.sauceSecondNavigatorActive
                                : ""
                        }`}
                        onClick={() => setClickedSauce("sesame")}
                    >
                        <img
                            src={iconSesameSecond}
                            alt="Sesame icon"
                            style={{ paddingRight: "6px" }}
                        />
                        참깨소스
                    </button>
                    <button
                        type="button"
                        className={`${styles.sauceSecondNavigator} ${
                            clickedSauce === "citron"
                                ? styles.sauceSecondNavigatorActive
                                : ""
                        }`}
                        onClick={() => setClickedSauce("citron")}
                    >
                        <img
                            src={iconTangerine}
                            alt="Tangerine icon"
                            style={{ paddingRight: "6px" }}
                        />
                        유자소스
                    </button>
                </div>
                {/* TODO: 링크 추가해야 함 */}
                <div className="container">
                    <img
                        src={
                            !!sauceImageData[clickedSauce] &&
                            sauceImageData[clickedSauce]["image"]
                        }
                        alt="Sauce"
                        className="img-fluid"
                    />
                </div>
            </section>
            <section className={styles.sauceThirdSection}>
                <div className={styles.sauceThirdImageWrapper}>
                    <img src={curryImage} alt="curry" className="img-fill" />
                </div>
                <div
                    className={`${styles.sourceThirdContentWrapper} container`}
                >
                    <div className={styles.sourceThirdContent}>
                        신제품
                        <br />
                        <br />
                        <b>‘사보텐 커리 소스’</b>
                    </div>
                    <div>
                        <Link className={styles.sourceThirdLink}>
                            커리소스 보러가기 &gt;
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductSauce;
