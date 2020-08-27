import React from "react";
import styles from "./event.module.scss";
import LeftArrow from "./svg/LeftArrow";
import RightArrow from "./svg/RightArrow";
import eventTempImage from "../../../static/images/img-event-saboten-1-detail.png";
import upArrow from "../../../static/svg/icon-arrow-up.svg";
import downArrow from "../../../static/svg/icon-arrow-down.svg";

// TODO: 데이터 연동해야 함
function EventDetailContent() {
    return (
        <div className={styles.eventDetailWrapper}>
            <div className={styles.eventDetailTitle}>사보텐 벤또 출시!</div>
            <div className={styles.eventDetailDate}>2020-07-03</div>
            <div className={styles.eventDetailNavigatorWrapper}>
                <div
                    className={`${styles.eventDetailNavigator} ${styles.disabled}`}
                    style={{ paddingRight: "15px" }}
                >
                    <div>
                        <LeftArrow />
                    </div>
                    <div style={{ paddingLeft: "8px" }}>이전글</div>
                </div>
                <div
                    className={styles.eventDetailNavigator}
                    style={{ paddingLeft: "15px" }}
                >
                    <div style={{ paddingRight: "8px" }}>다음글</div>
                    <div>
                        <RightArrow />
                    </div>
                </div>
            </div>
            <div className={styles.eventDetailContentWrapper}>
                <div>
                    <img src={eventTempImage} alt="event temp" />
                </div>
                <div style={{ paddingTop: "50px" }}>
                    <div>
                        <b>더욱 풍성해진 NEW 사보텐 도시락 메뉴</b>
                    </div>
                    <div>
                        가격은 그대로,구성은 더욱 풍성하게 돌아왔어요!
                        <br />
                        든든한 한 끼를 책임질 사보텐의 도시락 메뉴,
                        <br /> 지금 바로 배달과 테이크 아웃으로 즐겨보세요!
                        <br />
                        <br /> 지금 바로 카카오톡 검색창에 ‘사보텐’ 혹은
                        ‘saboten’을 검색하세요!
                        <br />
                        <br /> 사보텐 카톡 플친 추가 시,
                        <br /> 한입 가득, 타마고 샌드가 무료!
                        <br /> 친구와 사이좋게 나눠먹자! 시원한 에이드가 1+1
                        <br /> 오늘 하루 소확행 제대로, 라비타 와인이 1+1
                        <br />
                        <br /> 혜택이 가득한 사보텐 카카오톡 플러스 친구에서
                        만나요!
                        <br />
                        <br />
                        <br /> 지금 바로 프로필 링크 클릭 ref page :
                        https://www.instagram.com/p/CDa1Yd6j-E_/
                    </div>
                </div>
            </div>
            {/* TODO: Link 컴포넌트 넣어야 함 */}
            <div className={styles.eventDetailPostNavigatorWrapper}>
                <div className={styles.eventDetailPostNavigator}>
                    <div>
                        <img src={upArrow} alt="Up Arrow" />
                    </div>
                    <div className={styles.eventDetailPostNavigatorText}>
                        이전글
                    </div>
                    <div className={styles.eventDetailPostNavigatorTitle}>
                        사보텐 벤또 출시!
                    </div>
                </div>
                <div className={styles.eventDetailPostNavigator}>
                    <div>
                        <img src={downArrow} alt="Down Arrow" />
                    </div>
                    <div className={styles.eventDetailPostNavigatorText}>
                        다음글
                    </div>
                    <div className={styles.eventDetailPostNavigatorTitle}>
                        사보텐 벤또 출시!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDetailContent;
