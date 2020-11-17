import React from "react";
import styles from "./mobile_support.module.scss";
import BackgroundImage from "../../../static/images/mobile/img-mar-Support@2x.png";
import IconMembership from "../../../static/svg/mobile/icon-membership.svg";
import IconCard from "../../../static/svg/mobile/credit-card (1).svg"
import IconKakao from "../../../static/svg/mobile/icon-kakao.svg"
import IconEvent from "../../../static/svg/mobile/Out line.svg"
import IconGift from "../../../static/svg/mobile/icon-giftcard.svg"
import { Link } from "react-router-dom";

export default function Support() {
    return (
        <>
            <section className={styles.mobileSupportSection}>
                <div className={styles.mobileSupportWrapper}>
                    <div className={styles.mobileSupportTitle}>Support</div>
                    <div className={styles.mobileSupportMenus}>
                        <Link to="/supports/membership">
                            <div className={styles.mobileSupportMenu}>
                                <div className={styles.mobileSupportMenuIcon}>
                                    <img src={IconMembership} className={styles.mobileSupportIconImg} alt=""/>
                                </div>
                                <div className={styles.mobileSupportMenuText}>멤버십</div>
                            </div>
                        </Link>
                        <Link to="/supports/partnership">                      
                        <div className={styles.mobileSupportMenu}>
                            <div className={styles.mobileSupportMenuIcon}>
                                <img src={IconCard} className={styles.mobileSupportIconImg} alt=""/>
                            </div>
                            <div className={styles.mobileSupportMenuText}>제휴카드</div>
                        </div>
                        </Link>
                        <Link to="/supports/kakaotalk-friends">  
                        <div className={styles.mobileSupportMenu}>
                            <div className={styles.mobileSupportMenuIcon}>
                                <img src={IconKakao} className={styles.mobileSupportIconImg} alt=""/>
                            </div>
                            <div className={styles.mobileSupportMenuText}>카카오톡 친구</div>
                        </div>
                        </Link>
                        <Link to="/supports/events">
                        <div className={styles.mobileSupportMenu}>
                            <div className={styles.mobileSupportMenuIcon}>
                                <img src={IconEvent} className={styles.mobileSupportIconImg} alt=""/>
                            </div>
                            <div className={styles.mobileSupportMenuText}>이벤트&amp;프로모션</div>
                        </div>
                        </Link>
                        <Link to="/supports/giveaway">
                        <div className={styles.mobileSupportMenu}>
                            <div className={styles.mobileSupportMenuIcon}>
                                <img src={IconGift} className={styles.mobileSupportIconImg} alt=""/>
                            </div>
                            <div className={styles.mobileSupportMenuText}>상품권</div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.mobileSupportBgImgWrapper}>
                    <img src={BackgroundImage} alt="background" className="img-fill" />
                </div>
            </section>
        </>
    );
}