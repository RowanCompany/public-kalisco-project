import React from "react";
import storeText from "../../static/images/text-hibarin-store.png";
import styles from "./hibarin.module.scss";
import busanStoreImage from "../../static/images/img-p-store-busan.png";
import songpaStoreImage from "../../static/images/img-p-store-songpa.png";
import yeojuStoreImage from "../../static/images/img-p-store-yeoju.png";
import mapImage from "../../static/images/img-p-store-map-korea.png";
import markerImage from "../../static/images/img-p-store-map-marker.png";

function HibarinStore() {
    return (
        <>
            <section className={styles.storeSection}>
                <div className={styles.titleTextWrapper}>
                    <img src={storeText} alt="store" />
                </div>
                <div className={styles.storeImageWrapper}>
                    <div className="position-relative">
                        <div className={styles.storeTextWrapper}>
                            <div className="container">
                                <div className={styles.storeTextTitle}>
                                    부산 센텀시티점
                                </div>
                                <div className={styles.storeTextDescription}>
                                    두부의 고소함과 소고기의 깊은 풍미를 담은
                                    <br />
                                    ‘토푸카츠와 와규 스키야키’를
                                    <br />
                                    부산 센텀시티점에서 즐겨보세요
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src={busanStoreImage}
                                alt="busan store"
                                className="img-fill"
                            />
                        </div>
                    </div>
                    <div className="position-relative">
                        <div className={styles.storeTextWrapper}>
                            <div className="container text-right">
                                <div className={styles.storeTextTitle}>
                                    이태원점
                                </div>
                                <div className={styles.storeTextDescription}>
                                    이태원점에서 스타일리쉬한 히노끼에이징
                                    카츠와
                                    <br />
                                    이태원점만의 시그니처 메뉴를 만나보세요
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src={songpaStoreImage}
                                alt="songpa store"
                                className="img-fill"
                            />
                        </div>
                    </div>
                    <div className="position-relative">
                        <div className={styles.storeTextWrapper}>
                            <div className="container">
                                <div className={styles.storeTextTitle}>
                                    여주 첼시점
                                </div>
                                <div className={styles.storeTextDescription}>
                                    퀄리티 있는 프리미엄 카츠와 모던한 공간으로
                                    연인, 친구들과 함께
                                    <br />
                                    여주 첼시점만의 시그니쳐 메뉴 명란치즈카츠를
                                    만나보세요
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src={yeojuStoreImage}
                                alt="yeoju store"
                                className="img-fill"
                            />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.storeMapWrapper}>
                        <div>
                            <div className={styles.storeMarkerWrapper}>
                                <img src={markerImage} alt="marker" />
                            </div>
                            <div className={styles.storeMapTitle}>
                                당신의 일상에서 히바린을 만나보세요.
                            </div>
                            <div className={styles.storeMapDescription}>
                                매장을 지도로
                                <br />
                                더욱 쉽고 빠르게 찾아보아요
                                <br />
                                지도로 더욱 쉽고 빠르게 찾아보아요
                            </div>
                            <div>
                                <a
                                    className={styles.kaliscoButton}
                                    href={`https://map.naver.com/v5/search/%ED%9E%88%EB%B0%94%EB%A6%B0?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&c=14135529.7255359,4513992.1748852,13,0,0,0,dh`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    히바린 매장찾기
                                </a>
                            </div>
                        </div>
                        <div>
                            <img
                                src={mapImage}
                                alt="korea map"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HibarinStore;
