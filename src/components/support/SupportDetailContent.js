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
import giveawayImage from "../../static/images/img-gift-3set.png";
import giveawayLogo from "../../static/svg/logo-giveaway-w.svg";

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
            <div className={styles.tempPanelTitle}>조금만 기다려주세요!</div>
            <div>
              <img src={thinkingImage} alt="thinking" />
            </div>
            <div className={styles.tempPanelDescription}>
              고객님들을 위해
              <br />
              <b>어떤 서비스를</b> 제공할 수 있을까 계속 고민 중에 있어요.
            </div>
          </div>
        </div>
      );
    case "giveaway":
      return (
        <div className={styles.giveawaySection}>
          <div className={styles.giveawayPanel}>
            <div className={styles.giveawayTitle}>캘리스코 상품권 안내</div>
            <div className={styles.giveawayLogoLine}>
              <div className={styles.giveawayLine} />
              <div className={styles.giveawayLogoWrapper}>
                <img src={giveawayLogo} alt="kalisco" />
              </div>
              <div className={styles.giveawayLine} />
            </div>
            <div className={styles.giveawayImageWrapper}>
              <img src={giveawayImage} alt="giveaway" />
            </div>
            <div className={styles.giveawayListWrapper}>
              <ul className={styles.giveawayList}>
                <li>
                  이 상품권은 캘리스코 업장 (사보텐/타코벨/히바린/더 센트럴키친
                  바이 캘리스코)에서 사용 가능합니다.
                </li>
                <li>이 상품권의 유효기간은 발행일로부터 5년간입니다.</li>
                <li>
                  이 상품권은 현금과 교환되지 않습니다. 다만, 액면 금액 100분의
                  60이상을(1만원 이하는 100분의 80)
                  <br />
                  구매 시 현금으로 잔액을 돌려 받으실 수 있습니다.
                </li>
                <li>
                  다음과 같은 경우에 상품권은 사용하실 수 없으므로 양지하여
                  주시기 바랍니다.
                </li>
                <li>
                  상품권이 훼손되어 당사가 발행한 상품권으로 식별 불가능한 경우
                </li>
                <li>상품권이 위,변조 또는 부정하게 발행된 경우</li>
                <li>
                  고객이 상품권을 도난, 분실한 경우 재발행되지 않으며, 당사는
                  일체 책임을 지지 않습니다.
                </li>
                <li>
                  캘리스코 상품권은 일만원권, 삼만원권, 오만원권 3종이 있습니다.
                </li>
              </ul>
            </div>
            <div className={styles.giveawayPanelFooterLine} />
            <div className={styles.giveawayContact}>
              <b style={{ fontWeight: "bold" }}>구입 및 이용 문의:</b> 고객센터
              070-4846-8215
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
              <div className={styles.tempKakaotalkPanelBenefitWrapper}>
                <div className={styles.tempKakaotalkPanelBenefitTextWrapper}>
                  <div className={styles.tempKakaoPanelBenefitCircle}>1</div>
                  <div className={styles.tempKakaoPanelBenefitText}>
                    <b>쿠폰</b>을 받을 수 있다
                  </div>
                </div>
                <div className={styles.tempKakaotalkPanelBenefitTextWrapper}>
                  <div className={styles.tempKakaoPanelBenefitCircle}>2</div>
                  <div className={styles.tempKakaoPanelBenefitText}>
                    <b>다양한 새 소식</b>을 접할 수 있다!
                  </div>
                </div>
                <div className={styles.tempKakaotalkPanelBenefitTextWrapper}>
                  <div className={styles.tempKakaoPanelBenefitCircle}>3</div>
                  <div className={styles.tempKakaoPanelBenefitText}>
                    <b>신메뉴</b>가 나오면 가장 먼저 알 수 있다!
                  </div>
                </div>
                <div className={styles.tempKakaotalkPanelBenefitTextWrapper}>
                  <div className={styles.tempKakaoPanelBenefitCircle}>4</div>
                  <div className={styles.tempKakaoPanelBenefitText}>
                    매장에서 파는 소스를 <b>집으로 주문</b>할 수 있다!
                  </div>
                </div>
                <div className={styles.tempKakaotalkPanelBenefitTextWrapper}>
                  <div className={styles.tempKakaoPanelBenefitCircle}>5</div>
                  <div className={styles.tempKakaoPanelBenefitText}>
                    <b>궁금한 점</b>이 있으면 바로 물어볼 수 있다!
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tempKakaoPanelFooter}>
              <a
                href="https://pf.kakao.com/_rSEPxb"
                rel="noopener noreferrer"
                className="text-no-decoration d-inline-block"
                target="_blank"
              >
                <div className={styles.tempKakaoPanelFooterBox}>
                  <div>
                    <img src={footerSabotenLogo} alt="footer saboten" />
                  </div>
                  <div className={styles.tempKakaoPanelFooterBoxText}>
                    <b>'사보텐'</b>
                    <br />
                    카카오톡으로 이동
                  </div>
                </div>
              </a>
              <a
                href="https://pf.kakao.com/_xcancxb"
                rel="noopener noreferrer"
                className="text-no-decoration d-inline-block"
                target="_blank"
              >
                <div className={styles.tempKakaoPanelFooterBox}>
                  <div>
                    <img src={footerHibarinLogo} alt="footer hibarin" />
                  </div>
                  <div className={styles.tempKakaoPanelFooterBoxText}>
                    <b>'히바린'</b>
                    <br />
                    카카오톡으로 이동
                  </div>
                </div>
              </a>
              <a
                href="https://pf.kakao.com/_lxnKUxb"
                rel="noopener noreferrer"
                className="text-no-decoration d-inline-block"
                target="_blank"
              >
                <div className={styles.tempKakaoPanelFooterBox}>
                  <div>
                    <img src={footerCentralKitchenLogo} alt="footer hibarin" />
                  </div>
                  <div className={styles.tempKakaoPanelFooterBoxText}>
                    <b>'센트럴키친'</b>
                    <br />
                    카카오톡으로 이동
                  </div>
                </div>
              </a>
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
