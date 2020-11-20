import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import styles from "./mobile_contact.module.scss";
import "./bootstrap.scss";

import image1 from "../../../static/images/img-event-new-10.jpg";
import image2 from "../../../static/images/img-notice-content-2.gif";

export default function ContactFaq() {


    return (
        <>
          <section className={styles.contactFaqSection}>
            <div className={styles.contactFaqWrapper}>
                <div className={styles.contactFaqTitle}>FAQ</div>
                <div>
                    <Accordion className={styles.AccordionWrapper}>
                        <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <div className={styles.cardHeaderWrapper}>
                                <div className={styles.cardHeaderNum}>2</div>
                                <div>
                                    <div className={styles.cardHeaderMain}>
                                        <div className={styles.cardHeaderTitle}>캘리스코 통합 홈페이지 Grand OPEN</div>
                                    </div>
                                    <div className={styles.cardHeaderSideWrapper}>
                                        <div className={styles.cardHeaderSideDate}>2020.10.14</div>
                                    </div>
                                </div>
                                <div className={styles.cardHeaderCategory}>캘리스코</div>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className={styles.cardDescWrapper}>
                                <div className={styles.cardDescText}>
                                <img src={image1} alt="img" className="img-fill"/>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion className={styles.AccordionWrapper}>
                        <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <div className={styles.cardHeaderWrapper}>
                                <div className={styles.cardHeaderNum}>1</div>
                                <div>
                                    <div className={styles.cardHeaderMain}>
                                        <div className={styles.cardHeaderTitle}>캘리스코 2019 결산공고 보기</div>
                                    </div>
                                    <div className={styles.cardHeaderSideWrapper}>
                                        <div className={styles.cardHeaderSideDate}>2020.10.14</div>
                                    </div>
                                </div>
                                <div className={styles.cardHeaderCategory}>캘리스코</div>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className={styles.cardDescWrapper}>
                                <div className={styles.cardDescText}>
                                    <img src={image2} alt="img" className="img-fill"/>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
          </section>
        </>
    );
}