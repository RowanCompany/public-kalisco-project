import React from "react";
import styles from "./about_content.module.scss";
import historyLogo from "../../static/images/History.png";
import history1 from "../../static/images/img-history1.png";
import history2 from "../../static/images/img-history2.png";
import history3 from "../../static/images/img-history3.png";
import history4 from "../../static/images/img-history4.png";
import history5 from "../../static/images/img-history5.png";
import history6 from "../../static/images/img-history6.png";
import history7 from "../../static/images/img-history7.png";
import history8 from "../../static/images/img-history8.png";
import history9 from "../../static/images/img-history9.png";
import history10 from "../../static/images/img-history10.png";
import history11 from "../../static/images/img-history11.png";
import history12 from "../../static/images/img-history12.png";
import history13 from "../../static/images/img-history13.png";
import history14 from "../../static/images/img-history14.png";
import Footer from "../Footer";

function AboutHistory() {
    return (
        <>
            <section className={styles.historyWrapper}>
                <div className={styles.historyLogoWrapper}>
                    <img src={historyLogo} alt="History Logo" />
                </div>
                <div className="container">
                    <div className={styles.timeline}>
                        <ul style={{ padding: "0", margin: "0" }}>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "30px" }}>
                                        <img
                                            src={history1}
                                            alt="first history"
                                        />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        전통 돈카츠 전문점 "사보텐" 시작
                                    </div>
                                    <div className={styles.contentDate}>
                                        2001
                                    </div>
                                    <div className={styles.contentParagraph}>
                                        사보텐 1호점 무교점 오픈
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2001</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "69px" }}>
                                        <img
                                            src={history2}
                                            alt="second history"
                                        />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        ㈜캘리스코 독립 법인 설립
                                    </div>
                                    <div className={styles.contentDate}>
                                        2009
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2009</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "30px" }}>
                                        <img
                                            src={history3}
                                            alt="third history"
                                        />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        고용 창출 우수기업 대통령상 수상
                                    </div>
                                    <div className={styles.contentDate}>
                                        2012
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2012</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "30px" }}>
                                        <img src={history4} alt="4th history" />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        남녀 고용평등 우수기업 고용노동부 장관상
                                        수상
                                    </div>
                                    <div className={styles.contentDate}>
                                        2014
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2014</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "30px" }}>
                                        <img src={history5} alt="5th history" />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        글로벌 멕시칸 푸드 브랜드 “타코벨” 시작
                                    </div>
                                    <div className={styles.contentDate}>
                                        2014
                                    </div>
                                    <div className={styles.contentParagraph}>
                                        타코벨 1호점 경방타임스퀘어점 오픈
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2014</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "30px" }}>
                                        <img src={history6} alt="6th history" />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        Modern Korean dining 브랜드 “반주” 시작
                                    </div>
                                    <div className={styles.contentDate}>
                                        2014
                                    </div>
                                    <div className={styles.contentParagraph}>
                                        반주 인천공항 T1점 오픈
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2014</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "30px" }}>
                                        <img src={history7} alt="7th history" />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        Katsu&amp;Rounge “히바린” 시작
                                    </div>
                                    <div className={styles.contentDate}>
                                        2016
                                    </div>
                                    <div className={styles.contentParagraph}>
                                        히바린 1호점 신세계강남점 오픈
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2016</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "30px" }}>
                                        <img src={history8} alt="8th history" />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        사보텐 브랜드 리뉴얼
                                    </div>
                                    <div className={styles.contentDate}>
                                        2016
                                    </div>
                                    <div className={styles.contentParagraph}>
                                        Modern &amp; Contemporary 컨셉 적용하며
                                        <br />
                                        사보텐 브랜드를 현대적으로 재해석
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2016</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "30px" }}>
                                        <img src={history9} alt="9th history" />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        사보텐 Easy to cook(간편식) 제품 런칭
                                    </div>
                                    <div className={styles.contentDate}>
                                        2018
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2018</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "30px" }}>
                                        <img
                                            src={history10}
                                            alt="10th history"
                                        />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        사보텐 정통 컨셉스토어
                                    </div>
                                    <div className={styles.contentDate}>
                                        2018
                                    </div>
                                    <div className={styles.contentParagraph}>
                                        스타필드고양점 오픈
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2018</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "30px" }}>
                                        <img
                                            src={history11}
                                            alt="11th history"
                                        />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        HMR 제품 온라인 유통 판매 강화
                                    </div>
                                    <div className={styles.contentDate}>
                                        2019
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2019</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "30px" }}>
                                        <img
                                            src={history12}
                                            alt="12th history"
                                        />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        “사보텐” 브랜드 20주년
                                    </div>
                                    <div className={styles.contentDate}>
                                        2020
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2020</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "30px" }}>
                                        <img
                                            src={history13}
                                            alt="13th history"
                                        />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        맛을 아는 사람들 캘리스코가 만든
                                        <br />
                                        신개념 Dinning Cafe 더 센트럴 키친
                                    </div>
                                    <div className={styles.contentDate}>
                                        2020
                                    </div>
                                    <div className={styles.contentParagraph}>
                                        더 센트럴키친 바이 캘리스코 1호점
                                        고속터미널점 오픈
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2020</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <div style={{ paddingBottom: "30px" }}>
                                        <img
                                            src={history14}
                                            alt="14th history"
                                        />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        신세계푸드와 식자재 공급 및 제품 개발
                                        협약식
                                    </div>
                                    <div className={styles.contentDate}>
                                        2020
                                    </div>
                                </div>
                                <div className={styles.point}></div>
                                <div className={styles.date}>
                                    <div className={styles.dateText}>2020</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default AboutHistory;
