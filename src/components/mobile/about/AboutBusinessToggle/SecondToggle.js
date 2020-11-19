import React, { useState } from "react";
import styles from "../mobile_about.module.scss";
import { CSSTransition } from "react-transition-group";

import ImageIntroBg2 from "../../../../static/images/mobile/Intro2@2x.png";
import LogoIntroMarket from "../../../../static/svg/mobile/market.svg";

export default function FirstToggle() {
    const [secondInfo, setSecondInfo] = useState(false);
    const nodeRefFirst = React.useRef(null);
    const nodeRefSecond = React.useRef(null);

    return (
        <>
            <div className={styles.aboutBusinessIntro} onClick={() => setSecondInfo(!secondInfo)}>
                <div className={styles.aboutBusinessIntroFrame}>
                    <div className={styles.aboutBusinessIntroWrapper}>
                    <CSSTransition
                        in={!secondInfo}
                        timeout={300}
                        appear={true}
                        unmountOnExit={true}
                        nodeRef={nodeRefFirst}>
                            <div className={styles.aboutBusinessIntroContent}>
                                <div className={styles.aboutBusinessIntroLogo}>
                                    <img className={styles.aboutBusinessIntroLogoImg} src={LogoIntroMarket} alt="logo"/>
                                    <div className={styles.aboutBusinessIntroLogoText}>가정간편식</div>
                                </div>
                            </div>
                    </CSSTransition>
                    <CSSTransition
                        in={secondInfo}
                        timeout={300}
                        appear={true}
                        unmountOnExit={true}
                        nodeRef={nodeRefSecond}>
                            <div className={styles.aboutBusinessIntroContentActive}>
                                <div className={styles.aboutBusinessIntroContentWrapper}>
                                    <div className={styles.aboutBusinessIntroTitle}>가정간편식</div>
                                    <div className={styles.aboutBusinessIntroDescBig}>맛을 아는 사람들 캘리스코는</div>
                                    <div className={styles.aboutBusinessIntroDesc}>
                                        <br />
                                        레스토랑에서 느낀 맛과 퀄리티를 
                                        <br />
                                        그 맛, 그대로 가정에서도 즐길 수 있도록 
                                        <br />
                                        고민하고 연구합니다.
                                    </div>
                                </div>
                            </div>
                    </CSSTransition>
                    </div>
                </div>
                <img className={styles.aboutBusinessIntroBackground} src={ImageIntroBg2} alt="bg"/>
            </div>
        </>
    );
}