import React from "react";
import storeText from "../../static/images/text-hibarin-store.png";
import styles from "./hibarin.module.scss";
import busanStoreImage from "../../static/images/img-p-store-busan.png";
import songpaStoreImage from "../../static/images/img-p-store-songpa.png";
import yeojuStoreImage from "../../static/images/img-p-store-yeoju.png";
import mapImage from "../../static/images/img-map-korea.png";
import markerImage from "../../static/images/img-p-store-map-marker.png";
import markerOnMapImage from "../../static/images/icon-map-marker.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "../contact/bootstrap.scss";

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
                            <div className={styles.storeMapImageWrapper}>
                                <OverlayTrigger
                                    overlay={
                                        <Tooltip
                                            className={styles.test}
                                            placement="top"
                                            delay={{ show: 250, hide: 250 }}
                                            id="tooltip"
                                        >
                                            서울
                                        </Tooltip>
                                    }
                                >
                                    <a
                                        href="https://map.naver.com/v5/search/%ED%9E%88%EB%B0%94%EB%A6%B0%20%EC%84%9C%EC%9A%B8?c=14120288.6721489,4518345.6159933,10,0,0,0,dh"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className={
                                            styles.storeMapMarkerPosition
                                        }
                                        style={{ top: "95px", left: "85px" }}
                                    >
                                        <img
                                            src={markerOnMapImage}
                                            alt="marker"
                                        />
                                    </a>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    overlay={
                                        <Tooltip
                                            className={styles.test}
                                            placement="top"
                                            delay={{ show: 250, hide: 250 }}
                                            id="tooltip"
                                        >
                                            파주
                                        </Tooltip>
                                    }
                                >
                                    <a
                                        href="https://map.naver.com/v5/search/%ED%9E%88%EB%B0%94%EB%A6%B0%20%ED%8C%8C%EC%A3%BC?c=14103720.9462680,4546398.0053740,13,0,0,0,dh"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className={
                                            styles.storeMapMarkerPosition
                                        }
                                        style={{ top: "70px", left: "50px" }}
                                    >
                                        <img
                                            src={markerOnMapImage}
                                            alt="marker"
                                        />
                                    </a>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    overlay={
                                        <Tooltip
                                            className={styles.test}
                                            placement="top"
                                            delay={{ show: 250, hide: 250 }}
                                            id="tooltip"
                                        >
                                            인천
                                        </Tooltip>
                                    }
                                >
                                    <a
                                        href="https://map.naver.com/v5/search/%ED%9E%88%EB%B0%94%EB%A6%B0%20%EC%9D%B8%EC%B2%9C?c=14089866.7348914,4502828.8992514,10,0,0,0,dh"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className={
                                            styles.storeMapMarkerPosition
                                        }
                                        style={{ top: "120px", left: "50px" }}
                                    >
                                        <img
                                            src={markerOnMapImage}
                                            alt="marker"
                                        />
                                    </a>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    overlay={
                                        <Tooltip
                                            className={styles.test}
                                            placement="top"
                                            delay={{ show: 250, hide: 250 }}
                                            id="tooltip"
                                        >
                                            경기
                                        </Tooltip>
                                    }
                                >
                                    <a
                                        href="https://map.naver.com/v5/search/%ED%9E%88%EB%B0%94%EB%A6%B0%20%EA%B2%BD%EA%B8%B0?c=14217287.2610428,4483872.5162367,9,0,0,0,dh"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className={
                                            styles.storeMapMarkerPosition
                                        }
                                        style={{ top: "140px", left: "120px" }}
                                    >
                                        <img
                                            src={markerOnMapImage}
                                            alt="marker"
                                        />
                                    </a>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    overlay={
                                        <Tooltip
                                            className={styles.test}
                                            placement="top"
                                            delay={{ show: 250, hide: 250 }}
                                            id="tooltip"
                                        >
                                            부산
                                        </Tooltip>
                                    }
                                >
                                    <a
                                        href="https://map.naver.com/v5/search/%ED%9E%88%EB%B0%94%EB%A6%B0%20%EB%B6%80%EC%82%B0?c=14353650.9195035,4188328.7463721,10,0,0,0,dh"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className={
                                            styles.storeMapMarkerPosition
                                        }
                                        style={{ top: "350px", right: "30px" }}
                                    >
                                        <img
                                            src={markerOnMapImage}
                                            alt="marker"
                                        />
                                    </a>
                                </OverlayTrigger>
                                <img
                                    src={mapImage}
                                    alt="korea map"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HibarinStore;
