import React from "react";
import styles from "./mobile_support.module.scss";
import LogoKalisco from "../../../static/svg/mobile/logo-header-w.svg";
import ImgGift from "../../../static/images/mobile/img-gift-3set@2x.png";

export default function SupportGiveaway() {
    return (
        <>
            <section className={styles.supportGiveawaySection}>
                <div className={styles.supportGiveawayWrapper}>
                    <div className={styles.supportGiveawayTitle}>캘리스코 상품권 안내</div>
                    <div className={styles.supportGiveawaylines}>
                        <div className={styles.supportGiveawayline}></div>
                        <img className={styles.supportGiveawayLogo} src={LogoKalisco} alt="logo"/>
                        <div className={styles.supportGiveawayline}></div>
                    </div>
                    <img className={styles.supportGiveawayImg} src={ImgGift} alt="gift_image" />
                    <div className={styles.supportGiveawayDescs}>
                        <div className={styles.supportGiveawayDesc}>
                            <div className={styles.supportGiveawayDescIndex}></div>
                            <div className={styles.supportGiveawayDescText}>이 상품권은 캘리스코 업장 (사보텐/타코벨/히바린/더 센트럴키친 바이 캘리스코)에서 사용 가능합니다.</div>
                        </div>
                        <div className={styles.supportGiveawayDesc}>
                            <div className={styles.supportGiveawayDescIndex}></div>
                            <div className={styles.supportGiveawayDescText}>이 상품권의 유효기간은 발행일로부터 5년간입니다.</div>
                        </div>
                        <div className={styles.supportGiveawayDesc}>
                            <div className={styles.supportGiveawayDescIndex}></div>
                            <div className={styles.supportGiveawayDescText}>이 상품권은 현금과 교환되지 않습니다. 다만, 액면 금액 100분의 60이상을(1만원 이하는 100분의 80) 구매 시 현금으로 잔액을 돌려 받으실 수 있습니다.</div>
                        </div>
                        <div className={styles.supportGiveawayDesc}>
                            <div className={styles.supportGiveawayDescIndex}></div>
                            <div className={styles.supportGiveawayDescText}>다음과 같은 경우에 상품권은 사용하실 수 없으므로 양지하여 주시기 바랍니다.</div>
                        </div>
                        <div className={styles.supportGiveawayDescDetails}>
                            <div className={styles.supportGiveawayDescDetail}>
                                <div className={styles.supportGiveawayDescDetailIndex}></div>
                                <div className={styles.supportGiveawayDescText}>상품권이 훼손되어 당사가 발행한 상품권으로 식별 불가능한 경우</div>
                            </div>
                            <div className={styles.supportGiveawayDescDetail}>
                                <div className={styles.supportGiveawayDescDetailIndex}></div>
                                <div className={styles.supportGiveawayDescText}>상품권이 위,변조 또는 부정하게 발행된 경우</div>
                            </div>
                        </div>
                        <div className={styles.supportGiveawayDesc}>
                            <div className={styles.supportGiveawayDescIndex}></div>
                            <div className={styles.supportGiveawayDescText}>고객이 상품권을 도난, 분실한 경우 재발행되지 않으며, 당사는 일체 책임을 지지 않습니다.</div>
                        </div>
                        <div className={styles.supportGiveawayDesc}>
                            <div className={styles.supportGiveawayDescIndex}></div>
                            <div className={styles.supportGiveawayDescText}>캘리스코 상품권은 일만원권, 삼만원권, 오만원권 3종이 있습니다.</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}