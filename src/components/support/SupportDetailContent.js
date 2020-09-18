import React from "react";
import SupportBanner from "./SupportBanner";
import { useParams } from "react-router-dom";
import styles from "./support.module.scss";
import EventContent from "./event/EventContent";
import thinkingImage from "../../static/images/img-thinking.png";
import kakaotalkIcon from "../../static/svg/icon_kakaotalk.svg";
import kakaoPlusImage from "../../static/images/img_kakaoplus.png";
import footerSabotenLogo from "../../static/svg/icon_saboten_b.svg";
import footerHibarinLogo from "../../static/svg/icon_hibarin_b.svg";
import footerCentralKitchenLogo from "../../static/svg/logo_central_kakao.svg";

function SupportDetailContent() {
    const { subject } = useParams();

    return (
        <>
            <SupportBanner subject={subject} />
            <SupportCaseRenderer subject={subject} />
        </>
    );
}

// TODO: 새로 컨텐츠 나올떄 변경해야 함
function SupportCaseRenderer({ subject }) {
    switch (subject) {
        case "membership":
        case "partnership":
        case "giveaway":
            return (
                <div className={styles.tempDetailContent}>
                    {/* <div className={styles.tempDetailButtonWrapper}>
                        <button
                            type="button"
                            className={styles.tempDetailButton}
                        >
                            조회하기
                        </button>
                    </div> */}
                    <div className={styles.tempPanel}>
                        <div className={styles.tempPanelTitle}>
                            조금만 기다려주세요!
                        </div>
                        <div>
                            <img src={thinkingImage} alt="thinking" />
                        </div>
                        <div className={styles.tempPanelDescription}>
                            고객님들을 위해
                            <br />
                            <b>어떤 서비스를</b> 제공할 수 있을까 계속 고민 중에
                            있어요.
                        </div>
                    </div>
                </div>
            );
        case "kakaotalk-friends":
            return (
                <div className={styles.tempDetailContent}>
                    <div className={styles.tempKakaotalkPanel}>
                        <div className="text-center">
                            <img src={kakaotalkIcon} alt="kakaotalk icon" />
                        </div>
                        <div className={styles.tempKakaotalkPanelTitle}>
                            <b>카카오톡</b>에서
                        </div>
                        <div className={styles.tempKakaotalkPanelSubTitle}>
                            친구추가를 하시면 드리는 혜택
                        </div>
                        <div className={styles.tempKakaotalkPanelFlexWrapper}>
                            <div>
                                <img src={kakaoPlusImage} alt="kakaoplus" />
                            </div>
                            <div
                                className={
                                    styles.tempKakaotalkPanelBenefitWrapper
                                }
                            >
                                <div
                                    className={
                                        styles.tempKakaotalkPanelBenefitTextWrapper
                                    }
                                >
                                    <div
                                        className={
                                            styles.tempKakaoPanelBenefitCircle
                                        }
                                    >
                                        1
                                    </div>
                                    <div
                                        className={
                                            styles.tempKakaoPanelBenefitText
                                        }
                                    >
                                        <b>쿠폰</b>을 받을 수 있다
                                    </div>
                                </div>
                                <div
                                    className={
                                        styles.tempKakaotalkPanelBenefitTextWrapper
                                    }
                                >
                                    <div
                                        className={
                                            styles.tempKakaoPanelBenefitCircle
                                        }
                                    >
                                        2
                                    </div>
                                    <div
                                        className={
                                            styles.tempKakaoPanelBenefitText
                                        }
                                    >
                                        <b>다양한 새 소식</b>을 접할 수 있다!
                                    </div>
                                </div>
                                <div
                                    className={
                                        styles.tempKakaotalkPanelBenefitTextWrapper
                                    }
                                >
                                    <div
                                        className={
                                            styles.tempKakaoPanelBenefitCircle
                                        }
                                    >
                                        3
                                    </div>
                                    <div
                                        className={
                                            styles.tempKakaoPanelBenefitText
                                        }
                                    >
                                        <b>신메뉴</b>가 나오면 가장 먼저 알 수
                                        있다!
                                    </div>
                                </div>
                                <div
                                    className={
                                        styles.tempKakaotalkPanelBenefitTextWrapper
                                    }
                                >
                                    <div
                                        className={
                                            styles.tempKakaoPanelBenefitCircle
                                        }
                                    >
                                        4
                                    </div>
                                    <div
                                        className={
                                            styles.tempKakaoPanelBenefitText
                                        }
                                    >
                                        매장에서 파는 소스를 <b>집으로 주문</b>
                                        할 수 있다!
                                    </div>
                                </div>
                                <div
                                    className={
                                        styles.tempKakaotalkPanelBenefitTextWrapper
                                    }
                                >
                                    <div
                                        className={
                                            styles.tempKakaoPanelBenefitCircle
                                        }
                                    >
                                        5
                                    </div>
                                    <div
                                        className={
                                            styles.tempKakaoPanelBenefitText
                                        }
                                    >
                                        <b>궁금한 점</b>이 있으면 바로 물어볼 수
                                        있다!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tempKakaoPanelFooter}>
                            <div className={styles.tempKakaoPanelFooterBox}>
                                <div>
                                    <img
                                        src={footerSabotenLogo}
                                        alt="footer saboten"
                                    />
                                </div>
                                <div
                                    className={
                                        styles.tempKakaoPanelFooterBoxText
                                    }
                                >
                                    <b>'사보텐'</b>
                                    <br />
                                    카카오톡으로 이동
                                </div>
                            </div>
                            <div className={styles.tempKakaoPanelFooterBox}>
                                <div>
                                    <img
                                        src={footerHibarinLogo}
                                        alt="footer hibarin"
                                    />
                                </div>
                                <div
                                    className={
                                        styles.tempKakaoPanelFooterBoxText
                                    }
                                >
                                    <b>'히바린'</b>
                                    <br />
                                    카카오톡으로 이동
                                </div>
                            </div>
                            <div className={styles.tempKakaoPanelFooterBox}>
                                <div>
                                    <img
                                        src={footerCentralKitchenLogo}
                                        alt="footer hibarin"
                                    />
                                </div>
                                <div
                                    className={
                                        styles.tempKakaoPanelFooterBoxText
                                    }
                                >
                                    <b>'센트럴키친'</b>
                                    <br />
                                    카카오톡으로 이동
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case "events":
            return <EventContent />;
        default:
            return <></>;
    }
}

export default SupportDetailContent;
