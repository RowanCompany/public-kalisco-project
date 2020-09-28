import React from "react";
import ContactBanner from "./ContactBanner";
import styles from "./contact.module.scss";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import "./bootstrap.scss";

function Faq() {
    return (
        <>
            <ContactBanner subject="faq" />
            <section className={styles.noticeSection}>
                <div className="container">
                    <form>
                        <div className={styles.searchFormWrapper}>
                            <div className={styles.searchFormTitle}>FAQ</div>
                            <div className={styles.searchFormInputWrapper}>
                                <div>
                                    <label className="d-inline-block">
                                        <input
                                            type="text"
                                            className={styles.searchFormInput}
                                        />
                                    </label>
                                </div>
                                <div className={styles.searchFormButtonWrapper}>
                                    <button
                                        type="submit"
                                        className={styles.searchFormButton}
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div>
                        <Accordion className={styles.noticeAccordionWrapper}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <div className={styles.headerTitleWrapper}>
                                        <div
                                            className={styles.headerTitleNumber}
                                        >
                                            100
                                        </div>
                                        <div className={styles.headerTitle}>
                                            쿠폰 선물하기는 어떻게 하는건가요?
                                        </div>
                                        <div
                                            className={
                                                styles.headerTitleSideWrapper
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.headerTitleCreatedAt
                                                }
                                            >
                                                2020.09.24
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        쿠폰 선물하기 이용 방법은 홈페이지 또는
                                        APP 에서 로그인 후 마이쿠폰 &gt; 리워즈
                                        쿠폰에서 쿠폰을 선택하시면 쿠폰 상세에서
                                        하단 쿠폰 선물하기를 통해 가능합니다.
                                        <br />
                                        <br />
                                        쿠폰 선물하기는 캘리스코 APP, 문자,
                                        카카오톡으로 선물할 수 있습니다.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <div className={styles.headerTitleWrapper}>
                                        <div
                                            className={styles.headerTitleNumber}
                                        >
                                            99
                                        </div>
                                        <div className={styles.headerTitle}>
                                            기념일 초대권은 무엇인가요?
                                        </div>
                                        <div
                                            className={
                                                styles.headerTitleSideWrapper
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.headerTitleCreatedAt
                                                }
                                            >
                                                2020.09.24
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        고객님의 생일을 축하해드리는 혜택입니다.
                                        <br />
                                        <br />
                                        생일 쿠폰으로 제공되는 혜택은 ”디저트
                                        5종 중 택1 &amp; 아메리카노 2잔”이
                                        제공됩니다.
                                        <br />
                                        (*디저트 6종: 바닐라 아이스크림,
                                        아포가토, 밀 크레이프, 캐럿 케이크,
                                        바나나 크레이프 파우치)
                                        <br />
                                        <br />타 혜택과 중복 사용 가능하며,
                                        사용기간은 생일 당일 포함 전후 각 7일씩,
                                        총 15일 동안 사용 가능합니다.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                    <div></div>
                </div>
            </section>
        </>
    );
}

export default Faq;
