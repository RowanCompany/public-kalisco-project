import React from "react";
import styles from "./mobile_hibarin.module.scss";
import anseongStoreImage from "../../../../static/images/img-p-store-busan-2.png";
import itaewonStoreImage from "../../../../static/images/img-p-store-songpa@2x.png";
import yeojuStoreImage from "../../../../static/images/img-p-store-yeoju@2x.png";
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
          <img src={anseongStoreImage} alt="star field" />
        </div>
        <div className={styles.storePanelDescriptionWrapper}>
          <div className={styles.storePanelTitle}>스타필드안성점</div>
          <div className={styles.storePanelDescription}>
            베스트샘플러 맛집!
            <br />
            카츠 앤 라운지, 새로워진 히바린을 만날 수 있는
            <br />
            스타필드안성점을 방문하세요.
          </div>
        </div>
      </div>
      <div className={styles.storePanelWrapper}>
        <div className={styles.storePanelImageWrapper}>
          <img src={itaewonStoreImage} alt="itaewon" />
        </div>
        <div className={styles.storePanelDescriptionWrapper}>
          <div className={styles.storePanelTitle}>이태원점</div>
          <div className={styles.storePanelDescription}>
            이태원점에서 스타일리쉬한 히노끼에이징 카츠와
            <br />
            이태원점만의 시그니처 메뉴를 만나보세요
          </div>
        </div>
      </div>
      <div className={styles.storePanelWrapper}>
        <div className={styles.storePanelImageWrapper}>
          <img src={yeojuStoreImage} alt="yeoju" />
        </div>
        <div className={styles.storePanelDescriptionWrapper}>
          <div className={styles.storePanelTitle}>여주 첼시점</div>
          <div className={styles.storePanelDescription}>
            퀄리티 있는 프리미엄 카츠와
            <br />
            모던한 공간으로 연인, 친구들과 함께
            <br />
            여주 첼시점만의 시그니쳐 메뉴
            <br />
            명란치즈카츠를 만나보세요
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
          당신의 일상에서 히바린을 만나보세요.
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
            href="https://map.naver.com/v5/search/%ED%9E%88%EB%B0%94%EB%A6%B0?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&amp;c=14135529.7255359,4513992.1748852,13,0,0,0,dh"
            rel="noopener noreferrer"
            target="_blank"
          >
            히바린 매장찾기
          </a>
        </div>
      </div>
      <div style={{ padding: "40px" }}>
        <div className={styles.storeMapImageWrapper}>
          <OverlayTrigger
            overlay={
              <Tooltip
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
              className={styles.storeMapMarkerPosition}
              style={{ top: "95px", left: "85px" }}
            >
              <img src={markerOnMapImage} alt="marker" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            overlay={
              <Tooltip
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
              className={styles.storeMapMarkerPosition}
              style={{ top: "70px", left: "50px" }}
            >
              <img src={markerOnMapImage} alt="marker" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            overlay={
              <Tooltip
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
              className={styles.storeMapMarkerPosition}
              style={{ top: "120px", left: "50px" }}
            >
              <img src={markerOnMapImage} alt="marker" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            overlay={
              <Tooltip
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
              className={styles.storeMapMarkerPosition}
              style={{ top: "25%", left: "35%" }}
            >
              <img src={markerOnMapImage} alt="marker" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            overlay={
              <Tooltip
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
              className={styles.storeMapMarkerPosition}
              style={{ top: "60%", right: "30px" }}
            >
              <img src={markerOnMapImage} alt="marker" />
            </a>
          </OverlayTrigger>
          <img src={mapImage} alt="korea map" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}
