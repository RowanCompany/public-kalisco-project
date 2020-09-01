import React from "react";
import styles from "./product.module.scss";
import productHomemadeMaterialIcon from "../../static/svg/product-homemade-material.svg";
import productHomemadeRecipeIcon from "../../static/svg/product-homemade-recipe.svg";
import productHomemadeOriginalIcon from "../../static/svg/product-homemade-original.svg";
import productHomemadeChoosingIcon from "../../static/svg/product-homemade-choosing.svg";
import productHome1Image from "../../static/images/img-product-home1.png";
import productHome2Image from "../../static/images/img-product-home2.png";
import { Link } from "react-router-dom";

function ProductHomemade() {
    return (
        <>
            <section className={styles.homemadeFirstSection}>
                <div className="container">
                    <div className={styles.homemadeCircleList}>
                        <div
                            className={`${styles.homemadeCircle} ${styles.first}`}
                        >
                            <div>
                                <img
                                    src={productHomemadeMaterialIcon}
                                    alt="homemade material"
                                />
                            </div>
                            <div className={styles.homemadeCircleDescription}>
                                셰프가
                                <br />
                                까다롭게 고른 재료
                            </div>
                        </div>
                        <div
                            className={`${styles.homemadeCircle} ${styles.second}`}
                        >
                            <div>
                                <img
                                    src={productHomemadeRecipeIcon}
                                    alt="homemade recipe"
                                />
                            </div>
                            <div className={styles.homemadeCircleDescription}>
                                셰프가 제안하는
                                <br />
                                레시피
                            </div>
                        </div>
                        <div
                            className={`${styles.homemadeCircle} ${styles.third}`}
                        >
                            <div>
                                <img
                                    src={productHomemadeOriginalIcon}
                                    alt="homemade original"
                                />
                            </div>
                            <div className={styles.homemadeCircleDescription}>
                                매장에서 먹던
                                <br />
                                감동, 그 맛 그대로
                            </div>
                        </div>
                        <div
                            className={`${styles.homemadeCircle} ${styles.fourth}`}
                        >
                            <div>
                                <img
                                    src={productHomemadeChoosingIcon}
                                    alt="homemade choosing"
                                />
                            </div>
                            <div className={styles.homemadeCircleDescription}>
                                맛을 아는 당신이
                                <br />
                                선택하는 제품
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.homemadeSecondSection}>
                <div className="row">
                    <div className={`col ${styles.homemadeTextWrapper}`}>
                        <div className={styles.homemadeDescription}>
                            캘리스코는 유명 돈카츠 브랜드인
                            <br />
                            사보텐의 돈카츠를 가정에서도 간편하게 즐기실 수
                            있도록
                            <br />
                            사보텐만의 노하우와 기술을 담아냈습니다.
                            <div style={{ paddingTop: "70px" }}>
                                <Link
                                    className={styles.homemadeButton}
                                    to="/products/homemade/katsu"
                                >
                                    돈카츠 제품 보러가기
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <img
                            src={productHome1Image}
                            alt="home 1"
                            className="img-fill"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img
                            src={productHome2Image}
                            alt="home 2"
                            className="img-fill"
                        />
                    </div>
                    <div className={`col ${styles.homemadeTextWrapper}`}>
                        <div className={styles.homemadeDescription}>
                            캘리스코는 사보텐 돈카츠 뿐만 아니라
                            <br />
                            사보텐 현지 매장에서 사용하는 소스도 제공하고
                            있습니다.
                            <br />
                            <br />
                            돈카츠와 최상의 조화를 이루는 <b>돈카츠 소스,</b>
                            <br />
                            사보텐 매장에서 샐러드와 곁들여 먹는
                            <b>참깨소스, 유자소스</b>
                            <br />
                            뿐만 아니라 <b>파소스, 커리소스, 매콤 크림소스</b>
                            등
                            <br />
                            고퀄리티의 다양한 소스를 즐겨보세요!
                            <div style={{ paddingTop: "70px" }}>
                                <Link
                                    className={styles.homemadeButton}
                                    to="/products/homemade/sauce"
                                >
                                    소스 제품 보러가기
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductHomemade;
