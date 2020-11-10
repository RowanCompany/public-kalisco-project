import React, { useState, useMemo, useRef, useEffect } from "react";
import ContactBanner from "./ContactBanner";
import styles from "./contact.module.scss";
import storeData from "./storeData";
import axios from "axios";
//import { useLocation } from "react-router-dom";

/*function useQuery() {
  return new URLSearchParams(useLocation().search);
}*/

function Contact() {
  const [description, setDescription] = useState("");
  const textLength = useMemo(() => description.length, [description]);
  //const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const formRef = useRef(null);
  const [countryNumber, setCountryNumber] = useState("+82");
  const [telNumber, setTelNumber] = useState("");
  const [name, setName] = useState("");

  //let query = useQuery();
  //const querySubject = query.get("subject");
  /*useEffect(() => {
    if (querySubject) {
      switch (querySubject) {
        case "saboten":
          setBrand(102);
          break;
        case "hibarin":
          setBrand(103);
          break;
        default:
          break;
      }
    }
    return () => setBrand("");
  }, [querySubject]);*/
  useEffect(() => {
    const authData = sessionStorage.getItem("tempAuthData");
    if (!authData) {
      window.location.assign("/contact");
    }
    axios
      .post(
        "https://qlog2z6ai2.execute-api.ap-northeast-2.amazonaws.com/kalisco/v1/id/check/decode",
        {
          encodingData: authData,
        }
      )
      .then((res) => {
        const data = JSON.parse(res.data);
        const sName = data["sName"];
        if (!sName) {
          sessionStorage.removeItem("tempAuthData");
          window.location.assign("/contact");
        } else {
          setName(sName);
        }
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(formRef.current);
    data.append("phone", countryNumber + telNumber);
    const term = window.parseInt(data.get("term"));
    if (term === 2) {
      window.alert("개인정보 수집 이용에 동의하셔야 합니다.");
      return false;
    }
    let dataObject = {};
    data.forEach((value, key) => {
      switch (key) {
        case "code":
          dataObject[key] = window.parseInt(value);
          break;
        case "content":
          dataObject[key] = value.replace(/\n/g, "<br />");
          break;
        default:
          dataObject[key] = value;
          break;
      }
    });
    const json = JSON.stringify(dataObject);
    const apiUrl =
      "https://3nbky7tmc7.execute-api.ap-northeast-2.amazonaws.com/kalisco/api/v1";
    axios
      .post(apiUrl, json, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        window.alert("메일 발송에 성공했습니다!");
        sessionStorage.removeItem("tempAuthData");
        document.location.reload();
      })
      .catch(() => {
        window.alert("메일 발송에 실패했습니다, 관리자에게 문의해주세요.");
        return false;
      });
  }

  return (
    <>
      <ContactBanner subject="contact" />
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactTitle}>문의 작성</div>
          <div className={styles.contactFormPanel}>
            {/* <form encType="multipart/form-data"> */}
            <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
              <div className={styles.formWrapper}>
                <div>
                  <label htmlFor="name" className={styles.commonFormLabel}>
                    작성자
                  </label>
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  defaultValue={name}
                  className={`${styles.commonFormInput} ${styles.writerFormInput}`}
                  disabled={Boolean(name)}
                />
              </div>
              <div className={styles.formWrapper}>
                <div>
                  <label htmlFor="email" className={styles.commonFormLabel}>
                    이메일
                  </label>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className={`${styles.commonFormInput} ${styles.writerFormInput}`}
                />
              </div>
              <div className={styles.formWrapper}>
                <div>
                  <label htmlFor="mobile" className={styles.commonFormLabel}>
                    휴대전화
                  </label>
                </div>
                <div className="d-flex">
                  <div>
                    <select
                      name="mobile"
                      id="mobile"
                      className={`${styles.commonSelectInput} ${styles.telSelectInput}`}
                      defaultValue="+82"
                      required
                      onChange={(e) => setCountryNumber(e.target.value)}
                    >
                      <option value="+82">+82</option>
                    </select>
                  </div>
                  <div className="position-relative">
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="휴대전화번호 입력"
                      required
                      onInput={(e) => setTelNumber(e.target.value)}
                      className={`${styles.commonFormInput} ${styles.telFormInput}`}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.formWrapper}>
                <div className="d-flex">
                  {/*<div>
                    <div>
                      <label htmlFor="type" className={styles.commonFormLabel}>
                        분류
                      </label>
                    </div>
                    <div>
                      <select
                        name="type"
                        id="type"
                        className={`${styles.commonSelectInput} ${styles.categorySelectInput}`}
                        defaultValue=""
                        required
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="" hidden disabled>
                          선택
                        </option>
                        <option value="칭찬">칭찬</option>
                        <option value="불만">불만</option>
                        <option value="문의">문의</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>
                  </div>*/}
                  <div>
                    <div>
                      <label
                        htmlFor="sub_type"
                        className={styles.commonFormLabel}
                      >
                        유형
                      </label>
                    </div>
                    <div className="position-relative">
                      <select
                        name="sub_type"
                        id="sub_type"
                        className={`${styles.commonSelectInput} ${styles.categorySubInput}`}
                        defaultValue=""
                        required
                      >
                        <option value="" hidden disabled>
                          선택
                        </option>
                        <option value="서비스">서비스</option>
                        <option value="메뉴">메뉴</option>
                        <option value="위생">위생</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>
                  </div>
                  {/*{category && (
                    <div>
                      <div>
                        <label
                          htmlFor="sub_type"
                          className={styles.commonFormLabel}
                        >
                          유형
                        </label>
                      </div>
                      <div className="position-relative">
                        <select
                          name="sub_type"
                          id="sub_type"
                          className={`${styles.commonSelectInput} ${styles.categorySubInput}`}
                          defaultValue=""
                          required
                        >
                          <option value="" hidden disabled>
                            선택
                          </option>
                          <option value="서비스">서비스</option>
                          <option value="메뉴">메뉴</option>
                          <option value="위생">위생</option>
                          <option value="기타">기타</option>
                        </select>
                      </div>
                    </div>
                  )}*/}
                </div>
              </div>
              <div className={styles.formWrapper}>
                <div className="d-flex">
                  <div>
                    <div>
                      <label htmlFor="code" className={styles.commonFormLabel}>
                        브랜드
                      </label>
                    </div>
                    <div>
                      <select
                        name="code"
                        id="code"
                        className={`${styles.commonSelectInput} ${styles.categorySelectInput}`}
                        defaultValue={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        required
                      >
                        <option value="" hidden disabled>
                          선택
                        </option>
                        <option value="101">캘리스코</option>
                        <option value="102">사보텐</option>
                        <option value="103">히바린</option>
                        <option value="104">타코벨</option>
                        <option value="105">센트럴키친</option>
                        <option value="106">reperk</option>
                      </select>
                    </div>
                  </div>
                  {storeData[brand] && (
                    <div>
                      <div>
                        <label
                          htmlFor="store"
                          className={styles.commonFormLabel}
                        >
                          매장
                        </label>
                      </div>
                      <div className="position-relative">
                        <select
                          name="store"
                          id="store"
                          className={`${styles.commonSelectInput} ${styles.categorySubInput}`}
                          defaultValue=""
                          required
                        >
                          <option value="" hidden disabled>
                            선택
                          </option>
                          {storeData[brand] &&
                            storeData[brand].map((d, i) => (
                              <option value={d.title} key={i}>
                                {d.title}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.formWrapper}>
                <div>
                  <label htmlFor="title" className={styles.commonFormLabel}>
                    제목
                  </label>
                </div>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className={`${styles.titleInput}`}
                  placeholder="제목을 입력해주세요."
                  required
                />
              </div>
              <div className={styles.formWrapper}>
                <div>
                  <label htmlFor="content" className={styles.commonFormLabel}>
                    내용
                  </label>
                </div>
                <div className={styles.descriptionPanel}>
                  <div>
                    <textarea
                      name="content"
                      id="content"
                      placeholder="2000자 이내로 내용을 입력해주세요."
                      onInput={(e) => setDescription(e.target.value)}
                      maxLength={2000}
                      className={styles.description}
                      required
                    />
                  </div>
                  <div className={styles.countText}>{textLength} / 2,000</div>
                </div>
              </div>
              <div className={styles.formWrapper}>
                <div className={styles.commonFormLabel}>
                  [개인정보 수집·이용 안내]
                </div>
                <div>
                  <table className={styles.termTable}>
                    <tbody>
                      <tr>
                        <td className={styles.tdTitle}>
                          수집 목적 및 이용목적
                        </td>
                        <td>
                          서비스이용에 따른 본인인증 확인, 고객 문의에 대한
                          상담내용 접수 및 상담결과 회신
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.tdTitle}>수집항목</td>
                        <td>성명, 이메일주소, 전화번호</td>
                      </tr>
                      <tr>
                        <td className={styles.tdTitle}>보유 및 이용기간</td>
                        <td>
                          <b style={{ paddingLeft: "16px" }}>
                            회원정보만을 추출하여 별도로 축적하지는 않으며,
                            고객문의 사항과 함께 보존됩니다.
                          </b>
                          <ul>
                            <li>
                              계약 또는 청약철회 등에 관한 기록 :
                              5년 (전자상거래등에서의 소비자보호에 관한 법률)
                            </li>
                            <li>
                              대금결제 및 재화 등의 공급에 관한 기록:
                              5년 (전자상거래등에서의 소비자보호에 관한 법률)
                            </li>
                            <li>
                              소비자의 불만 또는 분쟁처리에 관한 기록 :
                              3년 (전자상거래등에서의 소비자보호에 관한 법률)
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={styles.checkboxInlineGroup}>
                  <div className={styles.checkboxInline}>
                    <input
                      type="radio"
                      name="term"
                      value="1"
                      id="term-agree"
                      required="required"
                      className={styles.checkboxInlineRadio}
                    />
                    <label htmlFor="term-agree">동의합니다.</label>
                  </div>
                  <div className={styles.checkboxInline}>
                    <input
                      type="radio"
                      name="term"
                      value="2"
                      id="term-disagree"
                      className={styles.checkboxInlineRadio}
                      required="required"
                    />
                    <label htmlFor="term-disagree">동의하지 않습니다.</label>
                  </div>
                </div>
                <div className={styles.termDescription}>
                  *수집항목에 동의를 거부할 수 있으며, 동의를 거부 시
                  문의서비스를 등록하실 수 없습니다.
                </div>
              </div>
              {/* <div className={styles.formWrapper}>
                                <div>
                                    <label
                                        htmlFor="file"
                                        className={styles.commonFormLabel}
                                    >
                                        파일첨부
                                    </label>
                                </div>
                                <div className="d-flex">
                                    <div>
                                        <label
                                            htmlFor="file"
                                            className={styles.fileLabel}
                                        >
                                            {fileName === ""
                                                ? "이미지파일 최대 20M"
                                                : fileName}
                                        </label>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className={styles.fileButton}
                                        >
                                            <label
                                                htmlFor="file"
                                                className={
                                                    styles.fileButtonLabel
                                                }
                                            >
                                                찾아보기
                                            </label>
                                        </button>
                                    </div>
                                    <input
                                        type="file"
                                        name="file"
                                        id="file"
                                        hidden
                                        accept="image/*"
                                        onInput={(e) => {
                                            if (e.target.files.length > 0) {
                                                setFileName(
                                                    e.target.files[0].name
                                                );
                                            } else {
                                                setFileName("");
                                            }
                                        }}
                                    />
                                </div>
                            </div> */}
              <div className={styles.formSubitButtonWrapper}>
                <div>
                  <button type="reset" className={styles.resetButton}>
                    취소
                  </button>
                </div>
                <div>
                  <button type="submit" className={styles.submitButton}>
                    완료
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
