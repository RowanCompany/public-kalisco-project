import React from "react";
import styles from "./mobile_saboten.module.scss";
import greenStoreImage from "../../../../static/images/store-masan.png";
import newredStoreImage from "../../../../static/images/store-newred.png";
import marker from "../../../../static/images/mobile/icon-map-marker@2x.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import markerOnMapImage from "../../../../static/images/icon-map-marker.png";
import mapImage from "../../../../static/images/img-map-korea.png";

export default function HibarinStore() {
  return (
    <section className={styles.storeSection}>
      <div className={styles.storePanelWrapper}>
        <div className={styles.storePanelImageWrapper}>
          <img src={greenStoreImage} alt="green" />
        </div>
        <div className={styles.storePanelDescriptionWrapper}>
          <div className={styles.storePanelTitle}>신세계 마산점</div>
          <div className={styles.storePanelDescription}>
            신세계마산점의 깔끔한 인테리어와<br />언제나 맛있는 정통 카츠를 즐겨보세요.
          </div>
          <div className={styles.storePanelAddress}>
            - 주소 : 경상남도 창원시 마산합포구 합포로 251 신세계백화점 마산점 B1
          </div>
        </div>
      </div>
      <div className={styles.storePanelWrapper}>
        <div className={styles.storePanelImageWrapper}>
          <img src={newredStoreImage} alt="new red" />
        </div>
        <div className={styles.storePanelDescriptionWrapper}>
          <div className={styles.storePanelTitle}>고양 스타필드점</div>
          <div className={styles.storePanelDescription}>
            Reserve 매장인 고양 스타필드점에서<br />사보텐의 정통과 다양한 시그니처 메뉴를 만나보세요.
          </div>
          <div className={styles.storePanelAddress}>
            - 주소 : 경기 고양시 덕양구 고양대로 1995 1층
          </div>
        </div>
      </div>
      <div className={styles.mapWrapper}>
        <div className="text-center">
          <img
            src={marker}
            alt="marker"
            style={{ width: "18px", height: "28px" }}
          />
        </div>
        <div className={styles.mapTitle}>
          당신의 일상에서 사보텐을 만나보세요.
        </div>
        <div className={styles.mapDescription}>
          매장을 지도로
          <br />
          더욱 쉽고 빠르게 찾아보아요
          <br />
          지도로 더욱 쉽고 빠르게 찾아보아요
        </div>
        <div className={styles.mapStoreLinkWrapper}>
          <a
            className={styles.mapStoreLink}
            href="https://map.naver.com/v5/search/%EC%82%AC%EB%B3%B4%ED%85%90?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&amp;c=14135681.1787198,4517242.0563975,13,0,0,0,dh"
            rel="noopener noreferrer"
            target="_blank"
          >
            사보텐 매장찾기
          </a>
        </div>
        <div style={{ padding: "40px" }}>
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
                href="https://map.naver.com/v5/search/%EC%82%AC%EB%B3%B4%ED%85%90%20%EA%B0%95%EB%82%A8?c=14145111.5970845,4510988.5520209,12,0,0,0,dh"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.storeMapMarkerPosition}
                style={{ top: "19%", left: "85px" }}
              >
                <img src={markerOnMapImage} alt="marker" />
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
                  고양
                </Tooltip>
              }
            >
              <a
                href="https://map.naver.com/v5/search/%EC%82%AC%EB%B3%B4%ED%85%90%20%EC%8A%A4%ED%83%80%ED%95%84%EB%93%9C%EA%B3%A0%EC%96%91?c=14125842.2999852,4529648.7415510,15,0,0,0,dh"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.storeMapMarkerPosition}
                style={{ top: "90px", left: "50px" }}
              >
                <img src={markerOnMapImage} alt="marker" />
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
                href="https://map.naver.com/v5/search/%EC%82%AC%EB%B3%B4%ED%85%90%20%EC%9D%B8%EC%B2%9C?c=14086694.5982175,4500459.3513746,11,0,0,0,dh"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.storeMapMarkerPosition}
                style={{ top: "26%", left: "70px" }}
              >
                <img src={markerOnMapImage} alt="marker" />
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
                  충남
                </Tooltip>
              }
            >
              <a
                href="https://map.naver.com/v5/search/%EC%82%AC%EB%B3%B4%ED%85%90%20%EC%B6%A9%EB%82%A8?c=14115626.0134235,4396734.3039916,9,0,0,0,dh"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.storeMapMarkerPosition}
                style={{ top: "30%", left: "10%" }}
              >
                <img src={markerOnMapImage} alt="marker" />
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
                  대전
                </Tooltip>
              }
            >
              <a
                href="https://map.naver.com/v5/search/%EC%82%AC%EB%B3%B4%ED%85%90%20%EB%8C%80%EC%A0%84?c=14165539.3928937,4348922.9427992,10,0,0,0,dh"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.storeMapMarkerPosition}
                style={{ top: "40%", left: "32%" }}
              >
                <img src={markerOnMapImage} alt="marker" />
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
                  광주
                </Tooltip>
              }
            >
              <a
                href="https://map.naver.com/v5/search/%EC%82%AC%EB%B3%B4%ED%85%90%20%EA%B4%91%EC%A3%BC?c=14123365.2625373,4187583.4853463,12,0,0,0,dh"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.storeMapMarkerPosition}
                style={{ top: "52%", left: "30%" }}
              >
                <img src={markerOnMapImage} alt="marker" />
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
                  창원
                </Tooltip>
              }
            >
              <a
                href="https://map.naver.com/v5/search/%EC%82%AC%EB%B3%B4%ED%85%90%20%EC%B0%BD%EC%9B%90?c=14322502.8304773,4193335.3717248,11,0,0,0,dh"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.storeMapMarkerPosition}
                style={{ top: "60%", right: "18%" }}
              >
                <img src={markerOnMapImage} alt="marker" />
              </a>
            </OverlayTrigger>
            <img src={mapImage} alt="korea map" className="img-fill" />
          </div>
        </div>
      </div>
    </section>
  );
}
