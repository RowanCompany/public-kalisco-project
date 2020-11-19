import React, { useState } from "react";
import styles from "../mobile_about.module.scss";
import { CSSTransition } from "react-transition-group";

import ImageIntroBg1 from "../../../../static/images/mobile/Intro1@2x.png";
import LogoIntroDish from "../../../../static/svg/mobile/dish.svg";

export default function FirstToggle() {
    const [firstInfo, setFirstInfo] = useState(false);
    const nodeRefFirst = React.useRef(null);
    const nodeRefSecond = React.useRef(null);

    return (
        <>
            <div className={styles.aboutBusinessIntro} onClick={() => setFirstInfo(!firstInfo)}>
                <div className={styles.aboutBusinessIntroFrame}>
                    <div className={styles.aboutBusinessIntroWrapper}>
                    <CSSTransition
                        in={!firstInfo}
                        timeout={300}
                        appear={true}
                        unmountOnExit={true}
                        nodeRef={nodeRefFirst}>
                            <div className={styles.aboutBusinessIntroContent}>
                                <div className={styles.aboutBusinessIntroLogo}>
                                    <img className={styles.aboutBusinessIntroLogoImg} src={LogoIntroDish} alt="logo"/>
                                    <div className={styles.aboutBusinessIntroLogoText}>외식사업</div>
                                </div>
                            </div>
                    </CSSTransition>
                    <CSSTransition
                        in={firstInfo}
                        timeout={300}
                        appear={true}
                        unmountOnExit={true}
                        nodeRef={nodeRefSecond}>
                            <div className={styles.aboutBusinessIntroContentActive}>
                                <div className={styles.aboutBusinessIntroContentWrapper}>
                                    <div className={styles.aboutBusinessIntroTitle}>외식사업</div>
                                    <div className={styles.aboutBusinessIntroDescBig}>맛을 아는 사람들은</div>
                                    <div className={styles.aboutBusinessIntroDesc}>
                                        천년기업 캘리스코를 만들어갑니다.
                                        <br />
                                        <br />
                                        20여년간 외식산업분야에서 
                                        <br />
                                        풍부한 경험과 노하우를 쌓아 온 글로벌 기업, 캘리스코
                                    </div>
                                </div>
                            </div>
                    </CSSTransition>
                    </div>
                </div>
                <img className={styles.aboutBusinessIntroBackground} src={ImageIntroBg1} alt="bg"/>
            </div>
        </>
    );
}