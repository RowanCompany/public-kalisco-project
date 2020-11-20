import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import styles from "./mobile_contact.module.scss";
import "./bootstrap.scss";

import FaqData from "./FaqData";

const FaqDataLength = FaqData.length;

export default function ContactFaq() {


    return (
        <>
          <section className={styles.contactFaqSection}>
            <div className={styles.contactFaqWrapper}>
                <div className={styles.contactFaqTitle}>FAQ</div>
                <div>
                    <Accordion className={styles.AccordionWrapper}>
                        {FaqData.reverse().map((d, i) => (
                            <Card key={i}>
                            <Accordion.Toggle as={Card.Header} eventKey={i + 1}>
                                <div className={styles.cardHeaderWrapper}>
                                    <div className={styles.cardHeaderNum}>Q</div>
                                    <div>
                                        <div className={styles.cardHeaderMain}>
                                            <div className={styles.cardHeaderTitle}>{d.question}</div>
                                        </div>
                                        <div className={styles.cardHeaderSideWrapper}>
                                            <div className={styles.cardHeaderSideDate}>2020.10.14</div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={i + 1}>
                                <Card.Body className={styles.cardDescWrapper}>
                                    <div className={styles.cardDescText}>
                                        A. {d.description}
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                        ))}
                    </Accordion>
                </div>
            </div>
          </section>
        </>
    );
}