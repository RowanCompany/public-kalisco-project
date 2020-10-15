import React from "react";
import ContactBanner from "./ContactBanner";
import styles from "./contact.module.scss";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import image1 from "../../static/images/img-event-new-10.jpg";
import image2 from "../../static/images/img-notice-content-2.gif";

import "./bootstrap.scss";

function Notice() {
  return (
    <>
      <ContactBanner subject="notices" />
      <section className={styles.noticeSection}>
        <div className="container">
          <form>
            <div className={styles.searchFormWrapper}>
              <div className={styles.searchFormTitle}>공지사항</div>
              <div className={styles.searchFormInputWrapper}>
                <div>
                  <label className="d-inline-block">
                    <input type="text" className={styles.searchFormInput} />
                  </label>
                </div>
                <div className={styles.searchFormButtonWrapper}>
                  <button type="submit" className={styles.searchFormButton}>
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
                    <div className={styles.headerTitleNumber}>2</div>
                    <div className={styles.headerTitleCategory}>캘리스코</div>
                    <div className={styles.headerTitle}>
                      캘리스코 통합 홈페이지 Grand OPEN
                    </div>
                    <div className={styles.headerTitleSideWrapper}>
                      <div className={styles.headerTitleCreatedAt}>
                        2020.10.14
                      </div>
                    </div>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <img src={image1} alt="grand open" />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <div className={styles.headerTitleWrapper}>
                    <div className={styles.headerTitleNumber}>1</div>
                    <div className={styles.headerTitleCategory}>캘리스코</div>
                    <div className={styles.headerTitle}>
                      캘리스코 2019 결산공고 보기
                    </div>
                    <div className={styles.headerTitleSideWrapper}>
                      <div className={styles.headerTitleCreatedAt}>
                        2020.10.15
                      </div>
                    </div>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <img src={image2} alt="결산공고" className="img-fluid" />
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

export default Notice;
