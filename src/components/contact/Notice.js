import React from "react";
import ContactBanner from "./ContactBanner";
import styles from "./contact.module.scss";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import image1 from "../../static/images/img-event-new-10.jpg";

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
                    <div className={styles.headerTitleNumber}>1</div>
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
              {/*<Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <div className={styles.headerTitleWrapper}>
                                        <div
                                            className={styles.headerTitleNumber}
                                        >
                                            99
                                        </div>
                                        <div
                                            className={
                                                styles.headerTitleCategory
                                            }
                                        >
                                            전체
                                        </div>
                                        <div className={styles.headerTitle}>
                                            개인정보 처리 방침 개정 안내(2020년
                                            12월 31일부터 적용)
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
                                        사보텐은 새로운 시그니처 메뉴를
                                        선보이고자 코엑스 몰 지하 2층에서
                                        2020.7.15~2020.8.15까지 일시적으로
                                        컨셉스토어를 오픈합니다.
                                        <br />
                                        이번 시그니처 메뉴는 정통 돈카츠를
                                        탈피한 새로운 방식의 돈카츠로써 고객
                                        여러분의 입맛을 알기 위한
                                        <br />
                                        저희 캘리스코의 관심으로부터 이번 임시
                                        매장을 진행하게 되었습니다.
                                        <br />
                                        <br />
                                        감사합니다.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>*/}
            </Accordion>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default Notice;
