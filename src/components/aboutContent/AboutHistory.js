import React from "react";
import styles from "./about_content.module.scss";
import historyLogo from "../../static/images/History.png";
import history1 from "../../static/images/history_img_01.png";
import historyLogo1 from "../../static/svg/history_logo_01.svg";
import history2 from "../../static/images/history_img_02.png";
import historyLogo2 from "../../static/svg/history_logo_02.svg";
import history3 from "../../static/images/history_img_03.png";
import historyLogo3 from "../../static/images/history_logo_03.png";
import historyLogo4 from "../../static/images/history_logo_04.png";
import historyLogo5 from "../../static/svg/history_logo_05.svg";
import historyLogo6 from "../../static/images/history_logo_06.png";
import historyLogo7 from "../../static/svg/history_logo_07.svg";
import historyLogo8 from "../../static/svg/history_logo_08.svg";
import historyLogo9 from "../../static/svg/history_logo_09.svg";
import historyLogo10 from "../../static/svg/history_logo_10.svg";
import historyLogo11 from "../../static/images/history_logo_11.png";
import history4 from "../../static/images/history_img_04.png";
import history5 from "../../static/images/history_img_05.png";
import history6 from "../../static/images/history_img_06.png";
import history7 from "../../static/images/history_img_07.png";
import history8 from "../../static/images/history_img_08.png";
import history9 from "../../static/images/history_img_09.png";
import Footer from "../Footer";
import LazyLoad from "react-lazy-load";

function AboutHistory() {
    document.documentElement.style.setProperty("--animate-duration", "2s");

    return (
        <>
            <section className={styles.historyWrapper}>
                <div className={styles.historyLogoWrapper}>
                    <img src={historyLogo} alt="History Logo" />
                </div>
                <div className={styles.timeline}>
                    <ul style={{ padding: "0", margin: "0" }}>
                        <li style={{ marginBottom: "248px" }}>
                            <div
                                className={`${styles.content} ${styles.leftZero}`}
                            >
                                <div
                                    style={{
                                        textAlign: "right",
                                    }}
                                >
                                    <LazyLoad debounce={false}>
                                        <img
                                            src={history1}
                                            alt="first history"
                                            className="animate__animated animate__fadeInUp"
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                            <div
                                className={styles.point}
                                style={{ marginTop: "200px" }}
                            />
                            <div
                                className={`${styles.date} ${styles.rightZero}`}
                                style={{ marginTop: "200px" }}
                            >
                                <div className={styles.dateText}>2001</div>
                                <div>
                                    <div style={{ marginBottom: "24px" }}>
                                        <img
                                            src={historyLogo1}
                                            alt="first history"
                                        />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        전통 돈카츠 전문점 "사보텐" 시작
                                    </div>
                                    <div className={styles.contentParagraph}>
                                        사보텐 1호점 무교점 오픈
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${styles.content} ${styles.leftZero}`}
                            >
                                <div
                                    style={{
                                        paddingBottom: "69px",
                                        textAlign: "right",
                                        marginTop: "156px",
                                    }}
                                >
                                    <LazyLoad debounce={false}>
                                        <img
                                            src={history2}
                                            alt="second history"
                                            className="animate__animated animate__fadeInUp"
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                            <div className={styles.point} />
                            <div className={styles.date}>
                                <div className={styles.dateText}>2009</div>
                                <div style={{ marginBottom: "24px" }}>
                                    <img
                                        src={historyLogo2}
                                        alt="second history"
                                    />
                                </div>
                                <div className={styles.contentTitle}>
                                    ㈜캘리스코 독립 법인 설립
                                </div>
                            </div>
                        </li>
                        <li style={{ marginBottom: "0" }}>
                            <div className={styles.date}>
                                <div
                                    className={styles.dateText}
                                    style={{ textAlign: "right" }}
                                >
                                    2012
                                </div>
                                <div
                                    style={{
                                        textAlign: "right",
                                        marginBottom: "24px",
                                    }}
                                >
                                    <img
                                        src={historyLogo3}
                                        alt="third history"
                                    />
                                </div>
                                <div
                                    className={styles.contentTitle}
                                    style={{ textAlign: "right" }}
                                >
                                    고용 창출 우수기업 대통령상 수상
                                </div>
                            </div>
                            <div className={styles.point} />
                            <div className={styles.content}>
                                <div
                                    style={{
                                        position: "relative",
                                        bottom: "-20px",
                                    }}
                                >
                                    <LazyLoad debounce={false}>
                                        <img
                                            src={history3}
                                            alt="third history"
                                            className="animate__animated animate__fadeInUp"
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                        </li>
                        <li style={{ marginBottom: "248px" }}>
                            <div
                                className={styles.date}
                                style={{ textAlign: "right" }}
                            >
                                <div className={styles.dateText}>2014</div>
                                <div style={{ paddingBottom: "30px" }}>
                                    <img src={historyLogo4} alt="4th history" />
                                </div>
                                <div className={styles.contentTitle}>
                                    남녀 고용평등 우수기업 고용노동부 장관상
                                    수상
                                </div>
                            </div>
                            <div className={styles.point} />
                            <div className={styles.content} />
                        </li>
                        <li style={{ marginBottom: 0 }}>
                            <div
                                className={styles.content}
                                style={{ textAlign: "right" }}
                            >
                                <div
                                    style={{
                                        paddingBottom: "30px",
                                        position: "relative",
                                        bottom: "-90px",
                                    }}
                                >
                                    <LazyLoad debounce={false}>
                                        <img
                                            src={history4}
                                            alt="4th history"
                                            className="animate__animated animate__fadeInUp"
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                            <div
                                className={styles.point}
                                style={{ marginTop: "120px" }}
                            />
                            <div
                                className={styles.date}
                                style={{ marginTop: "120px" }}
                            >
                                <div className={styles.dateText}>2014</div>
                                <div className={styles.contentTitle}>
                                    글로벌 멕시칸 푸드 브랜드 “타코벨” 시작
                                </div>
                                <div style={{ marginBottom: "24px" }}>
                                    <img src={historyLogo5} alt="5th history" />
                                </div>
                                <div className={styles.contentParagraph}>
                                    타코벨 1호점 경방타임스퀘어점 오픈
                                </div>
                            </div>
                        </li>
                        <li style={{ marginBottom: "330px" }}>
                            <div className={styles.content} />
                            <div className={styles.point} />
                            <div className={styles.date}>
                                <div className={styles.dateText}>2014</div>
                                <div style={{ paddingBottom: "30px" }}>
                                    <img src={historyLogo6} alt="6th history" />
                                </div>
                                <div className={styles.contentTitle}>
                                    Modern Korean dining 브랜드 “반주” 시작
                                </div>
                                <div className={styles.contentParagraph}>
                                    반주 인천공항 T1점 오픈
                                </div>
                            </div>
                        </li>
                        <li style={{ marginBottom: 0 }}>
                            <div
                                className={styles.date}
                                style={{
                                    textAlign: "right",
                                    marginTop: "60px",
                                }}
                            >
                                <div className={styles.dateText}>2016</div>
                                <div style={{ paddingBottom: "30px" }}>
                                    <img src={historyLogo7} alt="7th history" />
                                </div>
                                <div className={styles.contentTitle}>
                                    Katsu&amp;Rounge “히바린” 시작
                                </div>
                                <div className={styles.contentParagraph}>
                                    히바린 1호점 신세계강남점 오픈
                                </div>
                            </div>
                            <div
                                className={styles.point}
                                style={{
                                    textAlign: "right",
                                    marginTop: "60px",
                                }}
                            />
                            <div className={styles.content}>
                                <div
                                    style={{
                                        position: "relative",
                                        bottom: "-30px",
                                    }}
                                >
                                    <LazyLoad debounce={false}>
                                        <img
                                            src={history5}
                                            alt="5th story"
                                            className="animate__animated animate__fadeInUp"
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                        </li>
                        <li style={{ marginBottom: "230px" }}>
                            <div
                                className={styles.date}
                                style={{ textAlign: "right" }}
                            >
                                <div className={styles.dateText}>2016</div>
                                <div style={{ paddingBottom: "30px" }}>
                                    <img src={historyLogo8} alt="8th history" />
                                </div>
                                <div className={styles.contentTitle}>
                                    사보텐 브랜드 리뉴얼
                                </div>
                                <div className={styles.contentParagraph}>
                                    Modern &amp; Contemporary 컨셉 적용하며
                                    <br />
                                    사보텐 브랜드를 현대적으로 재해석
                                </div>
                            </div>
                            <div className={styles.point} />
                            <div className={styles.content} />
                        </li>
                        <li style={{ marginBottom: "190px" }}>
                            <div className={styles.content}>
                                <div
                                    style={{
                                        paddingBottom: "30px",
                                        textAlign: "right",
                                    }}
                                >
                                    <LazyLoad debounce={false}>
                                        <img
                                            src={history6}
                                            alt="9th history"
                                            className="animate__animated animate__fadeInUp"
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                            <div
                                className={styles.point}
                                style={{ marginTop: "150px" }}
                            />
                            <div
                                className={styles.date}
                                style={{ marginTop: "150px" }}
                            >
                                <div className={styles.dateText}>2018</div>
                                <div className={styles.contentTitle}>
                                    사보텐 Easy to cook(간편식) 제품 런칭
                                </div>
                            </div>
                        </li>
                        <li style={{ marginBottom: 0 }}>
                            <div
                                className={styles.content}
                                style={{
                                    textAlign: "right",
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        bottom: "-240px",
                                    }}
                                >
                                    <LazyLoad debounce={false}>
                                        <img
                                            src={history7}
                                            alt="10th history"
                                            className="animate__animated animate__fadeInUp"
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                            <div
                                className={styles.point}
                                style={{ marginTop: "240px" }}
                            />
                            <div
                                className={styles.date}
                                style={{ marginTop: "240px" }}
                            >
                                <div className={styles.dateText}>2018</div>
                                <div className={styles.contentTitle}>
                                    사보텐 정통 컨셉스토어
                                </div>
                                <div className={styles.contentParagraph}>
                                    스타필드고양점 오픈
                                </div>
                            </div>
                        </li>
                        <li style={{ marginBottom: "320px" }}>
                            <div className={styles.content} />
                            <div className={styles.point}></div>
                            <div className={styles.date}>
                                <div className={styles.dateText}>2019</div>
                                <div className={styles.contentTitle}>
                                    HMR 제품 온라인 유통 판매 강화
                                </div>
                            </div>
                        </li>
                        <li style={{ marginBottom: "139px" }}>
                            <div
                                className={styles.date}
                                style={{
                                    textAlign: "right",
                                    marginTop: "150px",
                                }}
                            >
                                <div className={styles.dateText}>2020</div>
                                <div style={{ marginBottom: "24px" }}>
                                    <img src={historyLogo9} alt="9th history" />
                                </div>
                                <div className={styles.contentTitle}>
                                    “사보텐” 브랜드 20주년
                                </div>
                            </div>
                            <div
                                className={styles.point}
                                style={{ marginTop: "150px" }}
                            />
                            <div className={styles.content}>
                                <div>
                                    <LazyLoad debounce={false}>
                                        <img
                                            src={history8}
                                            alt="12th history"
                                            className="animate__animated animate__fadeInUp"
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                        </li>
                        <li style={{ marginBottom: "300px" }}>
                            <div className={styles.content}>
                                <div
                                    style={{
                                        paddingBottom: "30px",
                                        textAlign: "right",
                                    }}
                                >
                                    <LazyLoad debounce={false}>
                                        <img
                                            src={history9}
                                            alt="13th history"
                                            className="animate__animated animate__fadeInUp"
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                            <div
                                className={styles.point}
                                style={{ marginTop: "240px" }}
                            />
                            <div
                                className={styles.date}
                                style={{ marginTop: "240px" }}
                            >
                                <div className={styles.dateText}>2020</div>
                                <div style={{ marginBottom: "24px" }}>
                                    <img
                                        src={historyLogo10}
                                        alt="10th history"
                                    />
                                </div>
                                <div className={styles.contentTitle}>
                                    맛을 아는 사람들 캘리스코가 만든
                                    <br />
                                    신개념 Dinning Cafe 더 센트럴 키친
                                </div>
                                <div className={styles.contentParagraph}>
                                    더 센트럴키친 바이 캘리스코 1호점
                                    고속터미널점 오픈
                                </div>
                            </div>
                        </li>
                        <li style={{ marginBottom: "270px" }}>
                            <div className={styles.content} />
                            <div className={styles.point}></div>
                            <div className={styles.date}>
                                <div className={styles.dateText}>2020</div>
                                <div style={{ paddingBottom: "24px" }}>
                                    <img
                                        src={historyLogo11}
                                        alt="14th history"
                                    />
                                </div>
                                <div className={styles.contentTitle}>
                                    신세계푸드와 식자재 공급 및 제품 개발 협약식
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default AboutHistory;
