import React, { useState } from "react";
import styles from "../mobile_about.module.scss";
import { CSSTransition } from "react-transition-group";

import ImageIntroBg3 from "../../../../static/images/mobile/Intro1-1@2x.png";
import LogoIntroResearch from "../../../../static/svg/mobile/research.svg";

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
                                    <img className={styles.aboutBusinessIntroLogoImg} src={LogoIntroResearch} alt="logo"/>
                                    <div className={styles.aboutBusinessIntroLogoText}>건강연구</div>
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
                                    <div className={styles.aboutBusinessIntroTitle}>건강연구</div>
                                    <div className={styles.aboutBusinessIntroDescBig}>2021 Coming Soon</div>
                                    <div className={styles.aboutBusinessIntroDesc}>
                                        <br />
                                        맛을 아는 사람들 캘리스코는 
                                        <br />
                                        미래를 향하여 준비중입니다.
                                    </div>
                                </div>
                            </div>
                    </CSSTransition>
                    </div>
                </div>
                <img className={styles.aboutBusinessIntroBackground} src={ImageIntroBg3} alt="bg"/>
            </div>
        </>
    );
}