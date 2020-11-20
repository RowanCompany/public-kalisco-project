import React from "react";
import styles from "./mobile_saboten.module.scss";
import greenStoreImage from "../../../../static/images/store-masan.png";
import newredStoreImage from "../../../../static/images/store-newred.png";
import marker from "../../../../static/images/mobile/icon-map-marker@2x.png";

export default function HibarinStore() {
  return (
    <section className={styles.storeSection}>
      <div className={styles.storePanelWrapper}>
        <div className={styles.storePanelImageWrapper}>
          <img src={greenStoreImage} alt="green" />
        </div>
        <div className={styles.storePanelDescriptionWrapper}>
          <div className={styles.storePanelTitle}>그린 신세계 마산점</div>
          <div className={styles.storePanelDescription}>
            기존 사보텐의 레드 이미지를 탈피하여
            <br />
            새로운 그린 사보텐으로 재단장한 매장입니다.
          </div>
        </div>
      </div>
      <div className={styles.storePanelWrapper}>
        <div className={styles.storePanelImageWrapper}>
          <img src={newredStoreImage} alt="new red" />
        </div>
        <div className={styles.storePanelDescriptionWrapper}>
          <div className={styles.storePanelTitle}>뉴레드 고양 스타필드점</div>
          <div className={styles.storePanelDescription}>
            뉴레드 사보텐으로 다시 돌아왔습니다.
            <br />
            Reserve 매장인 고양 스타필드점에서
            <br />
            새로운 사보텐의 볼거리와
            <br />
            다양한 시그니처 메뉴를 만나보세요.
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
      </div>
    </section>
  );
}
