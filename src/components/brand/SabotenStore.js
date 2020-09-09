import React from "react";
import storeText from "../../static/images/text-hibarin-store.png";
import styles from "./hibarin.module.scss";
import masanStoreImage from "../../static/images/store-masan.png";
import newredStoreImage from "../../static/images/store-newred.png";
import mapImage from "../../static/images/img-p-store-map-korea.png";
import markerImage from "../../static/images/img-p-store-map-marker.png";

function SabotenStore() {
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
                                    그린 신세계 마산점
                                </div>
                                <div className={styles.storeTextDescription}>
                                    기존 사보텐의 레드 이미지를 탈피하여
                                    <br />
                                    새로운 그린 사보텐으로 재단장한 매장입니다.
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src={masanStoreImage}
                                alt="masan store"
                                className="img-fill"
                            />
                        </div>
                    </div>
                    <div className="position-relative">
                        <div className={styles.storeTextWrapper}>
                            <div className="container text-right">
                                <div className={styles.storeTextTitle}>
                                    뉴레드 고양 스타필드점
                                </div>
                                <div className={styles.storeTextDescription}>
                                    뉴레드 사보텐으로 다시 돌아왔습니다.
                                    <br />
                                    Reserve 매장인 고양 스타필드점에서 새로운
                                    사보텐의 볼거리와
                                    <br />
                                    다양한 시그니처 메뉴를 만나보세요.
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src={newredStoreImage}
                                alt="new red store"
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
                                당신의 일상에서 사보텐을 만나보세요.
                            </div>
                            <div className={styles.storeMapDescription}>
                                전국 88개 매장을
                                <br />
                                지도로 더욱 쉽고 빠르게 찾아보아요
                            </div>
                            <div>
                                <a
                                    className={styles.kaliscoButton}
                                    href={`https://map.naver.com/v5/search/%EC%82%AC%EB%B3%B4%ED%85%90?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&c=14135681.1787198,4517242.0563975,13,0,0,0,dh`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    사보텐 매장찾기
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

export default SabotenStore;
