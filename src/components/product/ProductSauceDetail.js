import React from "react";
import ProductDetailNavigator from "./ProductDetailNavigator";
import styles from "./product.module.scss";
import { useParams, Redirect } from "react-router-dom";
import SauceNavigator from "./SauceNavigator";
import imgCurry1 from "../../static/images/img-p-sauce-curry-1.png";
import imgCurry2 from "../../static/images/img-p-sauce-curry-2.png";

function ProductSauceDetail({ content }) {
    const { sauce } = useParams();

    switch (sauce) {
        case "spicy-creem":
        case "green-onion":
            window.alert("레시피 준비중 입니다!");
            return <Redirect to="/products/homemade/sauce" />;
        default:
            return (
                <>
                    <section className={styles.sauceDetailFristSection}>
                        <ProductDetailNavigator content={content} />
                        <SauceNavigator sauce={sauce} />
                        <div className="row">
                            <div className="col">
                                <img
                                    src={imgCurry1}
                                    alt="product example"
                                    className="img-fill"
                                />
                            </div>
                            <div
                                className={`col ${styles.sauceDetailTextWrapper}`}
                            >
                                {/* TODO: 컴포넌트화 해야 함 */}
                                <div className={styles.sauceDetailSpaceWrapper}>
                                    <div
                                        className={
                                            styles.sauceDetailTextTitleWrapper
                                        }
                                    >
                                        <div
                                            className={
                                                styles.sauceDetailTextTitle
                                            }
                                        >
                                            커리소스
                                        </div>
                                        <div></div>
                                    </div>
                                    <div
                                        className={
                                            styles.sauceDetailTextSubTitle
                                        }
                                    >
                                        설명
                                    </div>
                                    <div
                                        className={
                                            styles.sauceDetailTextDescription
                                        }
                                    >
                                        일본 전통 방식으로 깊은 맛 가득
                                        <br />
                                        위생적 품질관리 하에 만든 Chef made 제품
                                        <br />
                                        100% 완조리
                                        <br />
                                        3일 숙성된 커리 소스
                                        <br />
                                        9% 발표 강황 함유
                                    </div>
                                    <div
                                        className={
                                            styles.sauceDetailTextSubTitle
                                        }
                                    >
                                        재료
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className={`col ${styles.sauceDetailTextWrapper}`}
                            >
                                <div className={styles.sauceDetailSpaceWrapper}>
                                    <div
                                        className={`${styles.sauceDetailTextTitleWrapper} ${styles.sauceDetailTextTitleWrapperReverse}`}
                                    >
                                        <div
                                            className={
                                                styles.sauceDetailTextTitle
                                            }
                                        >
                                            어울리는 음식
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <img
                                    src={imgCurry2}
                                    alt="product example"
                                    className="img-fill"
                                />
                            </div>
                        </div>
                    </section>
                </>
            );
    }
}

export default ProductSauceDetail;
