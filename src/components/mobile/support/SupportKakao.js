import React from "react";
import styles from "./mobile_support.module.scss";
import IconKakaoTalk from "../../../static/svg/mobile/icon_kakaotalk.svg";
import ImageKakaoSearch from "../../../static/images/mobile/img_kakaoplus@2x.png";
import LogoSaboten from "../../../static/svg/mobile/icon_saboten_b.svg";
import LogoHibarin from "../../../static/svg/mobile/icon_hibarin_b.svg";
import LogoCentral from "../../../static/svg/mobile/logo_central.svg";

export default function SupportMemberKako() {
    return (
        <>
            <section className={styles.supportKakaoSection}>
                <div className={styles.supportKakaoWrapper}>
                    <img className={styles.supportKakaoIcon} src={IconKakaoTalk} alt="icon"/>
                    <div className={styles.supportKakaoTitle}>
                        <span className={styles.supportKakaoTitleBold}>카카오톡</span>에서
                    </div>
                    <div className={styles.supportKakaoText}>친구추가를 하시면 드리는 혜택!</div>
                    <img src={ImageKakaoSearch} className={styles.supportKakaoImage} alt="search" />
                    <div className={styles.supportKakaoSeqs}>
                        <div className={styles.supportKakaoSeq}>
                            <div className={styles.supportKakaoSeqNum}>
                                <div className={styles.supportKakaoSeqNumText}>1</div>
                            </div>
                            <div className={styles.supportKakaoSeqText}>쿠폰을 받을 수 있다!</div>
                        </div>
                        <div className={styles.supportKakaoSeq}>
                            <div className={styles.supportKakaoSeqNum}>
                                <div className={styles.supportKakaoSeqNumText}>2</div>
                            </div>
                            <div className={styles.supportKakaoSeqText}>다양한 새 소식을 접할 수 있다!</div>
                        </div>
                        <div className={styles.supportKakaoSeq}>
                            <div className={styles.supportKakaoSeqNum}>
                                <div className={styles.supportKakaoSeqNumText}>3</div>
                            </div>
                            <div className={styles.supportKakaoSeqText}>신메뉴가 나오면 가장 먼저 알 수 있다!</div>
                        </div>
                        <div className={styles.supportKakaoSeq}>
                            <div className={styles.supportKakaoSeqNum}>
                                <div className={styles.supportKakaoSeqNumText}>4</div>
                            </div>
                            <div className={styles.supportKakaoSeqText}>매장에서 파는 소스를 <br/> 집으로 주문할 수 있다!</div>
                        </div>
                        <div className={styles.supportKakaoSeq}>
                            <div className={styles.supportKakaoSeqNum}>
                                <div className={styles.supportKakaoSeqNumText}>5</div>
                            </div>
                            <div className={styles.supportKakaoSeqText}>궁금한 점이 있으면 <br/> 바로 물어볼 수 있다!</div>
                        </div>
                    </div>
                    <div className={styles.supportKakaoMenus}>
                        <a href="https://pf.kakao.com/_rSEPxb" rel="noopener noreferrer" target="_blank" className={styles.supportKakaoMenuLink}>
                            <div className={styles.supportKakaoMenu}>
                                <img src={LogoSaboten} className={styles.supportKakaoMenuLogoSaboten} alt="logo" />
                                <div className={styles.supportKakaoMenuText}>
                                    <div className={styles.supportKakaoMenuTextBold}>‘사보텐’</div> 카카오톡으로 이동
                                </div>
                            </div>
                        </a>
                        <a href="https://pf.kakao.com/_xcancxb" rel="noopener noreferrer" target="_blank" className={styles.supportKakaoMenuLink}>
                            <div className={styles.supportKakaoMenu}>
                                <img src={LogoHibarin} className={styles.supportKakaoMenuLogoHibarin} alt="logo" />
                                <div className={styles.supportKakaoMenuText}>
                                    <div className={styles.supportKakaoMenuTextBold}>‘히바린’</div> 카카오톡으로 이동
                                </div>
                            </div>
                        </a>
                        <a href="https://pf.kakao.com/_lxnKUxb" rel="noopener noreferrer" target="_blank"  className={styles.supportKakaoMenuLink}>
                            <div className={styles.supportKakaoMenu}>
                                <img src={LogoCentral} className={styles.supportKakaoMenuLogoCentral} alt="logo" />
                                <div className={styles.supportKakaoMenuText}>
                                    <div className={styles.supportKakaoMenuTextBold}>‘센트럴키친’</div> 카카오톡으로 이동
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}