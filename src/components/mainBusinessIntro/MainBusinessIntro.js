import React, { useState } from "react";
import Dish from "../../static/svg/dish.svg";
import Market from "../../static/svg/market.svg";
import Research from "../../static/svg/research.svg";
import { CSSTransition } from "react-transition-group";

import "./main_business_intro.scss";

function MainBusinessIntro() {
    const [firstInfoHovered, setFirstInfoHovered] = useState(false);
    const [secondInfoHovered, setSecondInfoHovered] = useState(false);
    const [thirdInfoHovered, setThirdInfoHovered] = useState(false);
    const nodeRefFirst = React.useRef(null);
    const nodeRefSecond = React.useRef(null);
    const nodeRefThird = React.useRef(null);
    const nodeRef4th = React.useRef(null);
    const nodeRef5th = React.useRef(null);
    const nodeRef6th = React.useRef(null);

    return (
        <div className="main-business-intro-wrapper">
            <h2 className="intro-title">사업소개</h2>
            <div className="row main-business-intro-card-list">
                <div className="col main-business-intro-card-wrapper">
                    <div
                        className="main-business-intro-card"
                        onMouseOver={() => setFirstInfoHovered(true)}
                        onMouseLeave={() => setFirstInfoHovered(false)}
                    >
                        <CSSTransition
                            in={!firstInfoHovered}
                            timeout={200}
                            appear={true}
                            unmountOnExit={true}
                            nodeRef={nodeRefFirst}
                        >
                            <div
                                className="main-business-intro-transition-wrapper"
                                ref={nodeRefFirst}
                            >
                                <div className="main-business-intro-icon-wrapper">
                                    <img
                                        src={Dish}
                                        alt="Dish icon"
                                        style={{ opacity: 0.5 }}
                                    />
                                </div>
                                <div style={{ opacity: 0.5 }}>외식사업</div>
                            </div>
                        </CSSTransition>
                        <CSSTransition
                            in={firstInfoHovered}
                            timeout={200}
                            appear={true}
                            unmountOnExit={true}
                            nodeRef={nodeRefSecond}
                        >
                            <div
                                className="main-business-intro-transition-wrapper"
                                ref={nodeRefSecond}
                            >
                                <div>외식사업</div>
                                <div>
                                    <span className="intro-main-paragraph">
                                        맛을 아는 사람들은
                                    </span>
                                    <br />
                                    <span className="intro-sub-paragraph">
                                        천년기업 캘리스코를 만들어갑니다.
                                        <br />
                                        <br />
                                        20여년간 외식산업분야에서
                                        <br />
                                        풍부한 경험과 노하우를 쌓아 온 글로벌
                                        기업,
                                        <br />
                                        캘리스코
                                    </span>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
                <div className="col main-business-intro-card-wrapper">
                    <div
                        className="main-business-intro-card"
                        onMouseOver={() => setSecondInfoHovered(true)}
                        onMouseLeave={() => setSecondInfoHovered(false)}
                    >
                        <CSSTransition
                            in={!secondInfoHovered}
                            timeout={200}
                            appear={true}
                            unmountOnExit={true}
                            nodeRef={nodeRefThird}
                        >
                            <div
                                className="main-business-intro-transition-wrapper"
                                ref={nodeRefThird}
                            >
                                <div className="main-business-intro-icon-wrapper">
                                    <img
                                        src={Market}
                                        alt="Market icon"
                                        style={{ opacity: 0.5 }}
                                    />
                                </div>
                                <div style={{ opacity: 0.5 }}>가정간편식</div>
                            </div>
                        </CSSTransition>
                        <CSSTransition
                            in={secondInfoHovered}
                            timeout={200}
                            appear={true}
                            unmountOnExit={true}
                            nodeRef={nodeRef4th}
                        >
                            <div
                                className="main-business-intro-transition-wrapper"
                                ref={nodeRef4th}
                            >
                                <div>가정간편식</div>
                                <div>
                                    <span className="intro-main-paragraph">
                                        맛을 아는 사람들 캘리스코는
                                    </span>
                                    <br />
                                    <span className="intro-sub-paragraph">
                                        레스토랑에서 느낀 맛과 퀄리티를
                                        <br />
                                        그 맛, 그대로 가정에서도 즐길 수 있도록
                                        <br />
                                        고민하고 연구합니다.
                                    </span>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
                <div className="col main-business-intro-card-wrapper">
                    <div
                        className="main-business-intro-card"
                        onMouseOver={() => setThirdInfoHovered(true)}
                        onMouseLeave={() => setThirdInfoHovered(false)}
                    >
                        <CSSTransition
                            in={!thirdInfoHovered}
                            timeout={200}
                            appear={true}
                            unmountOnExit={true}
                            nodeRef={nodeRef5th}
                        >
                            <div
                                className="main-business-intro-transition-wrapper"
                                ref={nodeRef5th}
                            >
                                <div className="main-business-intro-icon-wrapper">
                                    <img
                                        src={Research}
                                        alt="Research icon"
                                        style={{ opacity: 0.5 }}
                                    />
                                </div>
                                <div style={{ opacity: 0.5 }}>건강연구</div>
                            </div>
                        </CSSTransition>
                        <CSSTransition
                            in={thirdInfoHovered}
                            timeout={200}
                            appear={true}
                            unmountOnExit={true}
                            nodeRef={nodeRef6th}
                        >
                            <div
                                className="main-business-intro-transition-wrapper"
                                ref={nodeRef6th}
                            >
                                <div>건강연구</div>
                                <div>
                                    <span className="intro-main-paragraph">
                                        2021 <br />
                                        Coming Soon
                                    </span>
                                    <br />
                                    <span className="intro-sub-paragraph">
                                        맛을 아는 사람들 캘리스코는
                                        <br />
                                        미래를 향하여 준비중입니다.
                                    </span>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBusinessIntro;
